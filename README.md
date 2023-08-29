Sure, here are the steps you can follow to set up your tech stack with Svelte, SQLite, TypeScript, and Express:

1. **Install Node.js**: Make sure you have Node.js installed on your computer. You can download it from the [official website].

2. **Create a new Express project**: Open a terminal or command prompt and navigate to the directory where you want to create your project. Then, run the following command to create a new Express project: `npx express-generator --no-view`. This will create a new directory with the basic structure of an Express application.

3. **Install dependencies**: Navigate to the newly created directory and run `npm install` to install all the dependencies required by your Express application.

4. **Set up TypeScript**: Install TypeScript by running `npm install --save-dev typescript`. Then, run `npx tsc --init` to create a `tsconfig.json` file with the default TypeScript configuration. Install the TypeScript type definitions for Node.js and Express by running `npm install --save-dev @types/node @types/express`.

5. **Set up SQLite**: Install the SQLite package by running `npm install sqlite3`. Then, create a new file in your project's root directory called `db.ts`. In this file, you can set up your SQLite database connection and define any database-related functions you need.

```typescript
import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(':memory:');

// Define your database-related functions here
```

6. **Create API routes**: In your Express application, create a new file called `api.ts` in the `routes` directory. In this file, you can define your API routes and their corresponding CRUD operations.

```typescript
import express from 'express';
const router = express.Router();

// Define your API routes and CRUD operations here

export default router;
```

7. **Mount API routes**: In your `app.ts` file, mount your API routes on the `/api` path by adding the following code:

```typescript
import apiRouter from './routes/api';
app.use('/api', apiRouter);
```

8. **Set up Svelte**: Install the Svelte template by running `npx degit sveltejs/template svelte-app`. This will create a new directory called `svelte-app` with the basic structure of a Svelte application.

9. **Build and serve Svelte app**: Navigate to the `svelte-app` directory and run `npm install` to install all the dependencies required by your Svelte application. Then, run `npm run build` to build your Svelte app. Finally, copy the contents of the `public` directory to the `public` directory of your Express application.

10. **Start Express server**: Navigate back to the root directory of your Express application and run `npm start` to start your Express server. You should now be able to access your Svelte app at `http://localhost:3000/` and your API routes at `http://localhost:3000/api`.

I hope this helps you get started with building your school management system using Svelte, SQLite, TypeScript, and Express! 😊