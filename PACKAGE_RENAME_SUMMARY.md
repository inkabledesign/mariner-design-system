# Package Rename Summary

## ✅ Successfully Renamed and Published

All `@mariner/*` packages have been renamed to `@inkabledesign/mariner-*` to match the GitHub organization name and successfully published to GitHub Packages.

---

## Published Packages

| Old Name | New Name | Version | Status |
|----------|----------|---------|--------|
| `@mariner/theme` | `@inkabledesign/mariner-theme` | 1.0.1 | ✅ Published |
| `@mariner/assets` | `@inkabledesign/mariner-assets` | 1.0.1 | ✅ Published |
| `@mariner/components` | `@inkabledesign/mariner-components` | 1.0.1 | ✅ Published |

**Published to:** `https://npm.pkg.github.com`  
**Organization:** `inkabledesign`  
**Workflow:** GitHub Actions (`.github/workflows/publish.yml`)

---

## Changes Made

### 1. mariner-design-system Repository

#### Package Names
- ✅ Updated `packages/theme/package.json`
- ✅ Updated `packages/assets/package.json`
- ✅ Updated `packages/components/package.json`
- ✅ Updated `apps/storybook-web/package.json`
- ✅ Updated `apps/storybook-mobile/package.json`

#### Build Configuration
- ✅ Updated `packages/components/rollup.config.js` - external dependencies
- ✅ Updated `.github/workflows/publish.yml` - lerna scope filter and setup-node scope

#### Git Tags
- ✅ Created tag `v1.0.1` for the release
- ✅ Pushed to remote

### 2. mariner-edu Repository

#### Dependencies
- ✅ Updated `package.json` dependencies

#### Imports
- ✅ Updated `src/style/ThemeProvider.tsx`
- ✅ Updated `src/style/ThemeProvider.web.tsx`
- ✅ Updated `src/style/index.tsx`
- ✅ Updated `src/components/atoms/TextStyled/index.tsx`
- ✅ Updated `src/utils/helpers/style-helpers.ts`

#### Configuration
- ✅ Updated `tailwind.config.js`
- ✅ Updated `web/next.config.js` - transpilePackages
- ✅ Updated `metro.config.js` - resolveRequest and extraNodeModules
- ✅ Updated `.npmrc` - registry scope

### 3. Global Configuration
- ✅ Updated `~/.npmrc` - registry scope

---

## Installation

### For Production (from GitHub Packages)

1. **Set up authentication:**
   ```bash
   # Add to ~/.npmrc or project .npmrc
   @inkabledesign:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

2. **Install packages:**
   ```bash
   yarn add @inkabledesign/mariner-theme
   yarn add @inkabledesign/mariner-assets
   yarn add @inkabledesign/mariner-components
   ```

### For Local Development

The `metro.config.js` in mariner-edu automatically detects and uses the local design system when the `mariner-design-system` directory exists as a sibling:

```
/Users/DTM03/Personal/Dev/
  ├── mariner-design-system/  # Design system monorepo
  └── mariner-edu/             # Consumer app
```

**No additional setup needed** - Metro will automatically resolve `@inkabledesign/mariner-*` imports to the local source for hot reload.

---

## Publishing Workflow

The GitHub Actions workflow (`.github/workflows/publish.yml`) automatically:

1. **Builds** all packages
2. **Versions** packages using conventional commits
3. **Creates** git tags
4. **Publishes** to GitHub Packages
5. **Pushes** version commits and tags to main

**Trigger:** Push to `main` branch

**Required Secrets:**
- `GITHUB_TOKEN` (automatically provided by GitHub Actions)

---

## Migration Checklist

- [x] Rename package names in all package.json files
- [x] Update all import statements
- [x] Update build configurations (rollup, metro, next)
- [x] Update CI/CD workflows
- [x] Update .npmrc files
- [x] Build packages locally
- [x] Publish packages to GitHub Packages
- [x] Verify packages are accessible
- [x] Update consuming projects (mariner-edu)
- [x] Test local development setup
- [x] Commit and push all changes

---

## Next Steps

1. **Test the app** - Verify mariner-edu builds and runs correctly with the new packages
2. **Update documentation** - Update any README files or docs that reference the old package names
3. **Clean up** - Remove old `@mariner/*` packages from GitHub Packages (if any exist)
4. **Monitor** - Watch for any issues in CI/CD or production deployments

---

## Troubleshooting

### "Cannot find module '@inkabledesign/mariner-*'"

**Solution:** 
- For production: Ensure `.npmrc` is configured with GitHub Packages authentication
- For local dev: Ensure `mariner-design-system` is cloned as a sibling directory

### "401 Unauthorized" when installing

**Solution:** 
- Generate a new GitHub Personal Access Token with `read:packages` scope
- Update `.npmrc` with the new token

### Metro bundler not finding packages

**Solution:**
- Clear Metro cache: `yarn start --reset-cache`
- Verify `metro.config.js` has correct paths to local packages

---

## References

- **GitHub Packages Docs:** https://docs.github.com/en/packages
- **Lerna Publish:** https://lerna.js.org/docs/features/version-and-publish
- **Metro Bundler:** https://metrobundler.dev/docs/configuration
