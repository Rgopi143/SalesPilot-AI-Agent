#!/bin/bash

# Render Build Script for Ranbridge Solutions Website

echo "Starting build process..."

# Navigate to project directory
cd Project

# Install dependencies
echo "Installing dependencies..."
npm install

# Set environment variables
export NODE_ENV=production
export GEMINI_API_KEY=$GEMINI_API_KEY

# Build the application
echo "Building the application..."
npm run build

echo "Build completed successfully!"

# List the contents of the dist directory
echo "Build output:"
ls -la dist/
