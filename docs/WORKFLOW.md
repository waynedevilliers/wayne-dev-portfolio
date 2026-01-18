# Development Workflow Guide

This document provides detailed, step-by-step instructions for daily development using the GitFlow Lite workflow.

## Quick Reference

```
main (Production)     → https://waynedev.dev
  ↓ (requires PR)
dev (Staging)        → https://wayneswebsites-git-dev.vercel.app
  ↓ (requires PR)
feature/* (Preview)  → Vercel auto-generates URL for each PR
```

## Complete Workflow: Feature Development

### Step 1: Prepare Your Dev Environment

```bash
# Ensure you're in the project directory
cd waynes_websites

# Switch to dev branch
git checkout dev

# Get the latest changes
git pull origin dev

# Verify you're up to date
git log --oneline -5
```

### Step 2: Create a Feature Branch

```bash
# Create a new feature branch (always from dev)
git checkout -b feature/your-feature-name

# Example: Adding a contact form
# git checkout -b feature/add-contact-form
# git checkout -b fix/language-switcher-bug
# git checkout -b docs/update-readme
```

**Branch naming:** Use meaningful names that describe what you're doing:
- `feature/add-contact-form`
- `feature/improve-mobile-responsive`
- `fix/language-switching-bug`
- `docs/update-deployment-guide`
- `refactor/extract-button-component`
- `style/improve-hero-spacing`

### Step 3: Work on Your Feature

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

**Test thoroughly:**
- ✅ Desktop (1024px+)
- ✅ Tablet (768px)
- ✅ Mobile (375px-390px)
- ✅ Language switching (EN/DE)
- ✅ Console errors (F12)

### Step 4: Make Commits

Follow **Conventional Commits** format:

```bash
# Feature commits
git commit -m "feat: add contact form to footer"
git commit -m "feat: improve mobile navigation"

# Bug fix commits
git commit -m "fix: resolve language switcher not updating"
git commit -m "fix: correct responsive padding on hero"

# Documentation commits
git commit -m "docs: update contribution guidelines"

# Refactoring commits
git commit -m "refactor: extract button styles into utility class"

# Style commits
git commit -m "style: improve spacing on services section"
```

**Good commit messages:**
- ✅ `feat: add email validation to contact form`
- ✅ `fix: resolve typo in German hero title`
- ❌ `update stuff`
- ❌ `fixed bugs`

### Step 5: Pre-Push Verification

Before pushing, verify everything works:

```bash
# Run linter
npm run lint
# Must pass with no errors

# Run type check
npx tsc --noEmit
# Must pass with no errors

# Build project
npm run build
# Must complete successfully
```

If any step fails, fix the issues before proceeding.

### Step 6: Push Your Branch

```bash
# Push your feature branch to GitHub
git push origin feature/your-feature-name

# If this is your first push of this branch:
git push -u origin feature/your-feature-name
```

### Step 7: Create Pull Request on GitHub

Go to https://github.com/waynedevilliers/wayne-dev-portfolio

1. Click **"Compare & pull request"** button (appears after push)
2. Ensure **base** is set to `dev` (not main)
3. Add title (follows commit format): `feat: add contact form`
4. Fill out PR template with:
   - Description of changes
   - Type of change
   - Testing performed
   - Screenshots (if UI changes)
5. Click **"Create pull request"**

### Step 8: GitHub Actions CI Runs

GitHub Actions automatically:
1. ✅ Checks out your code
2. ✅ Installs dependencies
3. ✅ Runs linter: `npm run lint`
4. ✅ Runs TypeScript: `npx tsc --noEmit`
5. ✅ Builds: `npm run build`
6. Reports status on PR (green check = pass, red X = fail)

**If CI fails:**
1. Read the error message on the PR
2. Fix the issue locally
3. Commit and push the fix
4. CI runs automatically again
5. Repeat until CI passes ✅

### Step 9: Vercel Preview Deploy

Vercel automatically creates a preview URL for your feature branch:
- Shows up as a comment on your PR
- Share this with reviewers
- Test your changes before merging
- URL expires when PR is closed

### Step 10: Review & Merge

Once:
- ✅ CI workflow passes (green check)
- ✅ Code is reviewed
- ✅ Changes tested on preview URL

Merge the PR:
1. Click **"Merge pull request"** on GitHub
2. Choose **"Squash and merge"** (recommended)
   - Keeps main branch history clean
   - One commit per feature
3. Click **"Confirm squash and merge"**
4. Click **"Delete branch"** (clean up)

### Step 11: Test on Staging

After merging to `dev`:
1. Vercel auto-deploys to: https://wayneswebsites-git-dev.vercel.app
2. Wait ~2-3 minutes for deployment
3. Visit staging URL
4. Test your feature thoroughly
5. Verify no new bugs introduced

### Step 12: Release to Production (When Ready)

When you're confident your feature is ready for production:

1. Go to GitHub
2. Create new PR from `dev` → `main`
3. CI runs automatically
4. Review the changes one last time
5. Merge to `main`
6. Vercel auto-deploys to: https://waynedev.dev
7. 🎉 Feature is live!

---

## Workflow: Hotfix (Critical Bug on Production)

Use this workflow only for critical bugs that need immediate fixing on production.

### Hotfix Steps

```bash
# 1. Switch to main (production)
git checkout main
git pull origin main

# 2. Create hotfix branch from main
git checkout -b hotfix/critical-bug-name
# Example: git checkout -b hotfix/fix-payment-processing

# 3. Fix the bug
# ... make your changes, test locally ...

# 4. Commit (use fix: prefix)
git commit -m "fix: resolve critical payment processing bug"

# 5. Push hotfix branch
git push origin hotfix/critical-bug-name

# 6. Create PR on GitHub from hotfix → main (not dev!)

# 7. After merging to main:
#    - Vercel deploys to production immediately
#    - Then sync dev with main:

git checkout dev
git pull origin main  # Or: git merge main
git push origin dev

# 8. Verify both environments:
#    - Production: https://waynedev.dev
#    - Staging: https://wayneswebsites-git-dev.vercel.app
```

