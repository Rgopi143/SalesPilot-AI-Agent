
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useLocation } from 'react-router-dom';

const ThreeBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (!mountRef.current) return;

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        // Dark slate/blue theme base
        scene.background = new THREE.Color('#0f172a');

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // --- OBJECTS ---
        let particlesMesh: THREE.Points | null = null;
        let gridHelper: THREE.GridHelper | null = null;
        let secondaryMesh: THREE.Points | null = null; // For the "other" page effect

        // 1) Logic: Home Page vs. Others
        if (location.pathname === '/') {
            // Home: Transparent Three.js bg to reveal CSS image
            scene.background = null;

            // === HOME: VOLUMETRIC PARTICLES ===
            const particlesGeometry = new THREE.BufferGeometry();
            const count = 1500;
            const posArray = new Float32Array(count * 3);
            for (let i = 0; i < count * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 60;
            }
            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

            const material = new THREE.PointsMaterial({
                size: 0.12,
                color: '#3b82f6', // Bright Blue
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });

            particlesMesh = new THREE.Points(particlesGeometry, material);
            scene.add(particlesMesh);

            // Optional subtle grid at bottom
            // REMOVED as per user request to remove "panel type thing"
            // const homeGrid = new THREE.GridHelper(100, 80, 0x1e293b, 0x172554);
            // homeGrid.position.y = -10;
            // homeGrid.rotation.x = 0.2;
            // scene.add(homeGrid);
            // gridHelper = homeGrid;
            // gridHelper = homeGrid;

        } else {
            // === INNER PAGES: CLEANER LOOK ===
            // User requested a change of background. Let's keep it very simple to avoid distraction.
            // Maybe just a few very slow floating particles? Or nothing (just gradient).
            // Let's add very subtle floating dust for depth.

            const geom = new THREE.BufferGeometry();
            const c = 200;
            const p = new Float32Array(c * 3);
            for (let i = 0; i < c * 3; i += 3) {
                p[i] = (Math.random() - 0.5) * 60;
                p[i + 1] = (Math.random() - 0.5) * 60;
                p[i + 2] = (Math.random() - 0.5) * 20;
            }
            geom.setAttribute('position', new THREE.BufferAttribute(p, 3));

            const mat = new THREE.PointsMaterial({
                size: 0.1,
                color: '#94a3b8', // Slate 400
                transparent: true,
                opacity: 0.2
            });
            secondaryMesh = new THREE.Points(geom, mat);
            scene.add(secondaryMesh);
        }

        // --- INTERACTION ---
        const mouse = { x: 0, y: 0 };
        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', onMouseMove);

        // --- ANIMATION ---
        const clock = new THREE.Clock();
        const animate = () => {
            const time = clock.getElapsedTime();

            if (location.pathname === '/' && particlesMesh) {
                // Home: Rotation
                particlesMesh.rotation.y = time * 0.05;
                particlesMesh.rotation.x = time * 0.02;
            } else if (secondaryMesh) {
                // Other: Vertical Drift
                secondaryMesh.rotation.y = time * 0.02;
                // Make them float up slightly
                secondaryMesh.position.y = Math.sin(time * 0.5) * 1;
            }

            // Grid movement
            if (gridHelper) {
                // gridHelper.rotation.z = Math.sin(time * 0.1) * 0.05;
            }

            // Camera Parallax
            camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
            camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // --- RESIZE ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- CLEANUP ---
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            if (mountRef.current) mountRef.current.removeChild(renderer.domElement);

            if (particlesMesh) {
                particlesMesh.geometry.dispose();
                (particlesMesh.material as THREE.Material).dispose();
            }
            if (secondaryMesh) {
                secondaryMesh.geometry.dispose();
                (secondaryMesh.material as THREE.Material).dispose();
            }
            renderer.dispose();
        };

    }, [location.pathname]); // Re-run effect on route change

    // --- SCROLL BLUR LOGIC ---
    useEffect(() => {
        const handleScroll = () => {
            // Only for home page
            if (location.pathname !== '/') return;

            if (window.scrollY > window.innerHeight) {
                if (mountRef.current) {
                    // Add blur with a dark overlay effect for better text contrast
                    mountRef.current.style.filter = 'blur(8px) brightness(0.6)';
                }
            } else {
                if (mountRef.current) {
                    mountRef.current.style.filter = 'none';
                }
            }
        };

        // Reset filter when path changes
        if (mountRef.current) mountRef.current.style.filter = 'none';

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <div
            ref={mountRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-all duration-1000 ease-in-out"
            style={{
                background: location.pathname === '/'
                    ? `linear-gradient(to right bottom, rgba(15, 23, 42, 0.9), rgba(30, 58, 138, 0.85)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')` // Business Team Collaboration
                    : 'linear-gradient(135deg, #020617 0%, #0f172a 100%)', // Simple, clean dark gradient
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'overlay'
            }}
        />
    );
};

export default ThreeBackground;
