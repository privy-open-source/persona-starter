##############################
## Building
##############################
FROM node:18-alpine as builder

RUN apk update && apk upgrade --ignore alpine-baselayout && \
    apk add --no-cache \
    bash \
    git \
    curl \
    openssh

# Set working directory
WORKDIR /usr/src/app

# Set npm loglevel
ENV NPM_CONFIG_LOGLEVEL=warn

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./
COPY ./yarn.lock ./
COPY ./.yarnrc.yml ./
COPY ./.yarn ./.yarn

# Install dependencies
RUN yarn install --immutable

# Copy all files
COPY ./ ./

# Set node env
ENV NODE_ENV=production

# Build app
RUN yarn build

##############################
## Running
##############################
FROM keymetrics/pm2:18-alpine

# Add package curl
RUN apk add --no-cache curl

# Set working directory
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.output/ ./.output/
COPY ./deploy/ecosystem.config.js ./

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

# Build Information
ARG BUILD_VERSION
ARG BUILD_DATE

# for endpoint /ping return version
ENV BUILD_VERSION=${BUILD_VERSION}
# for endpoint /ping return date build
ENV BUILD_DATE=${BUILD_DATE}
# for datadog version visibility
ENV DD_VERSION=${BUILD_VERSION}

# Launch app with PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
