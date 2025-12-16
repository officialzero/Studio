import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

/**
 * Footer 컴포넌트
 * - React Router의 Link 사용하여 내부 페이지 이동
 * - 부드러운 스크롤 애니메이션 지원
 * - 소셜 미디어 링크 및 서비스 목록 표시
 */

// 타입 정의
interface QuickLink {
  label: string;
  href: string;
}

interface SocialLink {
  id: string;
  icon: typeof Github;
  href: string;
  label: string;
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  // 빠른 링크 목록
  const quickLinks: QuickLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'API', href: '#api' },
    { label: 'Contact', href: '#contact' }
  ];

  // 제공 서비스 목록
  const services: string[] = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Utility Tools',
    'Playful Interaction',
    'Visual Experiments'
  ];

  // 소셜 미디어 링크
  const socialLinks: SocialLink[] = [
    {
      id: 'linkedin',
      icon: Linkedin,
      href: 'https://linkedin.com/company/inserview-studio',
      label: 'LinkedIn'
    },
    {
      id: 'twitter',
      icon: Twitter,
      href: 'https://twitter.com/inserview_studio',
      label: 'Twitter'
    },
    {
      id: 'github',
      icon: Github,
      href: 'https://github.com/inserview-studio',
      label: 'GitHub'
    },
    {
      id: 'email',
      icon: Mail,
      href: 'mailto:contact@inserview.studio',
      label: 'Email'
    }
  ];

  // 섹션으로 부드럽게 스크롤
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* 회사 정보 */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Inserview Studio</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              세상을 나만의 시선으로 해석하고, 그 인사이트를 웹, 모바일, UX로 구현합니다. 
              단순한 개발을 넘어, 사용자가 기억하는 경험을 만드는 크리에이티브 스튜디오입니다.
            </p>
            
            {/* 소셜 미디어 아이콘 */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <SocialIcon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 서비스 목록 */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <Separator className="my-8 bg-primary-foreground/20" />

        {/* 하단 법적 정보 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Inserview Studio. All rights reserved.
          </p>
          
          {/* 법적 문서 링크 - React Router Link 사용 */}
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <Link 
              to="/privacy" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookie-policy" 
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}