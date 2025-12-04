import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, Cpu, MessageSquare } from "lucide-react";

/**
 * Inserview Studio의 서비스를 보여주는 섹션 컴포넌트
 */

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  element?.scrollIntoView({ behavior: "smooth" });
};

export function ServicesSection() {
  const services = [
    { 
      title: "웹사이트 기획 및 디자인", 
      icon: Briefcase, 
      description: "사용자 경험(UX)을 기반으로, 결과물을 도출하는 전략적 기획부터 매력적인 디자인까지 제공합니다." 
    },
    { 
      title: "프론트엔드 개발 (React)", 
      icon: Code, 
      description: "최신 React/Next.js 기술을 활용하여 빠르고 확장 가능한 고품질의 웹 애플리케이션을 구축합니다." 
    },
    { 
      title: "API 연동 및 백엔드 지원", 
      icon: Cpu, 
      description: "복잡한 외부 API 통합 및 기본적인 서버리스 백엔드 로직을 지원하여 완전한 솔루션을 제공합니다." 
    },
    { 
      title: "콘텐츠 및 브랜딩", 
      icon: MessageSquare, 
      description: "'Inserview'만의 독특한 관점을 담은 브랜딩 컨셉과 매력적인 콘텐츠 제작을 도와드립니다." 
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-primary mb-4">Our Services</h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
          우리는 고객님의 비전에 '나만의 관점(Inserview)'을 삽입하여, 독창적이면서도 실용적인 디지털 결과물을 만듭니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Button onClick={() => scrollToSection('#contact')}>
            지금 프로젝트 문의하기
          </Button>
        </div>
      </div>
    </section>
  );
}
