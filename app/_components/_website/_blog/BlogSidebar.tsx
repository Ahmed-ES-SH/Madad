// Sidebar Component
"use client";
import { blogPosts, categories } from "@/app/constants/blogposts";
import { motion } from "framer-motion";
import { FiCalendar, FiTag, FiTrendingUp } from "react-icons/fi";
import Img from "../../_global/Img";
import { useVariables } from "@/app/context/VariablesContext";
import { formatTitle, getTranslations } from "@/app/helpers/helpers";
import LocalLink from "../../_global/LocalLink";

export default function BlogSidebar() {
  const { local } = useVariables();
  const { blogPage } = getTranslations(local);

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

  return (
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
          {blogPage.categoriesTitle}
        </h3>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <motion.li
              key={category.name[local]}
              className="flex items-center justify-between hover:text-blue-600 cursor-pointer transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <span className="text-sm">{category.name[local]}</span>
              <span className="text-xs text-gray-500">({category.count})</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Latest Posts */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FiTrendingUp className="text-blue-600" />
          {blogPage.latestPostsTitle}
        </h3>
        <div className="space-y-4">
          {blogPosts.slice(0, 3).map((post, index) => {
            return (
              <motion.div
                className="w-full"
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <LocalLink
                  href={`/blog/${formatTitle(post.title)}?articleId=${post.id}`}
                  className="flex gap-3 group cursor-pointer"
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
                </LocalLink>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-900 mb-4">
          {blogPage.popularTagsTitle}
        </h3>
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
}