---

## Workflow: Adding Content

### Content-Only Changes (No Code)

```bash
# 1. Create feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feature/update-project-description

# 2. Edit content.ts (and ONLY content.ts)
# Update both contentEn and contentDe
# DO NOT hardcode text in components

# 3. Test locally
npm run dev
# Verify changes appear correctly in both EN and DE

# 4. Commit
git commit -m "feat: update project descriptions"

# 5. Push and create PR to dev (same as normal feature)
git push origin feature/update-project-description
```

### Content Checklist
- ✅ Updated both `contentEn` and `contentDe`
- ✅ Tested language switching works
- ✅ No console errors
- ✅ No hardcoded strings in components
- ✅ Tested on mobile, tablet, desktop

---

## Workflow: Dependencies & Configuration

### Adding New Package

```bash
# Create feature branch
git checkout dev
git pull origin dev
git checkout -b feature/add-package-name

# Install package
npm install package-name
# or dev dependency:
npm install -D package-name

# The changes to package.json and package-lock.json are automatic

# Commit
git commit -m "chore: add package-name dependency"

# Push and create PR to dev
git push origin feature/add-package-name
```

### Updating Configuration

```bash
# Create feature branch
git checkout dev
git pull origin dev
git checkout -b feature/update-tailwind-config

# Make configuration changes
# e.g., edit tailwind.config.ts

# Test
npm run build
npx tsc --noEmit
npm run lint

# Commit
git commit -m "chore: update tailwind configuration"

# Push and create PR to dev
git push origin feature/update-tailwind-config
```

---

## Troubleshooting

### "Your branch has diverged from origin/dev"

```bash
# Sync with remote
git fetch origin
git rebase origin/dev
# or merge
git merge origin/dev
```

### "Changes would be overwritten by merge"

```bash
# Stash your changes
git stash

# Pull latest
git pull origin dev

# Reapply your changes
git stash pop
```

### "CI failed - how do I fix it?"

1. Read the error message on the GitHub PR
2. If it's a linter error: `npm run lint --fix` (auto-fixes many)
3. If it's a build error: Run `npm run build` locally to see full error
4. If it's a TypeScript error: Check the file mentioned in error
5. Fix locally, commit, push (CI runs again automatically)

### "I accidentally committed to main"

Don't panic! Reset locally:

```bash
# Only if you HAVEN'T pushed yet!
git reset --soft HEAD~1
# Creates new branch with your changes

git checkout -b feature/your-feature
git commit -m "feat: your feature"
git push origin feature/your-feature
```

If you already pushed: Contact repo admin to revert the commit.

### "I want to undo my last commit"

```bash
# Last commit not pushed yet
git reset --soft HEAD~1
# Changes stay in staging area, you can recommit

# Last commit already pushed
# Create a new commit that undoes it:
git revert HEAD
# This is safer than reset for pushed commits
```

---

## Tips & Best Practices

### 1. Small, Focused PRs
- One feature per PR
- Makes it easier to review
- Easier to revert if needed
- Faster CI runs

### 2. Commit Frequently
- Don't wait until end of day to commit
- Smaller commits are easier to understand
- Each commit should be a logical unit

### 3. Test Before Pushing
Always run locally first:
```bash
npm run lint
npx tsc --noEmit
npm run build
npm run dev  # and test in browser
```

### 4. Meaningful Commit Messages
- Use present tense: "add feature" not "added feature"
- Be specific: "add email validation" not "fix stuff"
- Reference issues: "fix: resolve bug (Closes #123)"

### 5. Keep Branches Short-Lived
- Merge PR within 1-2 days
- Long-running branches cause conflicts
- Delete branch after merge

### 6. Review Your Own PR First
- Check the "Files changed" tab on GitHub
- Make sure only intended changes are there
- Catch typos or accidental changes

### 7. Use Conventional Commits
Standardized format helps automate changelog, versioning:
```
feat:  New feature (shows in changelog)
fix:   Bug fix (shows in changelog)
docs:  Documentation only (no version bump)
style: Code style only (no version bump)
refactor: Code refactor (no version bump)
chore: Internal tasks (no version bump)
```

---

## GitHub Actions Status

On every PR, you'll see GitHub Actions status:

- ⏳ **Pending** (yellow): Running tests
- ✅ **Success** (green): All checks passed, ready to merge
- ❌ **Failed** (red): A check failed, needs fixing

You can click on the status to see details:
1. Click the ❌ or ✅ status
2. Click "Details" to see full output
3. Scroll to find the error
4. Fix locally, push again
5. CI runs automatically

---

## Quick Commands Reference

```bash
# Check current branch
git branch

# List all branches
git branch -a

# Switch branch
git checkout branch-name

# Create and switch to new branch
git checkout -b feature/name

# See changes
git diff

# See commits on this branch
git log --oneline origin/dev..HEAD

# Sync with dev (recommended)
git fetch origin && git rebase origin/dev

# Push branch
git push origin feature/name

# Delete local branch (after merge)
git branch -d feature/name

# Delete remote branch
git push origin --delete feature/name

# Undo last commit (not pushed)
git reset --soft HEAD~1

# Undo last commit (after push)
git revert HEAD
```

---

## Questions?

- 📖 Read: `docs/CONTRIBUTING.md` (general guidelines)
- 📖 Read: `CLAUDE.md` (project-specific info)
- 💬 Ask: Create an issue on GitHub
- 📧 Email: wrdevilliers@gmail.com
