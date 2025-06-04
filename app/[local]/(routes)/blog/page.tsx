"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCalendar,
  FiUser,
  FiClock,
  FiSearch,
  FiTag,
  FiChevronDown,
  FiTrendingUp,
  FiChevronLeft,
  FiChevronRight,
  FiLoader,
} from "react-icons/fi";
import Img from "@/app/_components/_global/Img";

// Types
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

interface Category {
  name: string;
  count: number;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
  totalPosts: number;
}

// Sample data - 20 articles
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Essential Tips for Designing a Memorable Brand Logo",
    excerpt:
      "Creating a memorable brand logo requires understanding your audience, choosing the right colors, and ensuring scalability across all platforms.",
    author: "John Smith",
    date: "December 15, 2022",
    readTime: "5 min read",
    category: "Design and Branding",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    tags: ["branding", "design", "logo"],
    featured: true,
  },
  {
    id: 2,
    title: "The Dos and Don'ts of Social Media Marketing in 2022",
    excerpt:
      "Social media marketing continues to evolve. Learn the essential strategies that work and common mistakes to avoid in today's digital landscape.",
    author: "Sarah Johnson",
    date: "December 10, 2022",
    readTime: "7 min read",
    category: "Marketing Strategy",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    tags: ["social media", "marketing", "strategy"],
  },
  {
    id: 3,
    title:
      "The Power of Video Marketing: How Animated Explainer Videos Can Boost Engagement",
    excerpt:
      "Discover how animated explainer videos can transform your marketing strategy and significantly increase audience engagement rates.",
    author: "Lisa Chen",
    date: "November 20, 2022",
    readTime: "6 min read",
    category: "Video Production",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
    tags: ["video", "animation", "marketing"],
  },
  {
    id: 4,
    title:
      "Designing for Accessibility: Tips and Best Practices for Inclusive Design",
    excerpt:
      "Learn how to create designs that are accessible to everyone, including users with disabilities, while maintaining aesthetic appeal.",
    author: "Alex Rivera",
    date: "November 5, 2022",
    readTime: "8 min read",
    category: "Design and Branding",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
    tags: ["accessibility", "ui design", "inclusive design"],
  },
  {
    id: 5,
    title: "The Rise of Digital Trends: What's Next for 2023",
    excerpt:
      "Explore the emerging digital trends that will shape the technology landscape in 2023 and beyond.",
    author: "Mike Thompson",
    date: "March 2, 2023",
    readTime: "4 min read",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    tags: ["trends", "technology", "digital transformation"],
  },
  {
    id: 6,
    title: "Storytelling in Marketing: Creating Emotional Connections",
    excerpt:
      "Learn how powerful storytelling can create deeper emotional connections with your audience and drive better marketing results.",
    author: "Emma Davis",
    date: "February 8, 2023",
    readTime: "5 min read",
    category: "Marketing Strategy",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop",
    tags: ["storytelling", "content marketing", "brand strategy"],
  },
  {
    id: 7,
    title: "Mobile-First Design: Creating Responsive User Experiences",
    excerpt:
      "Understanding the importance of mobile-first design principles and how to create seamless experiences across all devices.",
    author: "David Kim",
    date: "January 25, 2023",
    readTime: "6 min read",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    tags: ["mobile design", "responsive", "ux"],
  },
  {
    id: 8,
    title: "Color Psychology in Web Design: Influencing User Behavior",
    excerpt:
      "Discover how different colors can impact user emotions and behavior, and learn to use color psychology effectively in your designs.",
    author: "Maria Rodriguez",
    date: "January 18, 2023",
    readTime: "7 min read",
    category: "Design and Branding",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop",
    tags: ["color psychology", "web design", "user behavior"],
  },
  {
    id: 9,
    title: "Building Progressive Web Apps: The Future of Mobile Development",
    excerpt:
      "Learn how PWAs combine the best of web and native mobile apps to deliver superior user experiences.",
    author: "James Wilson",
    date: "January 12, 2023",
    readTime: "9 min read",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    tags: ["pwa", "mobile development", "web apps"],
  },
  {
    id: 10,
    title: "SEO Strategies That Actually Work in 2023",
    excerpt:
      "Cut through the noise and discover the SEO tactics that are delivering real results in today's search landscape.",
    author: "Rachel Green",
    date: "January 5, 2023",
    readTime: "8 min read",
    category: "Marketing Strategy",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop",
    tags: ["seo", "search marketing", "digital strategy"],
  },
  {
    id: 11,
    title: "The Art of Minimalist Design: Less is More",
    excerpt:
      "Explore the principles of minimalist design and how simplicity can create more impactful and user-friendly interfaces.",
    author: "Oliver Chen",
    date: "December 28, 2022",
    readTime: "5 min read",
    category: "Design and Branding",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    tags: ["minimalism", "design principles", "ui design"],
  },
  {
    id: 12,
    title: "Content Marketing Automation: Tools and Strategies",
    excerpt:
      "Streamline your content marketing efforts with automation tools and strategies that save time while improving results.",
    author: "Sophie Turner",
    date: "December 20, 2022",
    readTime: "6 min read",
    category: "Marketing Strategy",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    tags: ["content marketing", "automation", "marketing tools"],
  },
  {
    id: 13,
    title: "JavaScript Frameworks Comparison: React vs Vue vs Angular",
    excerpt:
      "A comprehensive comparison of the most popular JavaScript frameworks to help you choose the right one for your project.",
    author: "Kevin Park",
    date: "December 12, 2022",
    readTime: "10 min read",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
    tags: ["javascript", "frameworks", "web development"],
  },
  {
    id: 14,
    title: "User Experience Research: Methods and Best Practices",
    excerpt:
      "Learn effective UX research methods to better understand your users and create more successful digital products.",
    author: "Amanda Foster",
    date: "December 8, 2022",
    readTime: "7 min read",
    category: "Design and Branding",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    tags: ["ux research", "user testing", "design thinking"],
  },
  {
    id: 15,
    title: "Building Scalable APIs: Architecture and Best Practices",
    excerpt:
      "Design and implement APIs that can handle growth while maintaining performance and reliability.",
    author: "Tom Anderson",
    date: "November 30, 2022",
    readTime: "9 min read",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    tags: ["api design", "backend", "scalability"],
  },
  {
    id: 16,
    title: "Social Media Analytics: Measuring What Matters",
    excerpt:
      "Beyond vanity metrics: learn to track and analyze social media data that actually impacts your business goals.",
    author: "Nina Patel",
    date: "November 25, 2022",
    readTime: "6 min read",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    tags: ["analytics", "social media", "metrics"],
  },
  {
    id: 17,
    title: "Typography in Digital Design: Creating Visual Hierarchy",
    excerpt:
      "Master the art of typography to improve readability and create compelling visual hierarchies in your digital designs.",
    author: "Lucas Miller",
    date: "November 18, 2022",
    readTime: "5 min read",
    category: "Design and Branding",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    tags: ["typography", "visual hierarchy", "design"],
  },
  {
    id: 18,
    title: "Cloud Computing for Small Business: Getting Started",
    excerpt:
      "A beginner's guide to adopting cloud computing solutions that can help small businesses scale efficiently.",
    author: "Carol White",
    date: "November 10, 2022",
    readTime: "8 min read",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    tags: ["cloud computing", "small business", "technology"],
  },
  {
    id: 19,
    title: "Email Marketing Automation: Strategies That Convert",
    excerpt:
      "Build email marketing funnels that nurture leads and convert subscribers into customers through strategic automation.",
    author: "Robert Lee",
    date: "November 3, 2022",
    readTime: "7 min read",
    category: "Marketing Strategy",
    image:
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
    tags: ["email marketing", "automation", "conversion"],
  },
  {
    id: 20,
    title: "The Future of Web Development: Emerging Technologies",
    excerpt:
      "Explore the cutting-edge technologies that are shaping the future of web development and what developers need to know.",
    author: "Grace Kim",
    date: "October 28, 2022",
    readTime: "6 min read",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
    tags: ["future tech", "web development", "emerging technologies"],
  },
];

