/**
 * 🎯 먼저 터미널에서 React Router 설치:
 * npm install react-router-dom
 *
 * 또는
 *
 * yarn add react-router-dom
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
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
 * React Router를 사용한 페이지 라우팅 구현
 */
export default function App() {
  return (
    // BrowserRouter: React Router의 최상위 컴포넌트
    // 브라우저 히스토리 API를 사용하여 라우팅 관리
    <BrowserRouter>
      <Routes>
        {/* 홈페이지 경로: "/" */}
        <Route path="/" element={<HomePage />} />

        {/* 개인정보처리방침 경로: "/privacy" */}
        <Route
          path="/privacy"
          element={<PrivacyPolicyPage />}
        />

        {/* 이용약관 경로: "/terms" */}
        <Route path="/terms" element={<TermsOfServicePage />} />

        {/* 404 페이지 (선택사항) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Toaster는 모든 페이지에서 공통으로 사용 */}
      <Toaster />
    </BrowserRouter>
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