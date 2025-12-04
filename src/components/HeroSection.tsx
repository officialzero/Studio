import { Button } from "./ui/button";
import { ArrowRight, Code, Zap, Users } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-16"
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
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToServices}
              className="border border-border bg-background hover:bg-accent"
            >
              View Our Services
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Custom Development</h3>
              <p className="text-sm text-muted-foreground text-center">
                각 프로젝트의 고유한 특성을 이해하고 맞춤형으로 제작합니다.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground text-center">
                빠른 속도와 최적화된 성능으로 사용자 경험을 극대화합니다.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">Insight-Driven</h3>
              <p className="text-sm text-muted-foreground text-center">
                나의 시선으로 해석한 관점을 실제 경험으로 구현합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}