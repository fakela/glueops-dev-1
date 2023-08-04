# Test Deployment
FROM httpd:2.4.57

COPY build/index.html /app/build/usr/local/apache2/htdocs/build/index.html
