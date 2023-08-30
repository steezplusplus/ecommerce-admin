# E-Commerce + Dashboard & CMS

- Manage multiple vendors operations through this single dashboard with unparalleled efficiency.

## Built with

- [E-commerce Store](https://github.com/steezplusplus/ecommerce-store)
- [NextJS 13](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Vercel](https://vercel.com/)
- [Supabase](https://supabase.com/)
- [Cloudinary](https://cloudinary.com/)
- [Clerk](https://clerk.com/)

### Features

- Passwordless signup
- Friendly html forms for creating, updating and deleting resources

### Database Schema

TODO

### Setup

1. Clone this project

2. Install Packages

```shell
npm i
```

3. Setup `.env`

```shell
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

```shell
npx prisma generate
npx prisma db push
```

4. Start the app

```shell
npm run dev
```

5. Create your store

- Uploading resources with the dashboard
- Use the API endpoints it generates to create your own frontend.
- Or, view an exmaple frontend I've built here: [E-commerce Store](https://github.com/steezplusplus/ecommerce-store)

#### Available commands

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

### Entity Relationship Diagram

![ER Diagram](diagrams/er-diagram.svg)

### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)