const categories: Category[] = [
  { name: "Design and Branding", count: 6 },
  { name: "Website Development", count: 4 },
  { name: "App Development", count: 4 },
  { name: "Social Media", count: 1 },
  { name: "Marketing Strategy", count: 5 },
  { name: "Video Production", count: 1 },
];

const popularTags = [
  "branding",
  "ui design",
  "seo",
  "marketing",
  "app development",
  "social media",
  "web development",
  "design",
];

// Loading Component
const LoadingSpinner: React.FC = () => (
  <motion.div
    className="flex flex-col items-center justify-center py-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="mb-4"
    >
      <FiLoader className="w-8 h-8 text-blue-600" />
    </motion.div>
    <motion.p
      className="text-gray-600 font-medium"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Loading articles...
    </motion.p>
  </motion.div>
);

// Header Component
const Header: React.FC = () => (
  <motion.header
    className="text-center py-16 bg-gradient-to-r from-blue-50 to-indigo-50"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        className="inline-block text-sm text-blue-600 font-medium mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        HONYE BLOG
      </motion.div>
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        IDEAS <span className="text-gray-400">THAT</span> INS
        <span className="relative">
          <span className="text-blue-600">P</span>
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <span className="text-sm font-bold">💡</span>
          </motion.div>
        </span>
        IRE
      </motion.h1>
    </div>
  </motion.header>
);

