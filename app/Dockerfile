FROM node:14.18.2-stretch-slim

ENV APP_DIR=/meteor
# Install as root (otherwise node-gyp gets compiled as nobody)
USER root
WORKDIR $APP_DIR/bundle/programs/server/

# Copy bundle and scripts to the image APP_DIR
ADD ./app.tar.gz $APP_DIR

RUN apt-get update

RUN apt-get install -y --no-install-recommends g++ build-essential python \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# the install command for debian
RUN echo "Installing the node modules..." \
	&& npm install -g node-gyp \
    && npm install --production --silent

# start the app
WORKDIR /meteor/bundle
CMD ["node","main.js"]
