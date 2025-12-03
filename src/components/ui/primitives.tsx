import React, { useState, forwardRef, createContext, useContext, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, Code, Zap, Users, Briefcase, Cpu, MessageSquare, Mail, Phone, MapPin, Heart, TrendingUp, Eye, Compass, Shield, FileText, Github, Linkedin } from 'lucide-react';

// =================================================================
// 1. UI Primitives & Toast System (src/components/ui/primitives.tsx 내용 통합)
// =================================================================

// --- 1.1 Toast Context and Provider ---

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastContextType {
  fireToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  fireToastError: (message: string) => void;
  fireToastSuccess: (message: string) => void;
}

// Context를 정의하고, 충돌을 피하기 위해 'fire' 접두사를 사용합니다.
const ToastContext = createContext<ToastContextType | undefined>(undefined);

const TOAST_DURATION = 3000;

// Context hook. 내부에서만 사용됩니다.
const useToastContext = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    // 환경 제약으로 인해 Context Provider 외부에서 호출될 경우의 Fallback
    return {
        fireToast: (m: string, t: string) => console.log(`[TOAST FALLBACK] ${t}: ${m}`),
        fireToastError: (m: string) => console.log(`[TOAST FALLBACK] ERROR: ${m}`),
        fireToastSuccess: (m: string) => console.log(`[TOAST FALLBACK] SUCCESS: ${m}`),
    };
  }
  return context;
};

