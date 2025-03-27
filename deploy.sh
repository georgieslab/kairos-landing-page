#!/bin/bash

# Exit on any error
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting Καιρός deployment process...${NC}"

# Step 1: Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo -e "${BLUE}Installing dependencies...${NC}"
  npm install
fi

# Step 2: Build the project
echo -e "${BLUE}Building the project...${NC}"
npm run build

# Step 3: Deploy to Firebase
echo -e "${BLUE}Deploying to Firebase...${NC}"
firebase deploy

echo -e "${GREEN}Deployment complete! Your site is now live.${NC}"
echo -e "${GREEN}Visit: https://kairos-landing.web.app${NC}"