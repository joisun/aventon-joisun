# get the basic image
FROM nginx:stable-alpine

# remove the default web page
RUN rm -rf /usr/share/nginx/html/*

# overwrite nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