// Toast 렌더링 컴포넌트
const ToasterComponent: React.FC<{ toasts: Toast[], removeToast: (id: string) => void }> = ({ toasts, removeToast }) => {
    const baseClasses = "fixed bottom-4 right-4 z-[9999] max-w-sm w-full p-4 rounded-xl shadow-2xl transition-all duration-300 ease-in-out transform";
    
    const getToastColor = (type: Toast['type']) => {
        switch (type) {
            case 'success':
                return 'bg-green-600 border border-green-700 text-white';
            case 'error':
                return 'bg-red-600 border border-red-700 text-white';
            case 'info':
            default:
                return 'bg-blue-600 border border-blue-700 text-white';
        }
    };

    return (
        <div className="fixed bottom-0 right-0 p-4 space-y-2 z-[9999]">
            {toasts.map((t, index) => (
                <div 
                    key={t.id} 
                    className={`${baseClasses} ${getToastColor(t.type)}`}
                    style={{
                        bottom: `${4 + index * 5}rem`,
                        opacity: 1,
                        visibility: 'visible'
                    }}
                >
                    <div className="flex justify-between items-center">
                        <p className="font-medium text-sm">{t.message}</p>
                        <button onClick={() => removeToast(t.id)} className="ml-4 text-white/80 hover:text-white transition-colors">
                            &times;
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Toast Provider
function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(currentToasts => currentToasts.filter(t => t.id !== id));
  }, []);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = crypto.randomUUID();
    const newToast: Toast = { id, message, type };
    setToasts(currentToasts => [...currentToasts, newToast]);

    setTimeout(() => removeToast(id), TOAST_DURATION);
  };

  const fireToastSuccess = (message: string) => addToast(message, 'success');
  const fireToastError = (message: string) => addToast(message, 'error');

  const contextValue: ToastContextType = {
    fireToast: addToast,
    fireToastError: fireToastError,
    fireToastSuccess: fireToastSuccess,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToasterComponent toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

// !!! 이름 충돌을 해결하는 핵심 수정:
// 컴포넌트 외부에서 사용할 'toast' 유틸리티 객체입니다. 
// 이 객체는 모든 컴포넌트에서 import 없이 접근할 수 있도록 App.tsx 최상위에 정의하며, 
// 내부적으로 useToastContext를 호출합니다.

const toast = {
    success: (message: string) => {
        // useToastContext() 호출을 컴포넌트 외부에서 직접 할 수 없으므로,
        // 이 유틸리티 객체를 사용하는 모든 컴포넌트가 ToastProvider 내부에 있어야 합니다.
        // 현재 App.tsx 구조에서는 이 방식이 작동하도록 설계되어 있습니다.
        const context = useToastContext();
        context.fireToastSuccess(message);
    },
    error: (message: string) => {
        const context = useToastContext();
        context.fireToastError(message);
    },
    info: (message: string) => {
        const context = useToastContext();
        context.fireToast(message, 'info');
    }
};


// --- 1.2 Primitive Components (Button, Card, Input, Select, etc.) ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background shadow-md";

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground shadow-none",
      link: "text-primary underline-offset-4 hover:underline shadow-none",
    }[variant];

    const sizeClasses = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3",
      lg: "h-11 px-8 text-lg",
      icon: "h-10 w-10",
    }[size];

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-xl border bg-card text-card-foreground shadow-lg ${className}`}
      {...props}
    />
  )
);
Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardTitle = forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className = '', ...props }, ref) => (
    <h3
      ref={ref}
      className={`font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', ...props }, ref) => (
    <p
      ref={ref}
      className={`text-sm text-muted-foreground ${className}`}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
  )
);
CardContent.displayName = 'CardContent';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <textarea
        className={`flex min-h-[80px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

// --- Select Component ---

interface SelectProps {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ children, value, onValueChange, className = '' }) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onValueChange(event.target.value);
    };

    return (
        <div className={`relative ${className}`}>
            <select
                value={value}
                onChange={handleSelectChange}
                className="appearance-none block h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-8"
            >
                {children}
            </select>
            <svg 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
            >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </div>
    );
};
Select.displayName = 'Select';

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

const SelectItem: React.FC<SelectItemProps> = ({ value, children, className = '' }) => {
    return (
        <option value={value} className={className}>
            {children}
        </option>
    );
};
SelectItem.displayName = 'SelectItem';


// =================================================================
// 2. Navigation Component 
// =================================================================

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 라우터의 Link 컴포넌트 사용
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'API', href: '#api' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (href: string) => {
    // 현재 경로가 홈페이지('/')가 아닌 경우, 홈페이지로 이동 후 스크롤
    if (window.location.pathname !== '/') {
        window.location.href = `/#${href.substring(1)}`;
        return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // 모바일 메뉴 닫기
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Title - 항상 홈으로 Link */}
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <h2 className="text-primary text-xl font-bold transition-colors hover:text-primary/80">
                Inserview <span className="text-[0.65em] font-normal text-muted-foreground">Studio</span>
              </h2>
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                item.path ? (
                    <Link
                        key={item.label}
                        to={item.path}
                        className="text-foreground/80 hover:text-primary px-3 py-2 transition-colors font-medium text-sm rounded-lg"
                    >
                        {item.label}
                    </Link>
                ) : (
                    <button
                        key={item.label}
                        onClick={() => handleScrollToSection(item.href!)}
                        className="text-foreground/80 hover:text-primary px-3 py-2 transition-colors font-medium text-sm rounded-lg"
                    >
                        {item.label}
                    </button>
                )
              ))}
            </div>
          </div>

          {/* Desktop Action Button */}
          <div className="hidden md:block">
            <Button onClick={() => handleScrollToSection('#contact')}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border shadow-lg">
              {navItems.map((item) => (
                item.path ? (
                    <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-foreground hover:text-primary block px-3 py-2 w-full text-left transition-colors text-base rounded-lg"
                    >
                        {item.label}
                    </Link>
                ) : (
                    <button
                        key={item.label}
                        onClick={() => handleScrollToSection(item.href!)}
                        className="text-foreground hover:text-primary block px-3 py-2 w-full text-left transition-colors text-base rounded-lg"
                    >
                        {item.label}
                    </button>
                )
              ))}
              <Button
                onClick={() => handleScrollToSection('#contact')}
                className="w-full mt-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}


// =================================================================
// 3. Section Components
// =================================================================

function scrollToSection(href: string) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
};

