# Auth Link Portal

[![License](https://img.shields.io/github/license/pesu-dev/discord-bot)](https://github.com/pesu-dev/auth-link-portal/blob/main/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/pesu-dev/discord-bot)](https://github.com/pesu-dev/auth-link-portal/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/pesu-dev/discord-bot)](https://github.com/pesu-dev/auth-link-portal/issues)
[![Project Board](https://img.shields.io/badge/project-board-blue)](https://github.com/orgs/pesu-dev/projects/4/views/11)

This is a website that handles verification of the students joining PESU Discord Server, by authenticating them using Discord OAuth thus providing access to the rest of the server.

The bot is built with security and privacy in mind, ensuring safe and effective community management while maintaining user confidentiality.


## Getting Started

### For Users

This is currently active in the PESU Discord Server. You can click on [welcome message](https://discord.com/channels/742797665301168220/742946580285620225/1399618247724367963)

Using this, will redirect you to a site where you can login via Discord and then you will be authenticated 

### For Developers and Contributors

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. For current work, make sure to refer the [Project Board](https://github.com/orgs/pesu-dev/projects/4/views/11) to track ongoing work, issues and feature requests.
2. Read the [contribution guidelines](.github/CONTRIBUTING.md) to understand our standards & workflow before submitting changes.
3. In order to contribute:
   - Make changes in a new branch.
   - Open a pull request with a clear description.
   - Reference related issues or discussions.

For detailed development setup and contribution instructions, see our [Contribution Guide](.github/CONTRIBUTING.md).

## Architecture and setup

### Project Structure

```
auth-link-portal/
├── .env.example        # Environment variables template
├── .gitignore          # Files/folders to ignore in git
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
├── next.config.mjs     # Next.js configuration
├── src/
│   ├── app/            # Next.js app directory (routing, pages, API)
│   │   ├── api/        # API routes (authentication, user, etc.)
│   │   ├── auth/       # Auth page (Discord OAuth flow)
│   │   ├── link/       # Link page (verification UI)
│   │   ├── login/      # Login page
│   │   ├── placements/ # Placement info page
│   │   ├── layout.js   # Root layout for all pages
│   │   ├── page.js     # Main landing page
│   │   ├── globals.css # Global styles
│   ├── assets/         # Static assets (SVGs, images)
│   ├── components/     # Reusable React components (e.g., navbar)
│   ├── utils/          # Utility functions and store setup
│   │   ├── config.js   # App configuration
│   │   ├── helpers.js  # Helper functions
│   │   └── store/      # State management (provider, stores)
│   ├── middleware.js   # Custom Next.js middleware
├── public/             # Public static files (served as-is)
├── .github/            # GitHub workflows, templates, and docs
│   ├── CONTRIBUTING.md # Contribution guidelines
│   ├── SECURITY.md     # Security policy
```


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
