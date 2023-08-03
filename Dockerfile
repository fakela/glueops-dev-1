# Test Deployment
FROM httpd:2.4.57

COPY src/pages/index.tsx /usr/local/apache2/htdocs/src/pages/index.tsx
