FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy prisma schema
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

COPY . .

EXPOSE 3000
CMD ["npm", "start"]