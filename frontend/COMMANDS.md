c# 🚀 Quick Reference - Command Guide

## Development Commands

### Start Development Server
```bash
cd frontend
npm run dev
```
Opens at: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Run Linter
```bash
npm run lint
```

### Fix Lint Issues
```bash
npm run lint -- --fix
```

---

## Package Management

### Install Dependencies
```bash
npm install
```

### Install New Package
```bash
npm install package-name
```

### Install Dev Dependency
```bash
npm install -D package-name
```

### Update All Packages
```bash
npm update
```

### Check for Outdated Packages
```bash
npm outdated
```

---

## Git Commands

### Initialize Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### Push to GitHub
```bash
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

### Common Git Workflow
```bash
git add .
git commit -m "Your commit message"
git push
```

---

## Deployment Commands

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## Useful Scripts

### Clear Cache
```bash
rm -rf .next node_modules
npm install
```

### Check TypeScript Errors
```bash
npx tsc --noEmit
```

### Format Code (if Prettier installed)
```bash
npx prettier --write .
```

---

## Project Structure Commands

### Create New Page
```bash
mkdir -p app/new-page
touch app/new-page/page.tsx
```

### Create New Component
```bash
touch components/NewComponent.tsx
```

---

## Performance Testing

### Lighthouse CLI
```bash
npm install -g lighthouse
lighthouse http://localhost:3000
```

### Bundle Size Analysis
```bash
npm install -D @next/bundle-analyzer
```

---

## Environment Variables

### Local Development (.env.local)
```bash
echo "NEXT_PUBLIC_API_URL=your_api_url" > .env.local
```

### Access in Code
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

---

## Debugging

### Check Port Usage
```bash
lsof -i :3000
```

### Kill Process on Port
```bash
kill -9 $(lsof -t -i:3000)
```

### View Build Output
```bash
npm run build -- --debug
```

---

## Database (if needed)

### Prisma Setup
```bash
npm install prisma @prisma/client
npx prisma init
npx prisma generate
npx prisma db push
```

---

## Testing (if needed)

### Jest Setup
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
npm test
```

### Cypress E2E
```bash
npm install -D cypress
npx cypress open
```

---

## Quick Fixes

### Fix ESLint Issues
```bash
npm run lint -- --fix
```

### Clear Next.js Cache
```bash
rm -rf .next
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Update Next.js
```bash
npm install next@latest react@latest react-dom@latest
```

---

## File Structure Quick Reference

```
frontend/
├── app/              # Pages (Next.js App Router)
├── components/       # Reusable components
├── public/          # Static files
├── styles/          # Additional styles (if needed)
├── lib/             # Utility functions (if needed)
├── types/           # TypeScript types (if needed)
└── config/          # Configuration files (if needed)
```

---

## Port Configuration

### Change Default Port (3000)
```bash
npm run dev -- -p 3001
```

Or in `package.json`:
```json
"dev": "next dev -p 3001"
```

---

## Environment Setup

### Node Version (use nvm)
```bash
nvm install 18
nvm use 18
```

### Check Versions
```bash
node --version
npm --version
npx next --version
```

---

## Component Import Shortcuts

### Import Multiple Components
```typescript
import {
  Hero,
  Navbar,
  Footer,
  CTA
} from '@/components';
```

### Import with Alias
```typescript
import Hero from '@/components/Hero';
// @ is alias for root directory
```

---

## Tailwind Utilities

### View Tailwind Config
```bash
npx tailwindcss -c tailwind.config.ts
```

### Generate Tailwind Types
```bash
npm install -D @tailwindcss/typography
```

---

## Performance Optimization

### Analyze Bundle
```bash
npm run build
npm install -g source-map-explorer
source-map-explorer .next/static/**/*.js
```

### Image Optimization
Use Next.js Image component:
```typescript
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

---

## Keyboard Shortcuts in VS Code

- `Cmd/Ctrl + P` - Quick file open
- `Cmd/Ctrl + Shift + P` - Command palette
- `Cmd/Ctrl + \`` - Toggle terminal
- `Cmd/Ctrl + B` - Toggle sidebar
- `Alt + Up/Down` - Move line up/down
- `Cmd/Ctrl + /` - Toggle comment

---

## Common Issues & Solutions

### Port Already in Use
```bash
kill -9 $(lsof -t -i:3000)
# Then restart: npm run dev
```

### Module Not Found
```bash
npm install
# or
rm -rf node_modules && npm install
```

### Build Fails
```bash
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
npx tsc --noEmit
# Fix errors, then build
```

---

## Production Checklist Command

### Run All Checks
```bash
npm run lint
npm run build
npm test (if tests exist)
```

---

## Backup Commands

### Backup Project
```bash
tar -czf backup-$(date +%Y%m%d).tar.gz frontend/
```

### Backup Database (if applicable)
```bash
# Your database backup command here
```

---

## Monitoring & Logs

### View Next.js Logs
```bash
npm run dev
# Logs appear in terminal
```

### Production Logs (Vercel)
```bash
vercel logs
```

---

## Quick Tips

1. **Always test locally before deploying**
   ```bash
   npm run build && npm start
   ```

2. **Keep dependencies updated**
   ```bash
   npm update
   ```

3. **Use meaningful commit messages**
   ```bash
   git commit -m "feat: add contact form validation"
   ```

4. **Branch for new features**
   ```bash
   git checkout -b feature/new-feature
   ```

---

## Help Commands

### Next.js Help
```bash
npx next --help
```

### npm Help
```bash
npm help
npm help install
```

### Vercel Help
```bash
vercel --help
```

---

## Emergency Commands

### Rollback Last Commit
```bash
git reset --soft HEAD~1
```

### Revert to Previous Deploy (Vercel)
```bash
vercel rollback
```

### Hard Reset (⚠️ Destructive)
```bash
git reset --hard HEAD
# or
rm -rf .next node_modules
npm install
```

---

**Save this file for quick reference during development!** 📌

For detailed information, see:
- SETUP_GUIDE.md
- ANIMATIONS_GUIDE.md
- PROJECT_SUMMARY.md
- LAUNCH_CHECKLIST.md
