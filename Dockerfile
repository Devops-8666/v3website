# OpenShift compatible NGINX image
FROM registry.access.redhat.com/ubi9/nginx-122

# Copy website files
COPY . /opt/app-root/src

# Expose application port
EXPOSE 8080
