# 🎬 VFlix - Modern Streaming Platform

<div align="center">
  <img src="public/favicon.svg" alt="VFlix Logo" width="100" height="100">
  
  **A sophisticated, full-stack streaming platform built with cutting-edge technologies**
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-VFlix-00D4AA?style=for-the-badge&logo=vercel)](https://vflix-mocha.vercel.app)
  [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
</div>

---

## 📖 Overview

**VFlix** is a comprehensive, production-ready streaming platform that demonstrates modern web development practices and technologies. Built as an educational project, it showcases advanced React patterns, TypeScript implementation, and full-stack integration with real-world APIs and databases.

> **⚠️ Educational Purpose**: This project is created for educational purposes to demonstrate full-stack web development skills. It does not host, stream, or provide access to any copyrighted content.

## ✨ Key Features

### 🎯 Core Functionality
- **🎬 Media Discovery**: Browse movies and TV shows with advanced filtering
- **🔍 Intelligent Search**: Real-time search with debounced queries and suggestions
- **📋 Personal Watchlist**: Save, organize, and manage your favorite content
- **⏯️ Continue Watching**: Track viewing progress across sessions
- **⭐ Rating System**: Rate and review content with 5-star precision
- **🎭 Genre Exploration**: Discover content through categorized browsing
- **📱 Responsive Design**: Seamless experience across all devices

### 🛠️ Advanced Features
- **🔐 Secure Authentication**: Supabase-powered user management
- **🌙 Dark/Light Mode**: Smooth theme switching with system preference detection
- **📊 Real-time Updates**: Live data synchronization across sessions
- **🎨 Modern UI/UX**: Polished interface with smooth animations
- **♿ Accessibility**: WCAG compliant with keyboard navigation
- **⚡ Performance**: Optimized loading and caching strategies

## 🚀 Live Demo

**Experience VFlix**: [https://vflix-mocha.vercel.app](https://vflix-mocha.vercel.app)

## 🛠️ Technology Stack

### Frontend Architecture
- **React** - Modern UI library with hooks and context
- **TypeScript** - Type-safe development with strict configuration
- **Vite** - Lightning-fast build tool and development server
- **React Router DOM** - Client-side routing and navigation

### UI/UX Framework
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Beautiful, customizable icons
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Intelligent class merging
- **Framer Motion** - Advanced animations and transitions

### Backend & Database
- **Supabase** - Backend-as-a-Service platform
  - PostgreSQL database with real-time subscriptions
  - Row Level Security (RLS) for data protection
  - Built-in authentication and user management
  - Real-time data synchronization

### External APIs
- **The Movie Database (TMDb)** - Comprehensive movie and TV show data
- **Vercel Analytics** - Performance monitoring and insights
- **Vercel Speed Insights** - Core Web Vitals tracking

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing
- **Terser** - JavaScript minification

### Additional Libraries
- **Axios** - HTTP client for API requests
- **React Hook Form** - Form state management
- **Sonner** - Toast notifications
- **Embla Carousel** - Touch-friendly carousels

## 📁 Project Structure

```
vflix-streaming-platform/
├── public/                     # Static assets
│   ├── favicon.svg            # App icon and logo
│   ├── robots.txt             # SEO configuration
│   └── sitemap.xml            # Site structure
├── src/
│   ├── animations/            # Centralized animation system
│   │   ├── variants.ts        # Animation variants
│   │   ├── transitions.ts     # Common transitions
│   │   └── index.ts          # Animation exports
│   ├── components/            # Reusable UI components
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx    # Navigation header
│   │   │   └── Footer.tsx    # Site footer
│   │   ├── ui/               # Base UI components (Radix UI)
│   │   │   ├── button.tsx    # Button component
│   │   │   ├── card.tsx      # Card component
│   │   │   ├── rating.tsx    # Rating component
│   │   │   └── ...           # Other UI primitives
│   │   ├── Logo.tsx          # Brand logo component
│   │   ├── ThemeToggle.tsx   # Dark/light mode toggle
│   │   ├── MediaCard.tsx     # Media display card
│   │   ├── RatingModal.tsx   # Rating interface
│   │   └── SearchBar.tsx     # Search functionality
│   ├── contexts/             # React Context providers
│   │   ├── AuthContext.tsx   # Authentication state
│   │   └── WatchlistContext.tsx # Watchlist management
│   ├── hooks/                # Custom React hooks
│   │   ├── useDebounce.ts    # Debounced input handling
│   │   ├── useOnClickOutside.ts # Click outside detection
│   │   └── use-toast.ts      # Toast notifications
│   ├── lib/                  # Utility functions and configurations
│   │   ├── api.ts           # TMDb API integration
│   │   ├── supabase.ts      # Supabase configuration
│   │   ├── types.ts         # TypeScript definitions
│   │   └── utils.ts         # Helper functions
│   ├── pages/               # Page components
│   │   ├── HomePage.tsx     # Landing page
│   │   ├── MoviesPage.tsx   # Movies listing
│   │   ├── TVShowsPage.tsx  # TV shows listing
│   │   ├── SearchPage.tsx   # Search results
│   │   ├── WatchlistPage.tsx # User watchlist
│   │   ├── MediaDetailsPage.tsx # Media details
│   │   └── Auth/            # Authentication pages
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and theme
├── database-setup.sql       # Database schema
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** package manager (recommended)
- **Git** for version control
- **Supabase account** for backend services
- **TMDb API key** for movie/TV data
- **Code Editor** (VS Code recommended) for editing files

### Installation Steps

#### Step 1: Install Node.js
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version (recommended)
3. Run the installer and follow the setup wizard
4. Verify installation:
    
    ```bash
   node --version
   npm --version
```

#### Step 2: Install pnpm
```bash
# Install pnpm globally
npm install -g pnpm
    
# Verify installation
pnpm --version
```
    
#### Step 3: Clone and Setup Project
    ```bash
# Clone the repository
git clone https://github.com/KronosWasTaken/VFlix.git
cd VFlix

# Install dependencies
pnpm install
```

#### Step 4: Environment Configuration
```bash
# Create environment file
echo. > .env

# Add your API keys to .env
    VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

#### Step 5: Database Setup
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `database-setup.sql`
4. Run the script to create required tables

#### Step 6: Start Development Server
    ```bash
# Start the development server
pnpm dev

# Open your browser and navigate to
# http://localhost:5173
```

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build optimized production bundle
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint for code quality checks

## 🔧 Configuration

### TMDb API Setup
1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create an account and request an API key
3. Add your API key to the `.env` file as `VITE_TMDB_API_KEY`

### Supabase Setup
1. Create a new project at [Supabase](https://supabase.com/)
2. Navigate to Settings > API to get your project URL and anon key
3. Add them to your `.env` file:
   - `VITE_SUPABASE_URL` - Your project URL
   - `VITE_SUPABASE_ANON_KEY` - Your anon key
4. Run the database setup script (see Database Schema section)

## 🗄️ Database Schema

### Required Supabase Tables

```sql
-- User watchlists table
CREATE TABLE user_watchlists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  media_id INTEGER NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('movie', 'tv')),
  title TEXT NOT NULL,
  poster_path TEXT,
  added_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  watched BOOLEAN DEFAULT FALSE,
  watch_later BOOLEAN DEFAULT TRUE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  notes TEXT,
  UNIQUE(user_id, media_id, media_type)
);

-- Continue watching table
CREATE TABLE user_continue_watching (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  media_id INTEGER NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('movie', 'tv')),
  progress INTEGER DEFAULT 0,
  last_watched TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  season INTEGER,
  episode INTEGER,
  UNIQUE(user_id, media_id, media_type)
);

-- Enable Row Level Security
ALTER TABLE user_watchlists ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_continue_watching ENABLE ROW LEVEL SECURITY;

-- Create policies for data access
CREATE POLICY "Users can view own watchlist" ON user_watchlists
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own watchlist" ON user_watchlists
  FOR ALL USING (auth.uid() = user_id);
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Red (`#D32F2F`) - Modern, vibrant accent
- **Background**: Adaptive dark/light themes
- **Text**: High contrast for accessibility compliance
- **Gradients**: Subtle overlays for visual depth

### Typography
- **Headings**: Oswald (Google Fonts) - Bold, modern sans-serif
- **Body**: System UI fonts - Optimized for readability
- **Code**: Monospace fonts for technical content

### Component Architecture
- **Radix UI Primitives**: Accessible, unstyled components
- **Custom Styling**: Tailwind CSS for consistent design
- **Animation System**: Centralized Framer Motion variants
- **Responsive Design**: Mobile-first approach

## 📱 Responsive Design

### Breakpoint Strategy
- **Mobile**: 320px - 768px (Touch-optimized)
- **Tablet**: 768px - 1024px (Hybrid interaction)
- **Desktop**: 1024px+ (Full feature set)

### Performance Optimizations
- **Image Lazy Loading**: Reduced initial bundle size
- **Code Splitting**: Route-based chunk loading
- **Caching Strategies**: API response caching
- **Bundle Analysis**: Optimized dependency management

## 🔒 Security & Privacy

### Data Protection
- **Row Level Security**: Database-level access control
- **Environment Variables**: Secure API key management
- **Input Validation**: Form validation with React Hook Form
- **Secure Authentication**: Supabase-powered user management

### Privacy Compliance
- **GDPR Ready**: Data handling best practices
- **Privacy Policy**: Comprehensive data usage disclosure
- **Terms of Service**: Clear usage guidelines
- **Educational Disclaimer**: Prominent purpose statements

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Environment Variables
```bash
VITE_TMDB_API_KEY=your_api_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## 🤝 Contributing    

This is an educational project, but contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain component accessibility
- Write meaningful commit messages
- Test across different devices and browsers

## 📄 License

This project is for educational purposes only. No commercial rights reserved.

## 👨‍💻 Author

**Aaditya** - [@KronosWasTaken](https://github.com/KronosWasTaken)

- **Email**: aaditya12raj@gmail.com
- **Project Type**: Educational Full-Stack Development
- **Purpose**: Learning, Portfolio Showcase, and Skill Demonstration

## 🙏 Acknowledgments

- **The Movie Database (TMDb)** - Comprehensive movie and TV show data API
- **Supabase** - Backend-as-a-Service platform and database
- **Vercel** - Hosting, deployment, and performance monitoring
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Team** - Modern UI library and ecosystem

---

<div align="center">
  <p>Built with ❤️ for educational purposes</p>
  <p>© 2025 VFlix - Educational project - no commercial rights reserved</p>
</div>