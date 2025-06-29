# Amin Garage

[Live Site → amingarage.com](https://amingarage.com)

---

## Overview

Amin Garage is a modern, full-featured automotive service center website. It showcases premium auto care services, a professional team, customer testimonials, a gallery, and direct contact options. The site is designed for both desktop and mobile, providing a seamless user experience and easy access to information and services.

---

## Key Features

- **Professional Services Overview:** Detailed descriptions of all major automotive services offered, including pricing and features.
- **Team & About:** Meet the certified technicians and learn about the garage's mission, vision, and values.
- **Gallery:** Visual showcase of the facility, team, and services.
- **Customer Testimonials:** Real feedback from satisfied clients.
- **Contact & Location:** Integrated Google Maps, business hours, and direct WhatsApp/call buttons.
- **Responsive Design:** Optimized for all devices.
- **Modern UI:** Built with React, Tailwind CSS, and Vite for fast, beautiful interfaces.

---

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS, PostCSS, CSS Modules
- **Routing:** React Router DOM
- **Icons:** Lucide React, React Icons
- **Build Tool:** Vite
- **Linting:** ESLint (with TypeScript and React plugins)
- **Other:** EmailJS (for contact forms), Google Maps Embed

---

## Folder Structure

```
AminGarage/
├── public/                # Static assets (favicon, etc.)
├── src/
│   ├── assets/            # Images, SVGs, and static media
│   ├── components/        # Reusable React components (Navbar, Footer, etc.)
│   ├── pages/             # Main pages (Home, About, Services, Gallery, Blog, Contact)
│   ├── index.css          # Global styles
│   ├── main.tsx           # App entry point
│   └── App.tsx            # Main App component with routing
├── index.html             # HTML template
├── package.json           # Project metadata and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## Screenshots / Preview

> _Add screenshots of your site here for better presentation._

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm (v8+ recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/amingarage.git
   cd AminGarage
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint for code quality

---

## Configuration

- **ESLint:** Configured for React and TypeScript best practices (`eslint.config.js`).
- **Tailwind CSS:** Utility-first CSS framework (`tailwind.config.js`).
- **PostCSS:** Used for processing CSS (`postcss.config.js`).
- **TypeScript:** Strict type checking and modern JS features (`tsconfig*.json`).
- **Vite:** Fast build tool and dev server (`vite.config.ts`).

---

## Deployment

The site is deployed at [https://amingarage.com](https://amingarage.com). You can deploy your own build to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.) by uploading the `dist/` folder after running `npm run build`.

---

## Contact & Location

- **Business Hours:**
  - Monday – Thursday: 8:00 AM – 8:00 PM
  - Friday: Closed
  - Saturday – Sunday: 8:00 AM – 8:00 PM
- **WhatsApp:** +92 307 6552348
- **Location:** [View on Google Maps](https://www.google.com/maps?q=29.4827919,73.0411949)
- **Contact Form:** Available on the website

---

## Credits

- **Founder:** John Smith
- **Team:** Maria Garcia, David Wilson, and more
- **UI/UX:** Custom design with Tailwind CSS
- **Images:** Pexels, Unsplash, and custom assets
- **Icons:** Lucide React, React Icons

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
