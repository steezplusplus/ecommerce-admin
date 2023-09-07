<div align="center">
  <section>
    <h1>
      <a href="https://ecommerce-admin-steez.vercel.app/" target="_blank" >
        Build your own e-commerce store
      </a>
    </h1>
    <img src="diagrams/api-example.png" alt="picture of my store" />
    <h2>
      Manage multiple vendors operations.
    </h2>
  </section>
  <section>
    <a href="https://github.com/steezplusplus/ecommerce-admin/stargazers" target="_blank" >
      <img
        alt="E-commerce admin number of stargazers"
        title="E-commerce admin number of stargazers"
        src="https://custom-icon-badges.demolab.com/github/stars/steezplusplus/ecommerce-admin?logo=star"
      />
    </a>
    <a href="https://github.com/steezplusplus/ecommerce-admin/issues" target="_blank" >
      <img
        alt="E-commerce admin number of issues"
        title="E-commerce admin number of issues"
        src="https://custom-icon-badges.demolab.com/github/issues-raw/steezplusplus/ecommerce-admin?logo=issue"
      />
    </a>
    <a href="/LICENSE" target="_blank" >
      <img
        alt="E-commerce admin license"
        title="E-commerce admin license"
        src="https://custom-icon-badges.demolab.com/github/license/steezplusplus/ecommerce-admin?logo=law"
      />
    </a>
    <a href="#">
      <img
        alt="E-commerce admin last commit time"
        title="E-commerce admin last commit time"
        src="https://custom-icon-badges.demolab.com/github/last-commit/steezplusplus/ecommerce-admin?logo=history&logoColor=white"
      />
    </a>
    <a href="#">
      <img
        alt="E-commerce admin num of bytes"
        title="E-commerce admin num of bytes"
        src="https://custom-icon-badges.demolab.com/github/languages/code-size/steezplusplus/ecommerce-admin?logo=file-code&logoColor=white"
      />
    </a>
  </section>
  <section>
    <h2>Built with</h2>
    <p>typescript - postcss - eslint - prettier - tailwind - vercel - nextjs13 - cloudinary - clerk</p>
  </section>
  <br />
  <section>
    <h2>Support me!</h2>
    <p>
      If you liked my e-commerce admin
      <br />
      <em>Leave a ⭐</em>
    </p>
    <p>
      Have a question?
      <br />
      <em>
        <a href="https://twitter.com/CodingSteez" target="_blank">Send me a tweet</a>
      </em>
    </p>
    <p>
      Want to use my code?
      <br />
      <em>
        Go ahead! If you make anything cool, I'd love to see it.
      </em>
    </p>
    <p>
      Find an issue?
      <br />
      <em>
        <a href="https://github.com/steezplusplus/ecommerce-admin/issues" target="_blank">Please open an issue</a>
      </em>
    </p>
  </section>
  <br />
</div>

## Features

- Passwordless signup
- Friendly html forms for creating, updating and deleting resources

## Setup

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

## Available commands

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |

## Entity Relationship Diagram

![ER Diagram](diagrams/er-diagram.svg)

## MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)
