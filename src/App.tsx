/**
 * 메인 App 컴포넌트
 * HashRouter를 사용한 페이지 라우팅 구현 (GitHub Pages 호환)
 */
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { APISection } from "./components/APISection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { Toaster } from "./components/ui/sonner";

/**
 * 메인 App 컴포넌트
 * HashRouter를 사용하여 GitHub Pages에서 정상 작동
 */
export default function App() {
  return (
    // HashRouter: GitHub Pages에서 작동하는 라우터
    // URL에 #이 붙지만 (예: /#/about) 배포 환경에서 안정적
    <HashRouter>
      <Routes>
        {/* 홈페이지 경로: "/" */}
        <Route path="/" element={<HomePage />} />
        
        {/* 개인정보처리방침 경로: "/privacy" */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        
        {/* 이용약관 경로: "/terms" */}
        <Route path="/terms" element={<TermsOfServicePage />} />
        
        {/* 404 페이지 (선택사항) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
      {/* Toaster는 모든 페이지에서 공통으로 사용 */}
      <Toaster />
    </HashRouter>
  );
}

/**
 * 홈페이지 컴포넌트
 * 메인 랜딩 페이지의 모든 섹션 포함
 */
function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <APISection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

/**
 * 개인정보처리방침 페이지 컴포넌트
 */
function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

/**
 * 이용약관 페이지 컴포넌트
 */
function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
}

/**
 * 404 Not Found 페이지 컴포넌트
 * 잘못된 URL 접근 시 표시
 */
function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          페이지를 찾을 수 없습니다.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
}