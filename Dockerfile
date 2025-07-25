FROM nginx:alpine AS base

# Copy the static files to the nginx default directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expose the port on which the app will run
EXPOSE 80

# Use a non-root user for security
USER nginx

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]