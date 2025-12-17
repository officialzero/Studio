import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Globe,
  Smartphone,
  Palette,
  Wrench,
  Sparkles,
  Eye,
  LucideIcon,
} from "lucide-react";

/**
 * Inserview Studio의 서비스를 소개하는 섹션 컴포넌트
 * - 6가지 핵심 서비스를 카드 형태로 표시
 * - Inserview Studio의 철학과 차별화 포인트 강조
 */

// 상수 정의
const SECTION_ID = "services";
const SECTION_TITLE = "Services";
const SECTION_DESCRIPTION =
  "Inserview Studio만의 관점으로 세상을 해석하고, 그 인사이트를 웹, 모바일, UX로 구현합니다.";

// 서비스 데이터 타입 정의
interface ServiceData {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServicesSection() {
  // 서비스 목록 데이터
  const serviceList: ServiceData[] = [
    {
      id: "web-development",
      icon: Globe,
      title: "Web Development",
      description:
        "React, Next.js, TypeScript 같은 최신 기술로 빠르고 안정적인 웹사이트와 애플리케이션을 구축합니다. 성능과 사용자 경험을 최우선으로 고려합니다.",
      features: [
        "반응형 디자인",
        "최신 프레임워크",
        "성능 최적화",
      ],
    },
    {
      id: "mobile-development",
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "iOS와 Android에서 탁월한 사용자 경험을 제공하는 네이티브 및 크로스 플랫폼 모바일 앱을 개발합니다.",
      features: [
        "네이티브 성능",
        "크로스 플랫폼 지원",
        "앱스토어 출시",
      ],
    },
    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      description:
        "아름다움과 실용성을 결합한 사용자 중심 디자인. 나만의 시선으로 해석한 UX를 통해 사용자에게 의미 있는 경험을 제공합니다.",
      features: [
        "사용자 리서치",
        "프로토타이핑",
        "디자인 시스템",
      ],
    },
    {
      id: "utility-tools",
      icon: Wrench,
      title: "Utility Tools",
      description:
        "일상의 불편함을 해결하는 실용적 도구. 실제 사용자의 pain point를 발견하고, 그것을 효율적으로 해결하는 솔루션을 만듭니다.",
      features: ["맞춤형 솔루션", "자동화", "통합 지원"],
    },
    {
      id: "playful-interaction",
      icon: Sparkles,
      title: "Playful Interaction",
      description:
        "단순한 UI를 넘어, 사용자가 기억하는 경험을 만듭니다. Insert View(나만의 시선 삽입)의 철학으로 인터랙션을 재해석하고, 즐거움을 더합니다.",
      features: [
        "마이크로 인터랙션",
        "애니메이션",
        "사용자 참여 유도",
      ],
    },
    {
      id: "visual-experiments",
      icon: Eye,
      title: "Visual Experiments",
      description:
        "세상을 인터뷰하고 그 인사이트를 시각적으로 실험합니다. Inserview Studio의 핵심 철학을 담은 서비스로, 창의적 경계를 넓히는 디자인을 탐구합니다.",
      features: [
        "크리에이티브 디자인",
        "혁신적 시도",
        "독창적 미학",
      ],
    },
  ];

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

        {/* 서비스 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 개별 서비스 카드 컴포넌트
 */
interface ServiceCardProps {
  service: ServiceData;
}

function ServiceCard({ service }: ServiceCardProps) {
  const ServiceIcon = service.icon;

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <ServiceIcon
          className="h-10 w-10 text-primary mb-2"
          aria-hidden="true"
        />
        <CardTitle className="text-lg">
          {service.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="mb-4">
          {service.description}
        </CardDescription>

        {/* 서비스 특징 목록 */}
        <ul className="space-y-1" role="list">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="text-sm text-muted-foreground flex items-center"
              role="listitem"
            >
              <div
                className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}