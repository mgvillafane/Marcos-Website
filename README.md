# Marcos Gomez Villafañe - Professional Portfolio

A high-performance, visually immersive professional portfolio built with React and Vite. This project features advanced CSS animations, interactive background components, and a sleek dark-mode aesthetic designed for electronics engineers and developers.

## 🚀 Current Features & Implementation

The following features have been successfully implemented:

- **Full Localization:** The entire application has been translated into English, including metadata and SEO components.
- **Dynamic Header:** A responsive navigation bar with scroll-spy functionality that highlights the active section.
- **Hero Section:** Includes a liquid chroma background effect and a smooth typewriter animation for the name.
- **Hero Background:** Liquid background powered by Unicorn Studio through `ChromaBG`.
- **Project Showcase:** A grid-based project gallery using `ProjectCard` components with hover effects and technology tags.
- **Experience & Education:** Interactive accordion-style lists to showcase professional history and academic achievements.
- **Performance Optimized:** Built with Vite for ultra-fast HMR and optimized asset loading.
- **Deployment Ready:** Configured for Vercel with custom `vercel.json` settings.

## 🛠 Tech Stack

- **Frontend:** React 18+
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Custom properties/Variables)
- **Icons:** Inline SVGs for optimized performance
- **Animations:** CSS Keyframes & Intersection Observer API

## 📋 Changelog (Recently Completed)

1.  **Identity Update:** Personalized the site for **Marcos Gomez Villafañe**.
2.  **Language Migration:** Converted all Spanish UI strings, content, and metadata to English.
3.  **Project Refresh:** Updated all `ProjectCard` components to use English labels and descriptions.
4.  **Academic Translation:** Fully localized the `Education.jsx` component, including degree titles and thesis descriptions.
5.  **SEO Optimization:** Updated `index.html` with English meta tags and a descriptive site title.

## 🔮 Future Roadmap & Potential Improvements

These are the planned enhancements and potential changes for future versions:

### 1. Advanced Interactivity
- **Contact Form Integration:** Replace the current mailto link with a functional backend using EmailJS or a Serverless Function.
- **Dark/Light Mode Toggle:** Add a manual theme switcher for users who prefer high-contrast light modes.

### 2. Content & Experience
- **Interactive Timeline:** Implement a vertical timeline view for the Experience section to better visualize career progression.
- **Skill Visualization:** Add animated progress bars or a 3D tag cloud for technical skills (MATLAB, C++, Altium, etc.).
- **Downloadable Resume:** Integrate a PDF download button for the latest CV version.

### 3. Technical Enhancements
- **Image Optimization:** Implement Lazy Loading for project images and use Next-Gen formats (WebP/AVIF).
- **Unit Testing:** Add Vitest or Jest for component testing to ensure UI stability.
- **CMS Integration:** Connect to a headless CMS (like Sanity or Contentful) to manage projects and experience without touching the code.

## 🛠 Local Development

To run this project locally:

1.  Clone the repository:
    ```bash
    git clone [repository-url]
    ```
2.  Install dependencies:
    ```bash
    npm ci
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Build for production:
    ```bash
    npm run build
    ```

---
Developed by **Marcos Gomez Villafañe**

## Repository contents

Only source files and assets used by the site are tracked. Install dependencies with `npm ci`; regenerate production output with `npm run build`. The `node_modules/`, `dist/`, local environment files, and `.vercel/` directories are ignored.

The active GLB model and STL download use Vite asset imports so they are included in production builds.