// --- Hero Section ---
function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-foreground max-w-4xl mx-auto">
            We Build
            <span className="text-primary block mt-2">Exceptional Websites</span>
            That Drive Results
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Insert your unique view into the world. We interpret, design, and craft digital experiences through our distinctive perspective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button size="lg" onClick={() => scrollToSection('#contact')} className="group shadow-lg hover:shadow-xl transition-all duration-300">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('#services')} className="border-2 border-primary/50 text-foreground hover:bg-primary/10 transition-colors">
              View Our Services
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border shadow-md transition-all hover:shadow-xl hover:translate-y-[-2px]">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Custom Development</h3>
              <p className="text-muted-foreground text-center text-sm">
                각 프로젝트의 고유한 특성을 이해하고 맞춤형으로 제작합니다. 불필요한 기능 없이 핵심 가치에 집중합니다.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border shadow-md transition-all hover:shadow-xl hover:translate-y-[-2px]">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground text-center text-sm">
                빠른 로딩 속도와 최적화된 성능으로 사용자 경험을 극대화합니다. SEO에도 유리합니다.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border shadow-md transition-all hover:shadow-xl hover:translate-y-[-2px]">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">Insight-Driven</h3>
              <p className="text-muted-foreground text-center text-sm">
                '나의 시선'으로 해석한 관점을 실제 사용자 경험(UX)과 서비스로 구현합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Services Section ---
