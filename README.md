# Confederation College Programs

A one-page static site displaying Confederation College's programs built for the Junior Web Developer Test.

## Instructions to Run Locally

### Prerequisites
- Node.js (16 or higher)
- npm

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd confederation-programs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **View the site:**
   Open http://localhost:4321/ in your browser

5. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment Method and URL

**Deployment Platform:** GitHub Pages (automated via GitHub Actions)

**Live Site URL:** [To be updated after deployment]

**Repository URL:** [To be updated after GitHub upload]

**Deployment Process:**
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. GitHub Actions automatically builds and deploys the site
4. Site becomes available at `https://[username].github.io/[repository-name]`

## Approximate Time Spent

**Total Time:** ~75 minutes

**Breakdown:**
- **Project setup and template configuration:** 15 minutes
- **Data loading and rendering implementation:** 25 minutes  
- **Responsive design and styling:** 20 minutes
- **Testing and edge case handling:** 10 minutes
- **Documentation and deployment setup:** 5 minutes

## Tradeoffs and Design Choices

### Technology Decisions

**Used Astro.js with Confederation College template:**
- ✅ **Pro:** Pre-configured with exact CC brand colors and typography
- ✅ **Pro:** Static site generation for optimal performance
- ✅ **Pro:** Simple deployment to any static hosting
- ❌ **Con:** Slight learning curve for developers unfamiliar with Astro

**Runtime JSON loading vs Build-time:**
- ✅ **Pro:** Meets assignment requirement for runtime loading
- ✅ **Pro:** Dynamic content updates without rebuilds
- ❌ **Con:** Requires client-side JavaScript and network request
- ❌ **Con:** Potential loading delay and CORS considerations

**Vanilla JavaScript vs Framework:**
- ✅ **Pro:** Lighter bundle size and faster loading
- ✅ **Pro:** No hydration overhead
- ✅ **Pro:** Simpler for single-page scope
- ❌ **Con:** More manual DOM manipulation code

### Design Decisions

**Card-based layout vs List format:**
- ✅ **Pro:** Better visual hierarchy and scanning
- ✅ **Pro:** More engaging and modern appearance
- ✅ **Pro:** Consistent spacing and organization
- ❌ **Con:** Takes more vertical space

**Responsive grid (1/2/3 columns):**
- ✅ **Pro:** Optimal space usage across devices
- ✅ **Pro:** Maintains readability on all screen sizes
- ❌ **Con:** More complex CSS than single column

**Text truncation for mission statements:**
- ✅ **Pro:** Prevents layout breaking from long text
- ✅ **Pro:** Maintains consistent card heights
- ❌ **Con:** Some content may be cut off (trade-off for layout consistency)

**External links open in new tabs:**
- ✅ **Pro:** Keeps users on the programs showcase
- ✅ **Pro:** Standard pattern for external navigation
- ❌ **Con:** May not follow all accessibility best practices

### Performance Considerations

**Static site generation:**
- ✅ **Pro:** Fast initial page load
- ✅ **Pro:** Good SEO and crawlability
- ✅ **Pro:** Works without JavaScript for basic HTML

**Font loading strategy:**
- ✅ **Pro:** Uses Astro's optimized font loading
- ❌ **Con:** Potential FOUT (Flash of Unstyled Text) during load

**Single-page application:**
- ✅ **Pro:** Simple architecture for assignment scope
- ❌ **Con:** All content loads at once (not an issue for 50 programs)

---

**Total programs displayed:** 50  
**Assignment requirements met:** All core and technical requirements  
**Browser compatibility:** Modern browsers (ES6+ support required)
