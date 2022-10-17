---
title: "This is my third article!"
description: "You finally got the point about Nuxt content"
img: "https://content-v2-blog.netlify.app/img/cover%20(3).JPG"
tags: [Nuxt, Content, Learning, second]
author: "namdevel"
created_at: "01 Oct 2022 at 01:28:00"
updated_at: "02 Oct 2022 at 02:28:00"
---

#### My second blog post

Welcome to my first blog post using [content v2 module](https://content.nuxtjs.org/)

> Hey there! 👋🏾 This is my first blog post learning nuxt content.

I'm currently building it using the following:

- Nuxt.js
- Nuxt Content module
- TailwindCSS
  - TailwindCSS typography

#### Nuxt.js

[Nuxt](https://nuxtjs.org/) is a powerful Vue framework that offers great development features such as server side rendering.

```bash
npx nuxi init nuxt-app
cd nuxt-app
yarn install
yarn dev -o
```

```ts
// ./nuxt.config.ts
import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  // My Nuxt config
});
```

#### Nuxt content module

Empower your NuxtJS application with [@nuxt/content module](https://content.nuxtjs.org/): write in a content/ directory and fetch your Markdown, JSON, YAML, XML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.

You can get started with Nuxt Content by installing a fresh project

```bash
npx nuxi init content-app -t content
```

#### TailwindCSS

Rapidly build modern websites without ever leaving your HTML. [TailwindCSS](https://tailwindcss.com/) is A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup.

#### TailwindCSS Typography

[Typography](https://tailwindcss.com/docs/typography-plugin) is a plugin that provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don't control (like HTML rendered from Markdown, or pulled from a CMS).
