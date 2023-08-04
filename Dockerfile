# Stage 1: Build the Docusaurus app
FROM node:16 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package files
COPY package.json yarn.lock /app/

# Install dependencies
RUN yarn install

# Copy the Docusaurus app files into the container
COPY . /app/

# Build the Docusaurus app
RUN yarn build

# Stage 2: Create the final Docker image
FROM httpd:2.4.57

# Copy the built files from the build-stage into the web server's htdocs directory
COPY --from=build-stage /app/build /usr/local/apache2/htdocs/

# Expose the port on which the web server will listen (optional)
EXPOSE 80

# Start the web server
CMD ["httpd-foreground"]
