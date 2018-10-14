FROM corefantasy/httpd

RUN rm -rf /usr/local/apache2/htdocs/*  # Clean out junk from base image

COPY build/ /usr/local/apache2/htdocs/
