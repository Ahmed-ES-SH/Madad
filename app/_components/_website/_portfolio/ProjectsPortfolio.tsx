"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVariables } from "@/app/context/VariablesContext";
import { getTranslations } from "@/app/helpers/helpers";
import SidebarFilter from "./SidebarFilter";
import ProjectCard from "./ProjectCard";
import Pagination from "./Pagination";
import ServicesSlider from "./ServicesSlider";
import { directionMap } from "@/app/constants/constants";

export interface Project {
  id: number;
  imgSrc: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  category: {
    en: string;
    ar: string;
  };
  skills: string[];
}

export default function ProjectsPortfolio() {
  const { local } = useVariables();
  const { portfolioPage } = getTranslations(local);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const projectsPerPage = 6;

  const projects = useMemo<Project[]>(
    () => [
      {
        id: 1,
        imgSrc:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "E-Commerce Platform",
          ar: "منصة تجارة إلكترونية",
        },
        description: {
          en: "An online store built to deliver a seamless shopping experience with integrated payment and inventory systems.",
          ar: "متجر إلكتروني يقدم تجربة تسوق سلسة مع أنظمة دفع ومخزون مدمجة.",
        },
        category: {
          en: "Web Development",
          ar: "تطوير الويب",
        },
        skills: ["React", "Node.js", "MongoDB", "Stripe API"],
      },
      {
        id: 2,
        imgSrc:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "Brand Identity Design",
          ar: "تصميم الهوية البصرية",
        },
        description: {
          en: "We created a complete brand identity including logo, typography, and visual assets for a startup.",
          ar: "قمنا بإنشاء هوية بصرية كاملة تشمل الشعار والخطوط والعناصر البصرية لشركة ناشئة.",
        },
        category: {
          en: "Graphic Design",
          ar: "التصميم الجرافيكي",
        },
        skills: ["Illustrator", "Photoshop", "Figma"],
      },
      {
        id: 3,
        imgSrc:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "Social Media Campaign",
          ar: "حملة تسويقية عبر التواصل الاجتماعي",
        },
        description: {
          en: "Managed and executed a month-long social media campaign for a retail brand.",
          ar: "قمنا بإدارة وتنفيذ حملة تسويق شهرية عبر وسائل التواصل لعلامة تجارية تجزئة.",
        },
        category: {
          en: "Digital Marketing",
          ar: "التسويق الرقمي",
        },
        skills: ["Meta Ads", "Instagram", "Analytics"],
      },
      {
        id: 4,
        imgSrc:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "Mobile Delivery App",
          ar: "تطبيق توصيل موبايل",
        },
        description: {
          en: "Developed a mobile application for food delivery with real-time tracking and online payments.",
          ar: "طورنا تطبيق موبايل لتوصيل الطعام مع تتبع لحظي وخيارات دفع إلكترونية.",
        },
        category: {
          en: "Mobile Development",
          ar: "تطوير التطبيقات",
        },
        skills: ["React Native", "Firebase", "Google Maps API"],
      },
      {
        id: 5,
        imgSrc:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "Corporate Website",
          ar: "موقع شركة رسمي",
        },
        description: {
          en: "Designed and developed a multilingual corporate website for a consulting firm.",
          ar: "صممنا وطوّرنا موقعًا رسميًا متعدد اللغات لشركة استشارية.",
        },
        category: {
          en: "Web Development",
          ar: "تطوير الويب",
        },
        skills: ["Next.js", "Tailwind CSS", "i18n"],
      },
      {
        id: 6,
        imgSrc:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: {
          en: "Marketing Strategy Plan",
          ar: "خطة استراتيجية تسويقية",
        },
        description: {
          en: "Provided a full marketing strategy with analytics insights for a new product launch.",
          ar: "قدمنا خطة تسويقية متكاملة مع تحليلات لمنتج جديد عند الإطلاق.",
        },
        category: {
          en: "Marketing Strategy",
          ar: "استراتيجية تسويق",
        },
        skills: ["SEO", "Google Analytics", "Email Marketing"],
      },
      {
        id: 7,
        imgSrc:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "AI Chatbot Integration",
          ar: "تكامل روبوت الدردشة الذكي",
        },
        description: {
          en: "Implemented an AI-powered chatbot for customer service automation and 24/7 support.",
          ar: "تطبيق روبوت دردشة ذكي لأتمتة خدمة العملاء والدعم على مدار الساعة.",
        },
        category: {
          en: "AI & Machine Learning",
          ar: "الذكاء الاصطناعي",
        },
        skills: ["Python", "TensorFlow", "Natural Language Processing"],
      },
      {
        id: 8,
        imgSrc:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "Cloud Infrastructure Setup",
          ar: "إعداد البنية التحتية السحابية",
        },
        description: {
          en: "Migrated company infrastructure to cloud with automated scaling and monitoring systems.",
          ar: "نقل البنية التحتية للشركة إلى السحابة مع أنظمة تكييف ومراقبة تلقائية.",
        },
        category: {
          en: "Cloud Computing",
          ar: "الحوسبة السحابية",
        },
        skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      },
      {
        id: 9,
        imgSrc:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "Data Analytics Dashboard",
          ar: "لوحة تحليل البيانات",
        },
        description: {
          en: "Built an interactive dashboard for real-time business analytics and reporting insights.",
          ar: "بناء لوحة تحكم تفاعلية لتحليل الأعمال والتقارير في الوقت الفعلي.",
        },
        category: {
          en: "Data Science",
          ar: "علوم البيانات",
        },
        skills: ["Python", "D3.js", "PostgreSQL", "Power BI"],
      },
      {
        id: 10,
        imgSrc:
          "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "IoT Smart Home System",
          ar: "نظام المنزل الذكي",
        },
        description: {
          en: "Developed a comprehensive IoT system for home automation with mobile app control.",
          ar: "تطوير نظام إنترنت الأشياء شامل لأتمتة المنزل مع تحكم عبر التطبيق.",
        },
        category: {
          en: "IoT Development",
          ar: "تطوير إنترنت الأشياء",
        },
        skills: ["Arduino", "Raspberry Pi", "Flutter", "MQTT"],
      },
      {
        id: 11,
        imgSrc:
          "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "Cybersecurity Audit",
          ar: "تدقيق الأمن السيبراني",
        },
        description: {
          en: "Conducted comprehensive security assessment and implemented protection measures for enterprise.",
          ar: "إجراء تقييم أمني شامل وتنفيذ تدابير الحماية للمؤسسات.",
        },
        category: {
          en: "Cybersecurity",
          ar: "الأمن السيبراني",
        },
        skills: ["Penetration Testing", "Network Security", "Encryption"],
      },
      {
        id: 12,
        imgSrc:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: {
          en: "Blockchain Payment System",
          ar: "نظام دفع البلوك تشين",
        },
        description: {
          en: "Created a secure blockchain-based payment system with cryptocurrency integration.",
          ar: "إنشاء نظام دفع آمن قائم على البلوك تشين مع تكامل العملات المشفرة.",
        },
        category: {
          en: "Blockchain",
          ar: "البلوك تشين",
        },
        skills: ["Solidity", "Web3.js", "Ethereum", "Smart Contracts"],
      },
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;

    const matched = projects.filter(
      (project) => project.category.en === selectedCategory
    );

    const unmatched = projects.filter(
      (project) => project.category.en !== selectedCategory
    );

    return [...matched, ...unmatched];
  }, [projects, selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div
      dir={directionMap[local]}
      className="min-h-screen pt-24 bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Header */}
      <motion.div
        className="bg-white shadow-sm border-b  border-b-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-1/2 mx-auto px-6 py-8">
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {portfolioPage.projectsTitle}
                <span className="underline text-primary-red">
                  {portfolioPage.projectsTitleHighlight}
                </span>
              </h1>
              <p className="text-gray-600">
                {portfolioPage.projectsDescription}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="c-container py-4 mb-8">
        <div className=" py-12 flex gap-8">
          <SidebarFilter
            projects={projects}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
            setIsSidebarOpen={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-600">
                Showing {startIndex + 1}-
                {Math.min(
                  startIndex + projectsPerPage,
                  filteredProjects.length
                )}{" "}
                of {filteredProjects.length} projects
                {selectedCategory !== "All" && (
                  <span className="ml-2 px-3 py-1 bg-sky-300/50 text-primary-blue rounded-full text-sm">
                    {selectedCategory}
                  </span>
                )}
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
              layout
            >
              <AnimatePresence mode="sync">
                {currentProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    local={local}
                    index={index}
                    project={project}
                  />
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination */}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
        <ServicesSlider />
      </div>
    </div>
  );
}
