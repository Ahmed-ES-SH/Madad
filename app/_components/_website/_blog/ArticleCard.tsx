"use client";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import Img from "@/app/_components/_global/Img";
import { BlogPost } from "@/app/constants/blogposts";
import LocalLink from "../../_global/LocalLink";
import { formatTitle } from "@/app/helpers/helpers";

interface props {
  post: BlogPost;
  index: number;
}

// Blog Card Component
export default function ArticleCard({ post, index }: props) {
  return (
    <motion.article
      className="bg-white h-[400px] hover:scale-[105%] rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ delay: index * 0.1 }}
    >
      <LocalLink
        className="w-full block"
        href={`/blog/${formatTitle(post.title)}?articleId=${post.id}`}
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

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>

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
      </LocalLink>
    </motion.article>
  );
}
