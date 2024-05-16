FROM node 
WORKDIR /app
ENV DATABASE_URL=postgres://postgres:postgres@31.129.63.129:5432/jewelry
ENV TA=access
ENV TR=refresh
COPY . . 
RUN cd client && npm install && npm run build
RUN cd server && npm install
EXPOSE 4000 
CMD ["node", "server/app.js"] 