function ServicesSection() {
  const services = [
    { title: "웹사이트 기획 및 디자인", icon: Briefcase, description: "사용자 경험(UX)을 기반으로, 결과물을 도출하는 전략적 기획부터 매력적인 디자인까지 제공합니다." },
    { title: "프론트엔드 개발 (React)", icon: Code, description: "최신 React/Next.js 기술을 활용하여 빠르고 확장 가능한 고품질의 웹 애플리케이션을 구축합니다." },
    { title: "API 연동 및 백엔드 지원", icon: Cpu, description: "복잡한 외부 API 통합 및 기본적인 서버리스 백엔드 로직을 지원하여 완전한 솔루션을 제공합니다." },
    { title: "콘텐츠 및 브랜딩", icon: MessageSquare, description: "'Inserview'만의 독특한 관점을 담은 브랜딩 컨셉과 매력적인 콘텐츠 제작을 도와드립니다." },
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

// --- About Section ---
function AboutSection() {
    const values = [
        { icon: Heart, label: 'Warmth & Consideration', description: '타인의 편안함을 위한 따뜻함' },
        { icon: Eye, label: 'Meticulous Observation', description: '숨겨진 문제와 디테일 포착' },
        { icon: TrendingUp, label: 'Active Growth', description: '멈추지 않는 능동적인 배움' },
        { icon: Compass, label: 'Unique Perspective', description: '나만의 시선이 삽입된 결과물' }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-6 text-primary">
                            공인서: 관찰자로 기록하고, 창조자로 구현하다.
                        </h2>
                        <div className="space-y-4 mb-8">
                            <p className="text-xl font-medium italic text-muted-foreground">
                                "Insert my view. 고객의 편안함에서 찾는 진정한 성공."
                            </p>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            저는 <span className="font-bold text-foreground">바리스타, 학원 데스크, 미군 부대 행정</span> 등 다양한 대면 직무 경험을 통해
                            <span className="font-bold text-primary"> '따뜻한 공감 능력'</span>과 <span className="font-bold text-primary">'섬세한 관찰력'</span>을 체화했습니다.
                            단순한 서비스 제공을 넘어, 고객이 필요로 하는 미세한 불편함을 사전에 포착하고 해결하는 능력이 강점입니다.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            이러한 관찰력은 <span className="font-bold text-foreground">UX/UI 디자인과 웹 개발</span>에 대한 열정으로 이어져,
                            **사용자 중심의 문제 해결 능력**을 디지털 영역에 '삽입(Insert)'하고 있습니다.
                            결과뿐 아니라 과정에서의 <span className="font-bold text-primary">성실함과 책임감</span>을 중시하며, 끊임없이 성장하는 개발자가 되겠습니다.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {values.map((value) => {
                                const Icon = value.icon;
                                return (
                                    <div 
                                        key={value.label} 
                                        className="text-center p-4 rounded-xl bg-secondary/30 dark:bg-secondary/20 border border-border transition-all hover:shadow-lg hover:border-primary/50"
                                    >
                                        <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                                        <div className="font-extrabold text-foreground mb-1 text-base">{value.label}</div>
                                        <div className="text-xs text-muted-foreground">{value.description}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Core Philosophy & Tools</h3>

                        <Card>
                            <CardContent className="p-6">
                                <h4 className="text-lg font-semibold mb-2 text-primary">Work Philosophy</h4>
                                <p className="text-muted-foreground mb-3 font-medium">
                                    <span className="font-extrabold text-foreground">결과보다 과정을, 성실함과 책임감을 최우선으로.</span>
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    맡은 일에 대한 책임감 있는 태도와 과정의 성실함이 결국 최고의 결과물을 만든다고 믿습니다.
                                    이는 팀워크와 협업의 기본 토대입니다.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h4 className="text-lg font-semibold mb-2 text-primary">Technical & Design Toolkit</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['React', 'Figma', 'Photoshop', 'Premiere Pro', 'Sketch', 'Google Workspace'].map(tool => (
                                        <span key={tool} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-muted-foreground text-sm mt-3">
                                    UI/UX 디자인 도구부터 웹 프론트엔드 개발, 영상 편집까지 디지털 콘텐츠 제작 전반에 대한 이해를 갖추고 있습니다.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- Portfolio Section ---
function PortfolioSection() {
    return (
        <section id="portfolio" className="py-20 bg-background min-h-[50vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-primary mb-4">Selected Works</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
                    단순한 코드 구현을 넘어, 독창적인 기획과 관찰력이 돋보이는 프로젝트들을 소개합니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Card key={index} className="p-0 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                            <img 
                                src={`https://placehold.co/600x400/0f172a/ffffff?text=Project+${index + 1}`} 
                                alt={`Project ${index + 1}`} 
                                className="w-full h-48 object-cover"
                            />
                            <CardContent className="text-left">
                                <h3 className="text-xl font-bold mb-1 text-foreground">프로젝트 타이틀 {index + 1}</h3>
                                <p className="text-sm text-muted-foreground mb-3">#UX디자인 #React #기획</p>
                                <Button 
                                    variant="link" 
                                    onClick={() => console.log(`프로젝트 ${index + 1} 상세 보기`)} 
                                    className="p-0 h-auto"
                                >
                                    자세히 보기 <ArrowRight className="ml-1 h-4 w-4"/>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- API Section ---
function APISection() {
    return (
        <section id="api" className="py-20 bg-gray-50 dark:bg-gray-900 min-h-[50vh]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-extrabold text-primary mb-4">API Integration Experience</h2>
                <p className="text-lg text-muted-foreground mb-8">
                    다양한 외부 시스템과의 연동은 웹 서비스의 핵심입니다. 우리는 복잡한 API를 안정적으로 통합합니다.
                </p>

                <div className="space-y-6 text-left">
                    <Card className="p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">Google Gemini API</h3>
                        <p className="text-muted-foreground mb-4">
                            대규모 언어 모델(LLM)을 활용한 텍스트 생성, 이미지 이해, TTS 기능을 웹 앱에 통합하여 혁신적인 사용자 경험을 제공합니다.
                        </p>
                    </Card>
                    <Card className="p-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">Third-Party Services</h3>
                        <p className="text-muted-foreground mb-4">
                            결제 시스템, 지도 서비스(Google Maps), 소셜 로그인, EmailJS와 같은 다양한 외부 서비스를 안정적으로 연동합니다.
                        </p>
                    </Card>
                </div>

                <div className="mt-12">
                    <Button onClick={() => scrollToSection('#contact')} variant="secondary">
                        API 연동 프로젝트 문의
                    </Button>
                </div>
            </div>
        </section>
    );
}


// --- Contact Section ---
// NOTE: EmailJS 모의(Mock) 구현 포함
const emailjs = {
    send: (_serviceId: string, _templateId: string, templateParams: any, _publicKey: string) => {
        console.log(`[EmailJS MOCK] Email sending simulated.`);
        console.log(`[EmailJS MOCK] Params: `, templateParams);
        return new Promise(resolve => setTimeout(resolve, 1000)); // 1초 지연 시뮬레이션
    }
};
const EMAILJS_SERVICE_ID = 'service_mock';
const EMAILJS_TEMPLATE_ID = 'template_mock';
const EMAILJS_PUBLIC_KEY = 'public_key_mock';
const RECIPIENT_EMAIL = 'gonginseodev@portfolio.com';


function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
        toast.error('필수 정보를 모두 입력해주세요 (이름, 이메일, 내용).');
        return;
    }
    
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.error('EmailJS configuration is missing. Using Mock.');
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'N/A',
        service: formData.service || '기타',
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success('소중한 의견 감사합니다! 이메일이 성공적으로 전송되었습니다. (Mock)');
      
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요. (Mock)');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4 tracking-tight">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            저와의 협업, 프로젝트 문의, 또는 간단한 피드백을 남겨주세요. 모든 메시지에 귀 기울이고 답변해 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Contact Info</h3>
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Mail className="h-6 w-6" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">{RECIPIENT_EMAIL}</p>
                <p className="text-sm text-muted-foreground mt-1">문의 사항을 남겨주세요.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Phone className="h-6 w-6" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">+82 10-XXXX-XXXX (문의용)</p>
                <p className="text-sm text-muted-foreground mt-1">긴급 연락 시 사용 가능합니다.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <MapPin className="h-6 w-6" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-medium">Seoul, Republic of Korea</p>
                <p className="text-sm text-muted-foreground mt-1">온라인 미팅 선호.</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 lg:p-8 border-t-4 border-primary">
              <CardHeader>
                <CardTitle className="text-3xl">프로젝트 문의</CardTitle>
                <CardDescription>
                  아래 양식을 작성하여 저에게 직접 메시지를 보내주세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-foreground">성함 *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="공인서"
                        required
                        className="bg-secondary/20"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-foreground">이메일 *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="bg-secondary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-foreground">연락처 (선택)</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="010-XXXX-XXXX"
                        className="bg-secondary/20"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-foreground">문의 유형 (선택)</label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectItem value="">문의 유형 선택</SelectItem>
                        <SelectItem value="job-offer">채용 및 인터뷰 제안</SelectItem>
                        <SelectItem value="collaboration">프로젝트 협업</SelectItem>
                        <SelectItem value="feedback">피드백 및 의견</SelectItem>
                        <SelectItem value="etc">기타</SelectItem>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-foreground">상세 내용 *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="구체적인 내용과 함께 문의해주세요."
                      rows={6}
                      required
                      className="bg-secondary/20"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-3 flex items-center justify-center transition-all duration-300 transform hover:scale-[1.01] shadow-md hover:shadow-lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                        <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                            전송 중...
                        </span>
                    ) : (
                        <span className="flex items-center">
                            메시지 보내기
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
function Footer() {
    return (
        <footer className="bg-secondary/30 border-t border-border mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                
                {/* Top Section: Quick Links and Social */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-border/50 pb-8 mb-8">
                    
                    {/* Brand and Mission */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-3">Inserview Studio</h3>
                        <p className="text-sm text-muted-foreground">
                            세상에 나만의 관점을 삽입합니다. 독창적인 시선으로 새로운 디지털 경험을 창조합니다.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            {['#home', '#services', '#about', '#portfolio', '#contact'].map(href => (
                                <li key={href}>
                                    <button 
                                        onClick={() => scrollToSection(href)} 
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {href.replace('#', '').charAt(0).toUpperCase() + href.slice(2)}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                                    <Shield className="h-4 w-4 inline mr-1" /> 개인정보 처리방침
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                                    <FileText className="h-4 w-4 inline mr-1" /> 이용 약관
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Services Summary */}
                    <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Web Design & UX Planning</li>
                            <li>React/Front-end Development</li>
                            <li>API Integration</li>
                            <li>Branding & Content</li>
                        </ul>
                    </div>

                    {/* Contact CTA */}
                    <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Get in Touch</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            프로젝트를 논의하거나 커피챗을 요청해 주세요.
                        </p>
                        <Button onClick={() => scrollToSection('#contact')} className="w-full">
                            Contact Now
                        </Button>
                    </div>
                </div>

                {/* Bottom Section: Copyright and Legal */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Inserview Studio. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="mailto:gonginseodev@portfolio.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                        </a>
                        <button onClick={() => console.log('GitHub Link Clicked')} aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-5 w-5" />
                        </button>
                        <button onClick={() => console.log('LinkedIn Link Clicked')} aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </button>
                        <button onClick={() => scrollToSection('#contact')} aria-label="Kakao Talk" className="text-muted-foreground hover:text-primary transition-colors">
                            <MessageSquare className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}


// =================================================================
// 4. Policy Pages (New Components)
// =================================================================

function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-primary mb-6">개인정보 처리방침</h1>
            <p className="text-muted-foreground mb-8">
                본 웹사이트(Inserview Studio)는 사용자의 개인정보를 소중하게 생각하며,
                관련 법규를 준수하여 다음과 같이 개인정보 처리방침을 수립하였습니다.
            </p>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">1. 수집하는 개인정보 항목 및 목적</h2>
                <Card className="p-4">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>**수집 항목:** 이름, 이메일, 전화번호 (연락처 문의 시)</li>
                        <li>**수집 목적:** 문의 응대, 프로젝트 상담, 서비스 관련 정보 제공</li>
                    </ul>
                </Card>
                
                <h2 className="text-2xl font-bold text-foreground">2. 개인정보의 보유 및 이용 기간</h2>
                <p className="text-muted-foreground">
                    이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다.
                    단, 관계 법령의 규정에 의하여 보존할 필요가 있는 경우 해당 법령에서 정한 기간 동안 보존합니다.
                </p>

                <h2 className="text-2xl font-bold text-foreground">3. 개인정보 파기 절차 및 방법</h2>
                <p className="text-muted-foreground">
                    개인정보는 목적 달성 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 관계 법령에 따라 일정 기간 보존된 후 파기됩니다.
                    전자적 파일 형태는 복구 및 재생이 불가능한 방법으로 파기합니다.
                </p>
                
                <h2 className="text-2xl font-bold text-foreground">4. 개인정보 보호 책임자</h2>
                <p className="text-muted-foreground">
                    성명: 공인서 (Inserview Studio 대표)<br/>
                    연락처: {RECIPIENT_EMAIL}
                </p>
            </div>
        </div>
    );
}

function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-primary mb-6">이용 약관</h1>
            <p className="text-muted-foreground mb-8">
                본 약관은 Inserview Studio가 제공하는 모든 웹 서비스 및 콘텐츠 이용에 관한 사항을 규정합니다.
            </p>

            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">제 1조 (목적)</h2>
                <p className="text-muted-foreground">
                    이 약관은 Inserview Studio가 제공하는 웹사이트(이하 '서비스')의 이용 조건 및 절차,
                    기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>

                <h2 className="text-2xl font-bold text-foreground">제 2조 (서비스의 제공)</h2>
                <p className="text-muted-foreground">
                    서비스는 프로젝트 포트폴리오 열람, 문의 접수, 회사 정보 제공 등으로 구성됩니다.
                    서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.
                </p>

                <h2 className="text-2xl font-bold text-foreground">제 3조 (이용자의 의무)</h2>
                <p className="text-muted-foreground">
                    이용자는 다음 행위를 하여서는 안 됩니다:
                </p>
                <Card className="p-4">
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>다른 이용자의 정보를 도용하는 행위</li>
                        <li>서비스의 안정적인 운영을 방해할 목적으로 다량의 정보를 전송하거나 광고성 정보를 전송하는 행위</li>
                        <li>정보통신설비의 오작동을 유발하거나 정보를 파괴하는 행위</li>
                    </ul>
                </Card>
                
                <h2 className="text-2xl font-bold text-foreground">제 4조 (책임 제한)</h2>
                <p className="text-muted-foreground">
                    회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                </p>
            </div>
        </div>
    );
}


// =================================================================
// 5. Page Components (User's Routing Structure)
// =================================================================

function HomePage() {
  return (
    <div className="min-h-screen">
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

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
      <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8">
        페이지를 찾을 수 없습니다.
      </p>
      <Link 
        to="/" 
        className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}


// =================================================================
// 6. Main App Component
// =================================================================

const themeScript = `
  // 초기 테마 설정 (시스템 선호도에 따라 Dark/Light 모드 설정)
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
`;

/**
 * 메인 App 컴포넌트
 * React Router를 사용한 페이지 라우팅 구현
 */
export default function App() {
  return (
    <>
      {/* Script for initial theme setting */}
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      
      {/* ToastProvider가 Toast Context를 제공합니다. */}
      <ToastProvider>
        <div className="min-h-screen antialiased bg-background text-foreground font-inter">
          <BrowserRouter>
            {/* Navigation은 모든 페이지에서 공통으로 사용됩니다. */}
            <Navigation /> 
            
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ToastProvider>
    </>
  );
}