// Search and Filter Component
const SearchAndFilter: React.FC<{
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalResults: number;
  isLoading: boolean;
}> = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  totalResults,
  isLoading,
}) => (
  <motion.div
    className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">
        SHOWING <span className="font-semibold">{totalResults} RESULTS</span>
      </span>
    </div>

    <div className="flex items-center gap-4">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      <div className="relative">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          disabled={isLoading}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="recent">SORT BY: Recent</option>
          <option value="popular">SORT BY: Popular</option>
          <option value="oldest">SORT BY: Oldest</option>
        </select>
        <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
      </div>
    </div>
  </motion.div>
);

// Blog Card Component
const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({
  post,
  index,
}) => (
  <motion.article
    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <div className="relative overflow-hidden">
      <Img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
          {post.category}
        </span>
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <FiCalendar size={12} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiUser size={12} />
            <span>by {post.author}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FiClock size={12} />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  </motion.article>
);

// Pagination Component
const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}> = ({ currentPage, totalPages, onPageChange, isLoading }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, currentPage - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <motion.div
      className="flex items-center justify-center gap-2 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronLeft className="w-4 h-4" />
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={isLoading}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            page === currentPage
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || isLoading}
        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <FiChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

// Sidebar Component
const Sidebar: React.FC = () => (
  <motion.aside
    className="space-y-8"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 }}
  >
    {/* Categories */}
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <FiTag className="text-blue-600" />
        ALL CATEGORIES
      </h3>
      <ul className="space-y-3">
        {categories.map((category, index) => (
          <motion.li
            key={category.name}
            className="flex items-center justify-between hover:text-blue-600 cursor-pointer transition-colors"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <span className="text-sm">{category.name}</span>
            <span className="text-xs text-gray-500">({category.count})</span>
          </motion.li>
        ))}
      </ul>
    </div>

    {/* Latest Posts */}
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <FiTrendingUp className="text-blue-600" />
        LATEST POSTS
      </h3>
      <div className="space-y-4">
        {blogPosts.slice(0, 3).map((post, index) => (
          <motion.div
            key={post.id}
            className="flex gap-3 group cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            <Img
              src={post.image}
              alt={post.title}
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h4>
              <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                <FiCalendar size={10} />
                <span>{post.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Popular Tags */}
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4">POPULAR TAGS</h3>
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag, index) => (
          <motion.span
            key={tag}
            className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-3 py-1 rounded-full text-xs cursor-pointer transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.aside>
);

// Blog Grid Component
const BlogGrid: React.FC<{
  posts: BlogPost[];
  isLoading: boolean;
}> = ({ posts, isLoading }) => (
  <AnimatePresence mode="wait">
    {isLoading ? (
      <LoadingSpinner key="loading" />
    ) : (
      <motion.div
        key="content"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {posts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

// Main Blog Component
const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const postsPerPage = 6;

  // Simulate loading with 1-second delay
  const simulateLoading = (callback: () => void) => {
    setIsLoading(true);

    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
      callback();
    }, 1000);

    setLoadingTimeout(timeout);
  };

  const handleSearch = (term: string) => {
    simulateLoading(() => {
      setSearchTerm(term);
      setCurrentPage(1);
    });
  };

  const handleSort = (sort: string) => {
    simulateLoading(() => {
      setSortBy(sort);
      setCurrentPage(1);
    });
  };

  const handlePageChange = (page: number) => {
    simulateLoading(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Sort posts
    switch (sortBy) {
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case "popular":
        filtered.sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
        break;
      case "recent":
      default:
        filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
    }

    return filtered;
  }, [searchTerm, sortBy]);

  // Pagination logic
  const paginationInfo: PaginationInfo = {
    currentPage,
    totalPages: Math.ceil(filteredAndSortedPosts.length / postsPerPage),
    postsPerPage,
    totalPosts: filteredAndSortedPosts.length,
  };

  const currentPosts = filteredAndSortedPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
    };
  }, [loadingTimeout]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <SearchAndFilter
              searchTerm={searchTerm}
              setSearchTerm={handleSearch}
              sortBy={sortBy}
              setSortBy={handleSort}
              totalResults={filteredAndSortedPosts.length}
              isLoading={isLoading}
            />

            <BlogGrid posts={currentPosts} isLoading={isLoading} />

            {!isLoading && paginationInfo.totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={paginationInfo.totalPages}
                onPageChange={handlePageChange}
                isLoading={isLoading}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
