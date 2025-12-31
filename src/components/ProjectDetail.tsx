import { ArrowLeft, ExternalLink, Github, Mail} from 'lucide-react';
import { Button } from './ui/button';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function ProjectDetail() {
  const { projectId, tab } = useParams<{ projectId: string; tab?: 'overview' | 'support' }>();
  const currentTab = tab || 'overview';
  
  const handleBack = () => {
    window.history.back();
  };

  // 프로젝트 데이터 (실제로는 API에서 가져올 수 있음)
  const projectData = getProjectData(projectId);

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <Link to="/#portfolio" className="text-primary hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl mb-4">{projectData.title}</h1>
          
          {/* 탭 네비게이션 */}
          <div className="flex gap-4">
            <Link 
              to={`/project/${projectId}`}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentTab === 'overview'
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Overview
            </Link>
            <Link 
              to={`/project/${projectId}/support`}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentTab === 'support'
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Support
            </Link>
          </div>
        </div>
        
        {currentTab === 'overview' ? (
          <ProjectOverview project={projectData} />
        ) : (
          <ProjectSupport project={projectData} />
        )}
      </div>
    </div>
  );
}

// 프로젝트 Overview 컴포넌트
function ProjectOverview({ project }: { project: ProjectData }) {
  return (
    <div className="space-y-8">
      {/* Hero 이미지 */}
      <div className="aspect-video rounded-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 프로젝트 메타 정보 */}
      <div className="flex flex-wrap gap-4">
        <Badge variant="secondary" className="text-base px-4 py-2">
          {project.category}
        </Badge>
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-sm px-3 py-1">
            {tech}
          </Badge>
        ))}
      </div>

      {/* 액션 버튼 */}
      <div className="flex gap-4">
        {project.demoUrl && (
          <Button 
            size="lg" 
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Live Demo
          </Button>
        )}
        {project.githubUrl && (
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View Code
          </Button>
        )}
      </div>

      {/* 프로젝트 설명 */}
      <Card>
        <CardHeader>
          <CardTitle>About This Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </CardContent>
      </Card>

      {/* 주요 기능 */}
      <Card>
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {project.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            )) || <li>Coming soon...</li>}
          </ul>
        </CardContent>
      </Card>

      {/* 기술 스택 상세 */}
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.technologies.map((tech) => (
              <div 
                key={tech}
                className="p-3 bg-secondary rounded-lg text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// 프로젝트 Support 컴포넌트
function ProjectSupport({ project }: { project: ProjectData }) {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl mb-4">Get Support</h2>
        <p className="text-muted-foreground mb-6">
          Need help with {project.title}? We're here to assist you!
        </p>
      </section>

      {/* Support 옵션 카드 */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub Issues */}
        {project.githubUrl && (
          <Card className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => window.open(`${project.githubUrl}/issues`, '_blank')}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Report bugs, request features, or ask technical questions on our GitHub repository.
              </p>
              <Button variant="outline" className="w-full">
                Open GitHub Issues
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Email Support */}
        <Card className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => window.location.href = 'mailto:rhddlstj11@gmail.com'}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Send us an email for general inquiries or support requests.
            </p>
            <Button variant="outline" className="w-full">
              Email Us
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {project.faqs?.map((faq, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          )) || (
            <p className="text-muted-foreground">
              FAQ content coming soon...
            </p>
          )}
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>rhddlstj11@gmail.com</span>
          </div>
          {project.githubUrl && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Github className="h-4 w-4" />
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {project.githubUrl}
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// 프로젝트 데이터 타입
interface ProjectData {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  features?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

// 프로젝트 데이터 가져오기 함수
function getProjectData(projectId?: string): ProjectData | null {
  const projects: Record<string, ProjectData> = {
    'job-clipper': {
      id: 'job-clipper',
      title: 'Job Clipper',
      description: '채용 공고를 Notion으로 한 번에 저장하는 크롬 확장 프로그램',
      fullDescription: `Job Clipper는 채용 공고를 효율적으로 관리할 수 있는 Chrome 확장 프로그램입니다. 
      
잡코리아, 사람인, 원티드, 인크루트 등 주요 한국 채용 사이트를 지원하며, 클릭 한 번으로 채용 공고의 주요 정보를 자동으로 추출하여 개인 Notion 데이터베이스에 저장합니다.

개인정보는 사용자의 브라우저에만 암호화되어 저장되며, 개발자 서버로 전송되지 않습니다.`,
      image: 'https://images.unsplash.com/photo-1675557009483-e6cf3867976b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      technologies: ['Chrome Extension', 'TypeScript', 'Notion API', 'Chrome Storage API'],
      category: 'Utility Tools',
      demoUrl: 'https://chrome.google.com/webstore/detail/job-clipper',
      githubUrl: 'https://github.com/officialzero/JobNotion-Clipper',
      features: [
        '잡코리아, 사람인, 원티드, 인크루트 지원',
        '클릭 한 번으로 자동 저장',
        '공고명, 회사명, 마감일, 경력, 직무 자동 추출',
        '개인정보 수집 없음 (브라우저 로컬 저장)',
        'Notion API 직접 연동',
      ],
      faqs: [
        {
          question: 'Notion API 토큰은 어떻게 받나요?',
          answer: 'Notion의 My Integrations 페이지에서 새로운 Integration을 생성하면 API 토큰을 받을 수 있습니다.',
        },
        {
          question: '내 데이터는 안전한가요?',
          answer: '모든 데이터는 사용자의 브라우저에만 암호화되어 저장되며, 개발자 서버로 전송되지 않습니다.',
        },
        {
          question: '어떤 채용 사이트를 지원하나요?',
          answer: '현재 잡코리아, 사람인, 원티드, 인크루트를 지원합니다.',
        },
      ],
    },
  };

  return projectId ? projects[projectId] || null : null;
}