FROM httpd:2.4

# For debugging help
RUN apt-get update && apt-get install -y less

COPY config/httpd.conf /usr/local/apache2/conf/httpd.conf

COPY build/ /usr/local/apache2/htdocs/

EXPOSE 80
