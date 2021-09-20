FROM node:alpine
WORKDIR /app
COPY . .
COPY .env.example .env
RUN ["npm", "i", "-g", "typescript" ,"pm2"]
RUN ["npm", "i"]
RUN ["npm", "run", "build"]
EXPOSE 3000
CMD ["pm2-runtime", "process.yml"]