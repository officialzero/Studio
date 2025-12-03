import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "@/components/fi/ImageWithFallback";

/**
 * Inserview Studio의 포트폴리오 프로젝트를 보여주는 섹션 컴포넌트
 * - 프로젝트 카드 그리드 형태로 표시
 * - Live Demo 및 GitHub 링크 제공
 * - 카테고리별 필터링 가능 (향후 확장)
 */

// 상수 정의
const SECTION_ID = "portfolio";
const SECTION_TITLE = "Our Portfolio";
const SECTION_DESCRIPTION =
  "Take a look at some of our recent projects and see how we've helped businesses achieve their digital goals.";

// 프로젝트 데이터 타입 정의
interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function TermsOfService() {
  // 프로젝트 목록 데이터
  const projectList: ProjectData[] = [
    {
      id: "job-clipper",
      title: "Job Clipper",
      description:
        "채용 공고를 Notion으로 한 번에 저장하는 크롬 확장 프로그램. 잡코리아, 사람인, 원티드, 인크루트 등 주요 구직 사이트를 지원합니다.",
      image:
        "https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJvbWUlMjBleHRlbnNpb24lMjBqb2IlMjBzZWFyY2h8ZW58MXx8fHwxNzY0MzE5MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: [
        "Chrome Extension",
        "TypeScript",
        "Notion API",
        "OAuth 2.0",
      ],
      category: "Utility Tools",
      demoUrl:
        "https://chrome.google.com/webstore/detail/job-clipper",
      githubUrl:
        "https://github.com/inserview-studio/job-clipper",
    },
    {
      id: "saas-dashboard",
      title: "SaaS Dashboard",
      description:
        "A comprehensive analytics dashboard for a B2B SaaS platform with real-time data visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Chart.js",
      ],
      category: "Dashboard",
      demoUrl: "https://demo.inserview.studio/saas-dashboard",
      githubUrl:
        "https://github.com/inserview-studio/saas-dashboard",
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      description:
        "Modern restaurant website with online reservation system and menu management.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
      technologies: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "Stripe",
      ],
      category: "Business",
      demoUrl: "https://demo.inserview.studio/restaurant",
      githubUrl:
        "https://github.com/inserview-studio/restaurant-website",
    },
    {
      id: "healthcare-portal",
      title: "Healthcare Portal",
      description:
        "Patient management system with appointment scheduling and medical records.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      technologies: [
        "Vue.js",
        "Laravel",
        "MySQL",
        "HIPAA Compliant",
      ],
      category: "Healthcare",
      demoUrl: "https://demo.inserview.studio/healthcare",
      githubUrl:
        "https://github.com/inserview-studio/healthcare-portal",
    },
    {
      id: "real-estate-platform",
      title: "Real Estate Platform",
      description:
        "Property listing website with advanced search, virtual tours, and agent management.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Mapbox"],
      category: "Real Estate",
      demoUrl: "https://demo.inserview.studio/real-estate",
      githubUrl:
        "https://github.com/inserview-studio/real-estate-platform",
    },
    {
      id: "educational-platform",
      title: "Educational Platform",
      description:
        "Online learning management system with course creation and student progress tracking.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Video.js",
      ],
      category: "Education",
      demoUrl: "https://demo.inserview.studio/education",
      githubUrl:
        "https://github.com/inserview-studio/educational-platform",
    },
  ];

  // 외부 링크 열기 (새 탭)
  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id={SECTION_ID} className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            {SECTION_TITLE}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {SECTION_DESCRIPTION}
          </p>
        </div>

        {/* 프로젝트 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDemo={openExternalLink}
              onOpenGithub={openExternalLink}
            />
          ))}
        </div>

        {/* View All Projects 버튼 */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

/**
 * 개별 프로젝트 카드 컴포넌트
 */
interface ProjectCardProps {
  project: ProjectData;
  onOpenDemo: (url: string) => void;
  onOpenGithub: (url: string) => void;
}

function ProjectCard({
  project,
  onOpenDemo,
  onOpenGithub,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* 프로젝트 이미지 */}
      <div className="aspect-video overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={`${project.title} 프로젝트 스크린샷`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* 프로젝트 정보 */}
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{project.category}</Badge>
        </div>
        <CardTitle className="text-lg">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        {/* 기술 스택 태그 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* 액션 버튼 */}
        <div className="flex gap-2">
          {project.demoUrl ? (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onOpenDemo(project.demoUrl!)}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              disabled
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Coming Soon
            </Button>
          )}

          {project.githubUrl ? (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => onOpenGithub(project.githubUrl!)}
            >
              <Github className="h-4 w-4 mr-1" />
              View Code
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              disabled
            >
              <Github className="h-4 w-4 mr-1" />
              Private
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
