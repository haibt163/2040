# Agent setup commands (Windows PowerShell)

## Option A — this starter already exists

```powershell
cd D:\path\to\story-2040
npm install
npm run dev
```

The only non-core runtime package beyond Next/React is Motion:

```powershell
npm install motion
```

If the repository already contains the supplied `package.json`, `npm install` installs everything listed there.

## Option B — bootstrap from scratch

```powershell
npx create-next-app@latest story-2040 --ts --eslint --app --src-dir --use-npm --import-alias "@/*"
cd story-2040
npm install motion
npm run dev
```

## Production checks

```powershell
npm run lint
npm run build
npm start
```

Open `http://localhost:3000`.

## Agent working sequence

```text
PROJECT PREFLIGHT
→ RECON
→ DIAGNOSE
→ PROPOSE
→ IMPLEMENT
→ npm run lint
→ npm run build
→ browser verification
```
