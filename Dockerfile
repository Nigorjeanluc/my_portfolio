# # Dockerfile
 
# # Use an existing node alpine image as a base image.
# FROM node:20-alpine
 
# # Set the working directory.
# WORKDIR /app
 
# # Copy the package.json file.
# COPY package.json .
 
# # Install application dependencies.
# RUN apt-get update && apt-get install -y nodejs
# RUN npm install
 
# # Copy the rest of the application files.
# COPY . .
 
# # Expose the port.
# EXPOSE 3000
 
# # Run the application.
# CMD [“npm”, “start”]

FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY yarn-lock ./
COPY ./ ./
RUN yarn add
CMD ["yarn", "start"]