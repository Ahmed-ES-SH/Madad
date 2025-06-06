# Madad - Technical Services Company Website

## 📋 Overview

Madad is a modern web application designed for a company specializing in technical services. The project provides a contemporary and interactive user interface to showcase services and facilitate client communication.

## 🚀 Technologies Used

### Core Framework

- **Next.js** (v15.3.3) - React framework for modern web applications
- **React** (v19.0.0) - JavaScript library for building user interfaces
- **React DOM** (v19.0.0) - DOM management for React applications

### Design & Animation

- **Framer Motion** (v12.15.0) - Advanced animation library
- **React Icons** (v5.5.0) - Comprehensive icon library
- **React Intersection Observer** (v9.16.0) - Scroll-based animations and interactions

### Development Tools

- **@clerk/nextjs** (v6.20.2) - Authentication and user management
- **Sharp** (v0.34.2) - High-performance image processing
- **Sonner** (v2.0.4) - Toast notifications
- **Swiper** (v11.2.8) - Modern slider/carousel component
- **Zustand** (v5.0.5) - Lightweight state management

## 📁 Project Structure

```
MADAD-PROJECT/
├── .clerk/                 # Clerk authentication configuration
├── .vscode/               # VS Code settings
├── _components/           # Reusable React components
│   ├── _global/          # Global components
│   └── _website/         # Website-specific components
├── app/                   # Next.js app directory
│   ├── [local]/          # Localized routes
│   ├── constants/        # Application constants
│   ├── context/          # React context providers
│   ├── helpers/          # Utility functions
│   ├── store/            # State management
│   └── translations/     # Internationalization files
├── node_modules/          # Dependencies
├── public/               # Static assets
└── configuration files   # Various config files
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd MADAD-PROJECT
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory and add necessary environment variables:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🌟 Key Features

- **Modern UI/UX** - Clean, responsive design with smooth animations
- **Authentication** - Secure user authentication with Clerk
- **Internationalization** - Multi-language support
- **Image Optimization** - Optimized image processing with Sharp
- **State Management** - Efficient state handling with Zustand
- **Interactive Components** - Enhanced user experience with Swiper and animations
- **Responsive Design** - Mobile-first approach for all devices

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tsconfig.buildinfo` - TypeScript build information
- `package-lock.json` - Dependency lock file
- `postcss.config.mjs` - PostCSS configuration
- `.env.local` - Environment variables
- `.gitignore` - Git ignore rules
- `eslint.config.mjs` - ESLint configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for Madad Technical Services Company.

## 📞 Support

For technical support or inquiries about the Madad platform, please contact the development team.

---

**Built with ❤️ for Madad Technical Services**
**Built with ❤️ by Ahmed Ismail**
