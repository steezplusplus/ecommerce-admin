# E-Commerce + Dashboard & CMS

Manage multiple vendors through this single dashboard.

## Built with

* NextJS 13 (app/ router)
* Tailwind
* Prisma
* Postgres
* Vercel
* Cloudinary
* Clerk

### Features

* Passwordless signup
* Friendly UI to support CRUD operations for
  * Stores
  * Billboards
  * Categories
  * Sizes
  * Colors
  * Products

### Database Schema

TODO

### Setup
1. Install Packages
```sh
npm i
```

2. Setup `.env`
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DIRECT_DATABASE_URL=
DATABASE_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

3. Prepare prisma
```sh
npx prisma generate
npx prisma db push
```

4. Start the app
```sh
npm run dev
```
#### Available commands

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |