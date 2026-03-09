 # Ranbridge Solutions - Deployment Guide

## Render Deployment

This project is configured for deployment on Render.com as a static site.

### Prerequisites

1. **Render Account**: Sign up at [render.com](https://render.com)
2. **GitHub Repository**: The code should be connected to this GitHub repository
3. **Environment Variables**: Set up required environment variables in Render

### Environment Variables

In your Render dashboard, add these environment variables:

- **NODE_ENV**: `production`
- **GEMINI_API_KEY**: Your actual Gemini API key (if using AI features)

### Deployment Steps

1. **Connect Repository**
   - Go to Render Dashboard
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Select the `main` branch

2. **Configure Build Settings**
   - **Build Command**: `chmod +x render-build.sh && ./render-build.sh`
   - **Publish Directory**: `Project/dist`
   - **Root Directory**: Leave empty (repository root)

3. **Add Environment Variables**
   - Go to the "Environment" tab
   - Add the environment variables mentioned above

4. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy your site

### Files Created for Deployment

- `render.yaml` - Render configuration file
- `render-build.sh` - Build script for Render
- `Project/.env.production` - Production environment variables
- Updated `package.json` with start script

### Local Development

To run locally:
```bash
cd Project
npm install
npm run dev
```

### Build Locally

To test the build process locally:
```bash
cd Project
npm run build
npm run preview
```

### Troubleshooting

1. **Build Fails**: Check that all dependencies are installed correctly
2. **Environment Variables**: Ensure all required environment variables are set in Render
3. **Static Assets**: Verify that all static files are properly referenced in the build

### Support

For Render-specific issues, refer to [Render Documentation](https://render.com/docs)
