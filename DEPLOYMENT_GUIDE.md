# 📱 Career Guide — Production Deployment & Android Deliverables Guide

## 🚀 Overview
The **Career Guide** mobile application has been architected, styled to exact Figma specifications, and packaged into a full-stack, production-ready system with:
1. **Icon-only Bottom Navigation**: Streamlined mobile tab bar with active indicator dots and zero distracting text labels.
2. **Full Native Android Project**: Capacitor Android project (`android/`) with native Gradle wrapper, AndroidManifest, app bundles, and release configs.
3. **Continuous CI/CD Pipeline**: GitHub Actions workflow (`.github/workflows/build-and-deploy.yml`) that automatically builds installable APKs, Play Store AAB bundles, and deploys the live application on every `git push`.
4. **Backend REST API & Database**: Express backend (`server/index.js`) with health checks, auth endpoints, roadmap synchronization, and database persistence (`server/db.js`).

---

## 1. 📲 Android APK & AAB Automated Build Pipeline

The repository includes a complete GitHub Actions CI/CD configuration:
`file:///.github/workflows/build-and-deploy.yml`

### Continuous Delivery Flow:
```
Edit Code ➔ git push origin master ➔ GitHub Actions Triggers:
   ├── 1. Builds Production Web Assets (npm run build)
   ├── 2. Deploys Live Web App to GitHub Pages
   ├── 3. Syncs Capacitor Android Native Shell
   ├── 4. Compiles & Signs Android Release APK (CareerGuide-v1.0-release.apk)
   ├── 5. Compiles Android App Bundle (CareerGuide-v1.0-release.aab)
   └── 6. Publishes GitHub Release with Direct APK/AAB Download Links
```

### To Enable Continuous Build & Download Links on GitHub:
1. Create a repository on GitHub (e.g. `career-guide-app`).
2. Run in terminal:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/career-guide-app.git
   git branch -M main
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Go to **Settings** ➔ **Pages** ➔ Set **Source** to **GitHub Actions**.
4. The workflow will automatically run and output:
   - **Downloadable APK Link**: `https://github.com/<YOUR_USERNAME>/career-guide-app/releases`
   - **Play Store AAB**: Downloadable under the same release page.
   - **Live Web Application URL**: `https://<YOUR_USERNAME>.github.io/career-guide-app/`

---

## 2. 🌐 Live Backend & Database Deployment

### Option A: Render (Zero Configuration via `render.yaml`)
1. Create a free account at [render.com](https://render.com).
2. Click **New +** ➔ **Blueprint**.
3. Connect your GitHub repository.
4. Render automatically reads `render.yaml`, builds the project, and provisions:
   - **Live API URL**: `https://career-guide-api.onrender.com`
   - **Connected Database**: Persistent JSON/SQLite data layer (`server/database.json`)

### Option B: Vercel Full-Stack Deployment
1. Import the repository in [vercel.com](https://vercel.com).
2. The bundled `vercel.json` automatically configures Vite build and API rewrites.
3. Instant Live URL: `https://career-guide-app.vercel.app`

### Option C: Docker Container
Run anywhere (AWS, Railway, DigitalOcean, VPS):
```bash
docker build -t career-guide-app .
docker run -p 5000:5000 career-guide-app
```

---

## 3. 💻 Local Development & Android Studio

### Running Frontend:
```bash
npm run dev
# Live at http://localhost:5173
```

### Running Backend API:
```bash
npm run server
# Live at http://localhost:5000
```

### Opening in Android Studio (for Local APK Generation):
If you have Android Studio installed on your machine:
```bash
npx cap open android
```
- Click **Build** ➔ **Build Bundle(s) / APK(s)** ➔ **Build APK(s)** to generate local APK directly in Android Studio.

