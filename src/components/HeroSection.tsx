import * as React from "react";
// Button, Card 컴포넌트가 별도 파일로 분리되어 있을 때 경로를 찾지 못하는
// 컴파일 오류를 해결하기 위해, Button과 Card의 핵심 정의를 HeroSection 파일에 포함합니다.
import { ArrowRight, Code, Zap, Users } from "lucide-react";

// cn 유틸리티 함수 (Tailwind 클래스 조건부 병합용)
const cn = (...classes: (string | undefined | null | boolean)[]): string =>
  classes.filter(Boolean).join(" ");

// 임시 Button 컴포넌트 정의 (경로 오류 회피용)
// 실제 프로젝트에서는 별도 파일(./ui/button)에서 import 해야 합니다.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    // Tailwind 클래스 정의: Button 스타일링
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    
    const sizeClasses = {
      default: "h-10 py-2 px-4",
      lg: "h-11 px-8 rounded-md",
    };

    const variantClasses = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    };

    return (
      <button
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// 임시 Card 컴포넌트 정의 (HeroSection에 사용하도록 수정)
// Card 자체에 일관된 border-border 스타일이 포함되어 있습니다.
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // Card 컴포넌트에 border-border를 명시적으로 추가하여 테두리 색상 통일 (oklch(92.2% 0 0) 회색)
      "bg-card text-rd-foreground flex flex-col gap-6 rounded-xl border border-border shadow-md",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";


export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-background to-secondary/20 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 text-foreground max-w-4xl mx-auto">
            We Build
            <span className="text-primary block mt-2">
              Exceptional Websites
            </span>
            That Drive Results
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Insert your unique view into the world. We
            interpret, design, and craft digital experiences
            through our distinctive perspective.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
            >
              View Our Services
            </Button>
          </div>

          {/* Feature highlights: Card 컴포넌트 적용 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            {/* 💡 Card 컴포넌트를 사용하여 스타일 통일. 중복된 border 스타일 제거 완료. */}
            <Card className="p-6 items-center text-center">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
              <p className="text-muted-foreground text-center text-sm">
                각 프로젝트의 고유한 특성을 이해하고 맞춤형으로
                제작합니다.
              </p>
            </Card>

            <Card className="p-6 items-center text-center">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-center text-sm">
                빠른 속도와 최적화된 성능으로 사용자 경험을
                극대화합니다.
              </p>
            </Card>

            <Card className="p-6 items-center text-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Insight-Driven</h3>
              <p className="text-muted-foreground text-center text-sm">
                나의 시선으로 해석한 관점을 실제 경험으로
                구현합니다.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}