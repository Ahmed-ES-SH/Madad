/* eslint-disable @typescript-eslint/no-explicit-any */
import ArticleDetailPage from "@/app/_components/_website/_articlePage/ArticleDetailsPage";
import React, { Suspense } from "react";
import Loading from "../../services/[serviceTitle]/loading";
import { blogPosts } from "@/app/constants/blogposts";
import { getTranslations } from "@/app/helpers/helpers";
import { getSharedMetadata } from "@/app/helpers/getSharedMetadata";

export async function generateMetadata({ params, searchParams }: any) {
  const local = params.local || "en";
  const articleId = searchParams.articleId;

  const article = blogPosts.find((service) => service.id === Number(articleId));

  const translations = getTranslations(local);
  const sharedMetadata = getSharedMetadata(local, translations);

  if (!article) {
    return {
      title: "Post Title",
      description: "Post Description",
      ...sharedMetadata,
    };
  }

  return {
    title: `Madad Post - ${article.title}`,
    description: article.excerpt,
    ...sharedMetadata,
  };
}

export default function ArticlePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ArticleDetailPage />
    </Suspense>
  );
}
