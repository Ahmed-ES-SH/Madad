"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogPost, blogPosts } from "@/app/constants/blogposts";
import BlogPagination from "@/app/_components/_website/_blog/BlogPagination";
import BlogSidebar from "@/app/_components/_website/_blog/BlogSidebar";
import ArticleCard from "@/app/_components/_website/_blog/ArticleCard";
import LoadingBlogSpinner from "@/app/_components/_website/_blog/LoadingBlogSpiner";
import HeadPage from "@/app/_components/_website/_blog/HeadPage";
import SearchAndFilter from "@/app/_components/_website/_blog/SearchAndFilter";
import { directionMap } from "@/app/constants/constants";
import { useVariables } from "@/app/context/VariablesContext";
import { FaSearch } from "react-icons/fa";
import { getTranslations } from "@/app/helpers/helpers";

// Types

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
  totalPosts: number;
}

const NoPostsFound: React.FC = () => {
  const { local } = useVariables();
  const { noArticles } = getTranslations(local);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center min-h-[70vh] p-10 bg-gray-50 rounded-lg  text-gray-600"
    >
      <FaSearch className="text-6xl mb-4 text-gray-400" />
      <h3 className="text-xl font-semibold mb-2">{noArticles.title}</h3>
      <p className="text-center max-w-sm">{noArticles.message}</p>
    </motion.div>
  );
};

// Blog Grid Component
const BlogGrid: React.FC<{
  posts: BlogPost[];
  isLoading: boolean;
}> = ({ posts, isLoading }) => (
  <AnimatePresence mode="wait">
    {isLoading ? (
      <LoadingBlogSpinner key="loading" />
    ) : posts.length === 0 ? (
      <NoPostsFound key="no-posts" />
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
          <ArticleCard key={post.id} post={post} index={index} />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
);

// Main Blog Component
export default function BlogPage() {
  const { local } = useVariables();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);

  const postsPerPage = 8;

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    const filtered = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    switch (sortBy) {
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case "popular":
        filtered.sort((a, b) => parseInt(b.readTime) - parseInt(a.readTime));
        break;
      default:
        filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
    }

    return filtered;
  }, [searchTerm, sortBy]);

  // Pagination info
  const paginationInfo: PaginationInfo = {
    currentPage,
    totalPages: Math.ceil(filteredAndSortedPosts.length / postsPerPage),
    postsPerPage,
    totalPosts: filteredAndSortedPosts.length,
  };

  const paginatedPosts = useMemo(() => {
    return filteredAndSortedPosts.slice(
      (currentPage - 1) * postsPerPage,
      currentPage * postsPerPage
    );
  }, [filteredAndSortedPosts, currentPage]);

  // Delay the display of posts to simulate loading
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setDisplayedPosts(paginatedPosts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [paginatedPosts]);

  // Handlers
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleSort = (sort: string) => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div dir={directionMap[local]} className="min-h-screen pt-24 bg-gray-50">
      <HeadPage />

      <main className="c-container py-12">
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

            <BlogGrid posts={displayedPosts} isLoading={isLoading} />

            {!isLoading && paginationInfo.totalPages > 1 && (
              <BlogPagination
                currentPage={currentPage}
                totalPages={paginationInfo.totalPages}
                onPageChange={handlePageChange}
                isLoading={isLoading}
              />
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}
