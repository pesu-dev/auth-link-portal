# Auth Link Portal

[![License](https://img.shields.io/github/license/pesu-dev/auth-link-portal)](https://github.com/pesu-dev/auth-link-portal/blob/main/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/pesu-dev/auth-link-portal)](https://github.com/pesu-dev/auth-link-portal/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/pesu-dev/auth-link-portal)](https://github.com/pesu-dev/auth-link-portal/issues)
[![Project Board](https://img.shields.io/badge/project-board-blue)](https://github.com/orgs/pesu-dev/projects/4/views/11)

This is a website that handles verification of the students joining PESU Discord Server, by authenticating them using Discord OAuth thus providing access to the rest of the server.

The bot is built with security and privacy in mind, ensuring safe and effective community management while maintaining user confidentiality.


## Getting Started

### For Users

This is currently active in the PESU Discord Server. You can click on [welcome message](https://discord.com/channels/742797665301168220/742946580285620225/1399618247724367963)

Using this, will redirect you to a site where you can login via Discord and then you will be authenticated 

### For Developers and Contributors

1. For current work, make sure to refer the [Project Board](https://github.com/orgs/pesu-dev/projects/4/views/11) to track ongoing work, issues and feature requests.
2. Read the [contribution guidelines](.github/CONTRIBUTING.md) to understand our standards & workflow before submitting changes.
3. In order to contribute:
   - Make changes in a new branch.
   - Open a pull request with a clear description.
   - Reference related issues or discussions.

For detailed development setup and contribution instructions, see our [Contribution Guide](.github/CONTRIBUTING.md).

## Architecture and setup


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

---

### Codebase Coverage

#### `src/app/` (Pages & API)

- **`page.js`**: Main landing page. Handles user state and displays login or dashboard UI.
- **`layout.js`**: Root layout for all pages. Sets up global providers and the navbar.
- **`globals.css`**: Global styles using Tailwind CSS.
- **`auth/page.js`**: Handles Discord OAuth callback, validates state, fetches user info, and sets up session.
- **`login/page.js`**: Initiates Discord OAuth login flow, generates session state, and redirects to Discord.
- **`link/page.js`**: UI for linking Discord and PESU Academy accounts. Handles form submission and linking logic.
- **`placements/page.js`**: Lets users select a year to view placement data.
- **`placements/[year]/page.js`**: Redirects to the placement spreadsheet for the selected year.
- **`api/`**: Contains API routes for authentication, user info, linking, and logout.
  - **`api/user/route.js`**: Returns Discord user info for the current session.
  - **`api/token/route.js`**: Exchanges Discord OAuth code for access token, creates a JWT session, and sets a cookie.
  - **`api/logout/route.js`**: Logs out the user, revokes the Discord token, and clears the session cookie.
  - **`api/link/authenticate/route.js`**: Authenticates PESU Academy credentials, encrypts user info, and returns a token.
  - **`api/link/complete/route.js`**: Completes the linking process, assigns Discord roles, updates backend, and sends logs.

#### `src/components/`

- **`navbar.jsx`**: Responsive navigation bar. Shows login, placements, event posting, and linking options based on user state.

#### `src/utils/`

- **`config.js`**: Contains all constants for Discord guild, roles, channels, and placement links.
- **`helpers.js`**: Utility functions for API responses, Discord user fetching, error logging, and DM message formatting.
- **`store/`**: Zustand-based state management.
  - **`provider.js`**: React context provider for the persistent store.
  - **`stores.js`**: Store definition with persistence and hydration logic.

#### `src/middleware.js`

- Handles authentication and CORS for API routes. Verifies JWT session tokens and manages allowed origins.

#### `public/` and `src/assets/`

- Static files and SVGs used in the UI.

#### `.github/`

- Contains GitHub Actions workflow for production deployment, contribution guidelines, and security policy

---

### Environment Variables

To run this project, create a `.env` file in the root directory and fill in the required values as shown below. Refer to `.env.example` for the template.

| Variable               | Description                                      | Example/Notes                       |
|------------------------|--------------------------------------------------|-------------------------------------|
| `REDIRECT_URI`         | Discord OAuth redirect URI                       | `http://localhost:3000/auth`        |
| `MONGO_URI`            | MongoDB connection string                        |                                     |
| `CLIENT_ID`            | Discord OAuth client ID                          |                                     |
| `CLIENT_SECRET`        | Discord OAuth client secret                      |                                     |
| `BOT_TOKEN`            | Discord bot token                                |                                     |
| `APP_ENV`              | Application environment (`dev`, `prod`, etc.)    | `dev`                               |
| `JWT_SESSION_SECRET`   | Secret for signing JWT session tokens            |                                     |
| `BACKEND_API_URL`      | Backend API base URL                             | `http://localhost:3001/api`         |
| `BACKEND_API_TOKEN`    | Token for authenticating with backend API        |                                     |

**How to set up:**
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Fill in all required values in `.env` before running the project.

### Running locally

First, run the below command to install necessary dependencies -


```bash
npm install 
# or
yarn install
# or
pnpm install
# or
bun install
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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the webpage running locally.



**👉 [Read our detailed Contributing Guide](.github/CONTRIBUTING.md)** for complete setup instructions and development workflow.

## 🔐 Security and Privacy

- **No Credential Storage**: The website does not store Discord or PESU passwords
- **Secure Database**: All data is stored securely in MongoDB with proper access controls
- **Role-based Access**: Commands are restricted based on user permissions and server roles

## 📊 Project Status

- **Active Development**: The website is actively maintained and updated
- **Community Driven**: Features are developed based on community needs
- **Production Ready**: Currently deployed and serving the PESU Discord community

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For questions, support, or feature requests, please visit our [project board](https://github.com/orgs/pesu-dev/projects/4/views/11) or join the discussion on the PESU Discord server.
