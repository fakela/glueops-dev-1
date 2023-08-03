# Test Deployment
FROM httpd:2.4.57

COPY --from=build /app/build /usr/local/apache2/htdocs/
