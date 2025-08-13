# Contributing to Auth Link Portal

Thank you for your interest in contributing! 🎉  
We welcome all kinds of contributions—bug fixes, new features, documentation, and more.

---

## 🛠️ Development Environment Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pesu-dev/auth-link-portal.git
   cd auth-link-portal
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in all required values in `.env` (see `.env.example` for details).

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 How to Contribute

### 1. Find or Create an Issue

- Check the [Project Board](https://github.com/orgs/pesu-dev/projects/4/views/11) and [Issues](https://github.com/pesu-dev/auth-link-portal/issues) for existing bugs or feature requests.
- If your idea/bug isn’t listed, [open a new issue](https://github.com/pesu-dev/auth-link-portal/issues/new/choose) with a clear description.

### 2. Fork and Branch

- Fork the repository to your GitHub account.
- Create a new branch for your work:
  ```bash
  git checkout -b <feature/bugfix-name>
  ```

### 3. Make Your Changes

- Follow the project structure and code style.
- Add or update tests if applicable.
- Ensure your code passes linting and builds successfully.

### 4. Commit Guidelines

- Write clear, concise commit messages (e.g., `fix: correct OAuth callback`, `feat: add placements page`).
- Group related changes into a single commit or a logical set of commits.

### 5. Raise a Pull Request (PR)

- Push your branch to your fork.
- Open a PR against the `main` branch of this repo.
- In your PR description, include:
  - A summary of your changes.
  - Reference to the related issue (e.g., `Closes #123`).
  - Any screenshots or context if UI-related.

### 6. PR Review Process

- The maintainers will review your PR.
- Respond to feedback and make changes as needed.
- Once approved, your PR will be merged.

---

## 💡 Contribution Standards

- **Code Quality:** Write clean, readable, and well-documented code.
- **Security:** Do not log or store sensitive information (e.g., passwords, tokens).
- **Testing:** Add/modify tests for new features or bug fixes.
- **Documentation:** Update README or relevant docs if your change affects usage or setup.
- **Respect:** Be respectful and constructive in all communications.



## 🛡️ Security

If you find a security vulnerability, **do not open a public issue**.  
Instead, please report it privately by emailing the maintainers or following the [SECURITY.md](SECURITY.md) policy.



## 🙏 Thank You!

Your contributions make this project better for everyone.  
If you have questions, ask in the [project board](https://github.com/orgs/pesu-dev/projects/4/views/11) or join the PESU Discord