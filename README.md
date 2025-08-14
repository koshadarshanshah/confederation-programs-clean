# CC Programs Site

A simple page showing all programs from Confederation College. Built for the Junior Developer Test.

## Running Locally

You'll need Node.js installed first.

```bash
npm install
npm run dev
```

Then go to http://localhost:4321

To build for production:
```bash
npm run build
```

## Deployment

**Live Site:** [https://koshadarshanshah.github.io/confederation-programs-clean/](https://koshadarshanshah.github.io/confederation-programs-clean/)
**Repository:** https://github.com/koshadarshanshah/confederation-programs-clean

Hosted on GitHub Pages with automatic builds via GitHub Actions.

## Time Spent

About 75 minutes total:
- Setting up project: 15 min
- Getting data to load and display: 25 min  
- Making it look decent + responsive: 20 min
- Testing edge cases: 10 min
- README and deployment: 5 min

## Design Decisions

**Why Astro?**
Already had CC's official template which saved time on branding/colors. Plus it builds to static files which are fast and easy to deploy.

**Runtime vs build-time data loading**
Assignment specifically asked for runtime loading, so the page fetches the JSON when it loads. Could have been faster to load at build time but wouldn't meet requirements.

**Card layout**
Went with cards instead of a plain list since it's easier to scan and looks more professional. Cards auto-adjust from 1 to 3 columns depending on screen size.

**Handling missing data**
Some programs don't have mission statements (like "Fitness and Health Promotion"), so I added fallback text instead of leaving them blank.

**External links**
All program links open CC's website in new tabs so people don't lose the programs page.

Shows all 50 programs and meets the technical requirements.
