# Presskit Studio

A beautiful, responsive press kit website template for indie game developers. Create stunning promotional websites for your games with modern web technologies - completely free and easy to use.

![Template](https://img.shields.io/badge/Template-Press%20Kit%20Studio-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🎯 About Presskit Studio

**Presskit Studio** is a modern, open-source press kit template designed to help indie game developers create professional promotional websites for their games. Built with cutting-edge web technologies, this template provides everything you need to showcase your game professionally to press, influencers, and potential players.

### Why Presskit Studio?

- **Completely Free** - No licensing fees, no subscriptions
- **Easy to Use** - Get up and running in minutes, not hours
- **Zero Configuration** - Works out of the box with sensible defaults
- **Modern Technology** - Built with Vite, TypeScript, and Tailwind CSS
- **Professional Results** - Rival major studio press kits with minimal effort

## 🌟 Features

This press kit template includes everything you need:

- **Interactive Media Gallery** with YouTube video integration and screenshot carousel
- **Responsive Design** that works perfectly on all devices
- **Game Information Panel** with customizable release details, reviews, and tags
- **Contact Information** with copy-to-clipboard functionality
- **Multi-language Support** indicators
- **Dark/Light Mode** support
- **Modern UI** built with Tailwind CSS v4
- **SEO Optimized** for search engines and social media sharing
- **Lightning Fast** development with hot reload

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tolgazorlu/presskit.git
   cd presskit-studio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

### Project Structure

```
presskit-studio/
├── public/
│   ├── assets/images          # Your game screenshots and media
│   └── vite.svg
├── src/
│   ├── components/      # UI components
│   │   ├── hero.ts      # Main hero section with media gallery
│   │   ├── header.ts    # Navigation header
│   │   ├── footer.ts    # Footer with links
│   │   └── backgroundHero.ts  # Background component
│   ├── main.ts          # Main application entry point
│   ├── style.css        # Global styles
│   └── vite-env.d.ts    # TypeScript declarations
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

### Tech Stack

- **Framework:** Vanilla TypeScript with Vite
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Type Checking:** TypeScript 5.8+
- **Package Manager:** pnpm (recommended)

## 🎨 Customization

### Adding Your Game Content

1. **Replace screenshots** - Add your images to the `public/assets/` directory
2. **Update game information** - Edit details in `src/components/hero.ts`:
   - Game title and description
   - Release dates
   - Contact information
   - Tags and supported languages
   - Review scores
3. **Customize styling** - Modify colors, fonts, and layout to match your game's aesthetic

### Easy Content Updates

The template is designed for developers who want to focus on their games, not web development. Most content changes require editing simple JavaScript objects - no complex templating or CMS required.

## 📱 Responsive Design

Your press kit will look perfect on every device:
- **Desktop** (1024px+) - Full-featured layout with side panels
- **Tablet** (768px - 1023px) - Optimized touch interface
- **Mobile** (320px - 767px) - Streamlined mobile experience

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory, ready for deployment.

### Deployment Options

Deploy anywhere static sites are supported:
- **Firebase** - Connect your repository for automatic deployments
- **Netlify** - Drag and drop or Git integration
- **GitHub Pages** - Free hosting with GitHub Actions
- **Any CDN/Static Host** - Upload the `dist` folder

## 🎮 Perfect for Indie Developers

Presskit Studio eliminates the barrier between having a great game and having a great way to present it. Instead of spending weeks learning web development or hiring expensive designers, focus on what you do best - making games - while still having a professional online presence that rivals major studios.

### Who This Is For

- **Solo Indie Developers** - Get professional results without a team
- **Small Game Studios** - Consistent branding across multiple games
- **Game Jam Participants** - Quick press kit creation for submissions
- **Student Developers** - Professional portfolio pieces

## 🤝 Contributing

We welcome contributions! Whether it's:
- New features or components
- Bug fixes or improvements
- Documentation updates
- Design enhancements

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - completely free for personal and commercial use.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for exceptional developer experience
- Styled with [Tailwind CSS](https://tailwindcss.com/) for modern, responsive design
- Icons from [Heroicons](https://heroicons.com/)
- Inspired by the need for accessible, professional press kit tools

---

**Ready to showcase your game?** Clone Presskit Studio today and have your professional press kit live in minutes. No web development experience required.
