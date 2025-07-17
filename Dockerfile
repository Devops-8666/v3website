# Use the official Nginx image as a base
FROM nginx:alpine

# Copy your static web app files (HTML, CSS, JS, etc.) to the Nginx directory
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./about.html /usr/share/nginx/html/about.html
COPY ./contact.html /usr/share/nginx/html/contact.html
COPY ./services.html /usr/share/nginx/html/services.html
COPY ./solutions.html /usr/share/nginx/html/solutions.html
COPY ./css /usr/share/nginx/html/css
COPY ./js /usr/share/nginx/html/js
COPY ./assets /usr/share/nginx/html/assets
COPY ./chatbot /usr/share/nginx/html/chatbot

# Expose the port that Nginx will listen on
EXPOSE 80

# The default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]

