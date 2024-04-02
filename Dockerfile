# Base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files and folders to the current working directory (i.e., "app" folder)
COPY . .

# Expose port 8080 to the outside once the container has launched
EXPOSE 4173

# Command to run the app
CMD ["npm", "run", "preview"]