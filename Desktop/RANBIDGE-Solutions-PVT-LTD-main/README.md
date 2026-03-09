# Ranbidge Solutions Private Limited

A modern IT solutions company providing comprehensive web development, software development, cloud services, and digital transformation solutions.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/ranbridgeserviceprivatelimited-sys/RANBIDGE-Solutions-PVT-LTD.git

# Navigate to project directory
cd RANBIDGE-Solutions-PVT-LTD/Project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run preview   # Preview production build
npm run start    # Start production server
```

## 🏗️ Project Structure

```
RANBIDGE-Solutions-PVT-LTD/
├── Project/                          # Main application directory
│   ├── components/                 # React components
│   │   ├── Header.tsx             # Navigation header
│   │   ├── Home.tsx               # Homepage section
│   │   ├── About.tsx              # About page
│   │   ├── Services.tsx            # Services page
│   │   ├── Domains.tsx             # Domains page
│   │   ├── Internship.tsx          # Internship page
│   │   ├── Contact.tsx              # Contact page
│   │   ├── Footer.tsx              # Footer component
│   │   └── ...                    # Other components
│   ├── public/                     # Static assets
│   │   ├── company-info.json        # Company information for SEO
│   │   ├── opensearch.xml          # Browser search integration
│   │   ├── manifest.json            # PWA manifest
│   │   ├── organization.json        # Schema.org structured data
│   │   └── SEO-README.md          # SEO implementation guide
│   ├── src/                        # Source files
│   ├── App.tsx                    # Main App component
│   ├── index.html                  # HTML template
│   ├── index.css                   # Global styles
│   ├── vite.config.ts              # Vite configuration
│   ├── tsconfig.json               # TypeScript configuration
│   └── package.json                # Dependencies and scripts
├── render.yaml                      # Render deployment configuration
├── render-build.sh                  # Render build script
├── docker-compose.yml               # Docker configuration
├── Dockerfile                      # Docker container setup
└── DEPLOYMENT.md                   # Deployment guide
```

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **Lucide React** - Icon library
- **React Router** - Client-side routing

### Build Tools
- **Vite** - Build tool and dev server
- **TypeScript** - Compilation and type checking

### Deployment
- **Render** - Cloud hosting platform
- **Docker** - Containerization
- **Nginx** - Web server

## 🌐 Features

### Core Functionality
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - GSAP-powered interactions
- **SEO Optimized** - Meta tags, structured data, sitemaps
- **Progressive Web App** - PWA capabilities
- **Browser Search Integration** - OpenSearch support
- **Voice Assistant** - AI-powered interactions
- **Contact Forms** - Multi-channel communication

### Pages
- **Home** - Hero section with services overview
- **About** - Company information and team
- **Services** - Detailed service offerings
- **Domains** - Technical expertise areas
- **Internship** - Internship program details
- **Contact** - Contact form and information

## 🔧 Development

### Environment Setup
1. Clone the repository
2. Navigate to `Project/` directory
3. Run `npm install`
4. Start development with `npm run dev`

### Code Style
- **TypeScript** for type safety
- **Functional components** with React hooks
- **Tailwind CSS** for styling
- **ESLint** for code quality

### Git Workflow
```bash
# Create feature branch
git checkout -b feature-name

# Make changes
# ... edit files ...

# Commit changes
git add .
git commit -m "Add feature description"

# Push to remote
git push origin feature-name

# Merge to main
git checkout main
git merge feature-name
git push origin main
```

## 🚀 Deployment

### Local Development
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Deployment
```bash
# Build and run with Docker
docker-compose up --build

# Access at http://localhost:3000
```

### Render Deployment
1. Connect repository to [Render](https://render.com)
2. Configure build settings:
   - **Build Command**: `chmod +x render-build.sh && ./render-build.sh`
   - **Publish Directory**: `Project/dist`
   - **Environment Variables**: `NODE_ENV=production`

## 📱 Mobile Optimization

- **Responsive Design** - Mobile-first CSS approach
- **Touch-Friendly** - Optimized for touch interactions
- **Performance** - Lazy loading and optimization
- **PWA Support** - App shortcuts and offline capabilities

## 🔍 SEO Features

- **Meta Tags** - Title, description, keywords
- **Open Graph** - Social media sharing
- **Twitter Cards** - Twitter optimization
- **Structured Data** - Schema.org markup
- **Browser Search** - OpenSearch integration
- **Sitemap** - XML sitemap for search engines
- **Canonical URLs** - Prevent duplicate content

## 📊 Analytics & Monitoring

### Search Console
- Google Search Console integration
- Bing Webmaster Tools setup
- Performance monitoring

### SEO Metrics
- Search ranking tracking
- Organic traffic monitoring
- Backlink analysis

## 🔐 Security

### Implementation
- **HTTPS Only** - All connections use SSL/TLS
- **Security Headers** - X-Frame-Options, CSP, XSS protection
- **Input Validation** - Form sanitization and validation
- **Dependency Updates** - Regular security patching

## 🤝 Support

### Contact Information
- **Email**: info@ranbidge.com
- **Phone**: +91 82473 92437
- **Address**: Narasaraopet, Andhra Pradesh, India

### Social Media
- **LinkedIn**: [Ranbridge Solutions](https://www.linkedin.com/in/ranbidge-solutions-private-limited-company-a98983376)
- **Facebook**: [Ranbridge Solutions](https://www.facebook.com/profile.php?id=61578597456959)
- **Instagram**: [@rspl_academy](https://www.instagram.com/rspl_academy)
- **Twitter**: [@RanbridgePvtLtd](https://x.com/RanbridgePvtLtd)
- **YouTube**: [@RSPL-Academy](https://www.youtube.com/@RSPL-Academy)

## 📝 License

This project is proprietary software owned by Ranbridge Solutions Private Limited.

## 🤝 Contributing

We welcome feedback and suggestions for improving our website. Please contact us at info@ranbidge.com.

## 📄 Documentation

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

For Docker setup instructions, see [DOCKER.md](./Project/DOCKER.md).

For SEO implementation guide, see [Project/public/SEO-README.md](./Project/public/SEO-README.md).

---

**© 2026 Ranbidge Solutions Private Limited. All rights reserved.**
