import { Card, CardContent } from './ui/card';
import { Eye, Sparkles, Layers, Target } from 'lucide-react';

export function AboutSection() {
  const values = [
    { icon: Eye, label: 'Insight View', description: '나만의 시선으로 세상을 해석' },
    { icon: Sparkles, label: 'Creative Input', description: '해석, 관찰, 감각을 더하다' },
    { icon: Layers, label: 'Unique Perspective', description: '단순한 리뷰를 넘어선 관점' },
    { icon: Target, label: 'Practical Output', description: 'UX, 기획, 콘텐츠로 구현' }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">
              About Inserview Studio
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl text-primary italic">
                "Insert my view."
              </p>
              <p className="text-xl text-primary italic">
                "A new view, inserted."
              </p>
              <p className="text-xl text-primary italic">
                "Interview the world, Insert the insight."
              </p>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">Inserview Studio</span>는 단순한 웹 개발 스튜디오가 아닙니다. 
              우리는 세상을 나만의 시선으로 해석하고, 그 관점을 UX, 기획, 콘텐츠로 풀어내는 
              크리에이티브 스튜디오입니다.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              <span className="font-semibold text-foreground">Insert + View</span>의 언어 유희처럼, 
              우리는 세상에 나만의 관점을 삽입합니다. 단순히 보이는 것을 기록하는 것이 아니라, 
              내 시선으로 바라본 세계를 해석하고 그 인사이트를 실제 경험으로 구현합니다.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.label} className="text-center p-4 rounded-lg bg-secondary/20">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-foreground mb-1">{value.label}</div>
                    <div className="text-xs text-muted-foreground">{value.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Our Identity</h3>
                <p className="text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">세상에 나만의 관점을 삽입하다.</span>
                </p>
                <p className="text-muted-foreground">
                  Inserview Studio는 나의 시선으로 세상을 바라보고, 그 해석을 통해 새로운 가치를 
                  창조하는 스튜디오입니다. 우리는 관찰자이자 창조자입니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Our Philosophy</h3>
                <p className="text-muted-foreground mb-3">
                  <span className="font-semibold text-foreground">내 시선으로 바라본 세계의 기록.</span>
                </p>
                <p className="text-muted-foreground">
                  단순한 리뷰가 아닌, 해석된 관점을 담습니다. 세상을 인터뷰하고 그 속에서 
                  발견한 인사이트를 삽입하는 것이 우리의 철학입니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Our Approach</h3>
                <p className="text-muted-foreground">
                  나의 해석, 관찰, 감각을 Creative Input으로 더합니다. 
                  그리고 그것을 UX 디자인, 기획, 콘텐츠로 구체화하여 
                  실제로 경험할 수 있는 세계관으로 만들어냅니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
