# Use a newer version of Node.js as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package files
COPY package.json yarn.lock /app/

# Install dependencies
RUN yarn install

# Copy the Docusaurus app files into the container
COPY . /app/

# Build the Docusaurus app (optional)
RUN yarn build

# Expose the port (optional)
EXPOSE 3000

# Start the Docusaurus app
CMD ["yarn", "start"]
