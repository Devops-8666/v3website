FROM nginx:alpine

USER root

# Fix the permissions for the /usr/share/nginx/html/ directory
RUN chmod -R 777 /usr/share/nginx/html/

# Create and set permissions for the cache directory
RUN mkdir -p /var/cache/nginx/client_temp && chmod -R 777 /var/cache/nginx

# Switch back to nginx user
USER nginx

# Now, remove the default nginx html files
RUN rm -rf /usr/share/nginx/html/*

