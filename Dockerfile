# Use official NGINX image
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your static site files
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start NGINX (default CMD is fine for nginx:alpine)

