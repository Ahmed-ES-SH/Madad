"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaTag } from "react-icons/fa";
import Img from "../../_global/Img";
import BlogSidebar from "../_blog/BlogSidebar";
import RelatedArticlesSlider from "./RelatedArticlesSlider";
import ArticleHeader from "./ArticleHeader";
import ArticleContent from "./ArticleContent";
import InteractionSection from "./InteractionSection";
import CommentsSection from "./CommentsSection";
import { blogPosts } from "@/app/constants/blogposts";
import { useSearchParams } from "next/navigation";
import { directionMap } from "@/app/constants/constants";
import { useVariables } from "@/app/context/VariablesContext";

// Types
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
}

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Article Image Component
const ArticleImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <motion.div
    className="mb-8"
    variants={fadeInUp}
    initial="initial"
    animate="animate"
  >
    <Img
      src={src}
      alt={alt}
      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
    />
  </motion.div>
);

// Tags Component
const ArticleTags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <motion.div
    className="mb-8"
    variants={fadeInUp}
    initial="initial"
    animate="animate"
  >
    <div className="flex items-center gap-2 mb-3">
      <FaTag className="text-gray-400" />
      <span className="text-sm font-medium text-gray-600">Tags:</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
        >
          #{tag}
        </span>
      ))}
    </div>
  </motion.div>
);

// Main Article Detail Page Component
export default function ArticleDetailPage() {
  const { local } = useVariables();
  const searchParams = useSearchParams();
  const articleId = searchParams.get("articleId");
  const article =
    blogPosts.find((post) => post.id == Number(articleId)) || blogPosts[0];

  return (
    <div dir={directionMap[local]} className="min-h-screen pt-20 bg-white">
      <div className="c-container  py-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-start gap-2 w-full h-full">
            <div className="flex-1/2">
              <ArticleHeader article={article} />
              <ArticleImage src={article.image} alt={article.title} />
              <ArticleContent article={article} />
              <ArticleTags tags={article.tags} />
              <InteractionSection />
            </div>
            <div className="xl:flex-1 xl:block sticky top-20 right-0  h-full hidden">
              <BlogSidebar />
            </div>
          </div>
          <CommentsSection />
          <RelatedArticlesSlider />
        </motion.div>
      </div>
    </div>
  );
}
