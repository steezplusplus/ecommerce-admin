<div>
  <!-- Heading -->
  <section>
    <h1>
      <a href="https://ecommerce-admin-steez.vercel.app/" target="_blank" >
        E-commerce Admin
      </a>
    </h1>
    <img src="diagrams/api-example.png" alt="Preview image of the website" />
    <h2>
      Manage multiple micro frontends with this toolkit.
    </h2>
  </section>
  <!-- Badges -->
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
  <!-- Tech Stack -->
  <section>
    <h2>Built with</h2>
    <p>vercel - cloudinary - clerk - supabase - nextjs13 - typescript - tailwind</p>
  </section>
  <!-- Support -->
   <section>
    <h2>Support me!</h2>
    <a href="https://ko-fi.com/W7W5PB4J9" target="_blank"> 
      <img src="https://ko-fi.com/img/githubbutton_sm.svg"/> 
    </a>
    <p>
      <i>Or leave a ⭐</i>
    </p>
  </section>

## Features

- Passwordless signup with Google social integration
- CRUD operations for creating a store, billboards, products, colors, categories, and more
- Upload the resources that your store will need
- Automatically generates API endpoints for your frontend to use
- Use Any frontend framework that you like!

## Setup

1. Clone this project

```shell
git clone ...
```

2. Install Packages

```shell
npm install
```

3. Generate your dotenv file. Follow the instructions in the file to get the env variables.

```shell
cp .env.example .env
```

4. Prepare prisma

```shell
npx prisma generate
npx prisma db push
```

5. Start the app

```shell
npm run dev
```

## View an exmaple frontend I've built here: [E-commerce Store](https://github.com/steezplusplus/ecommerce-store)

## Available commands

| command        | description                              |
| :------------- | :--------------------------------------- |
| `dev`          | Starts a development instance of the app |
| `build`        | Builds a production instance of the app  |
| `start`        | Starts a production instance of the app  |
| `lint`         | Runs ESLint                              |
| `lint:fix`     | Runs ESLint and fixes syntax             |
| `prettier`     | Runs Prettier                            |
| `prettier:fix` | Runs Prettier and fixes formatting       |
| `postinstall`  | Generates Primsa client                  |

## Entity Relationship Diagram

![ER Diagram](diagrams/er-diagram.svg)
