# Build Stage
FROM node:16.3 AS development
WORKDIR /cache
# Copy the package.json file.
COPY package*.json .
# Install application dependencies.
RUN npm install

# Set the working directory.
WORKDIR /healthy_app
ENV PATH /healthy_app/node_modules/.bin:$PATH
# Copy the rest of the application files.
COPY . .
