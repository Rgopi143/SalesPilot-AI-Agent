# Ranbridge Solutions - Docker Deployment Guide

## Docker Setup

This project includes Docker configuration for containerized deployment, ensuring the website appears exactly the same as the live version.

### Prerequisites

- Docker Desktop installed
- Docker Compose installed

### Quick Start

1. **Build and run with Docker Compose:**
   ```bash
   cd Project
   docker-compose up --build
   ```

2. **Access the application:**
   - Open your browser and navigate to: `http://localhost:3000`

### Docker Files Created

- **Dockerfile**: Multi-stage build using Node.js and Nginx
- **docker-compose.yml**: Service configuration for easy deployment
- **nginx.conf**: Nginx configuration optimized for React SPA
- **.dockerignore**: Excludes unnecessary files from Docker build

### Features

- **Multi-stage build**: Optimized image size
- **Nginx serving**: Production-ready static file serving
- **SPA routing support**: Handles React Router correctly
- **Gzip compression**: Optimizes asset delivery
- **Security headers**: Adds security best practices
- **Asset caching**: Improves performance
- **Environment variables**: Production configuration

### Development vs Production

The Docker setup is configured for production mode:
- React app is built and served as static files
- Nginx handles routing and optimization
- All features work identically to the live website

### Port Configuration

- Container port: 80 (Nginx)
- Host port: 3000 (mapped to container)
- Access URL: `http://localhost:3000`

### Troubleshooting

If the site doesn't load correctly:
1. Check if port 3000 is available
2. Run `docker-compose down` then `docker-compose up --build`
3. Clear browser cache

### Production Deployment

For production deployment:
1. Build the image: `docker build -t ranbidge-solutions .`
2. Run the container: `docker run -p 80:80 ranbidge-solutions`
3. Access at: `http://localhost`
