import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Code, ExternalLink, X } from 'lucide-react';

/**
 * Inserview Studio API 목록을 보여주는 섹션 컴포넌트
 * - API 카드 그리드 형태로 표시
 * - Documentation 모달 지원
 * - Try API 외부 링크 연결
 */

// 상수 정의
const SECTION_ID = 'api';
const SECTION_TITLE = 'API';
const SECTION_DESCRIPTION = 'Inserview Studio API 목록';

// HTTP 메서드 타입
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// API 데이터 타입 정의
interface APIData {
  id: string;
  title: string;
  description: string;
  endpoint: string;
  method: HttpMethod;
  features: string[];
  category: string;
  tryUrl: string;
  documentation: APIDocumentation;
}

// API Documentation 타입 정의
interface APIDocumentation {
  description: string;
  parameters?: APIParameter[];
  requestExample: string;
  responseExample: string;
}

interface APIParameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

// HTTP 메서드별 색상 매핑
const METHOD_COLORS: Record<HttpMethod, string> = {
  GET: 'bg-blue-500/10 text-blue-700 border-blue-300',
  POST: 'bg-green-500/10 text-green-700 border-green-300',
  PUT: 'bg-yellow-500/10 text-yellow-700 border-yellow-300',
  DELETE: 'bg-red-500/10 text-red-700 border-red-300'
};

export function APISection() {
  const [selectedAPI, setSelectedAPI] = useState<APIData | null>(null);

  // API 목록 데이터 (실제 데이터로 교체 예정)
  const apiList: APIData[] = [
    {
      id: 'user-profile',
      title: 'Coming Soon',
      description: '-',
      endpoint: '/api/v1/users/{userId}',
      method: 'GET',
      features: ['인증 필요', '캐싱 지원', 'Rate Limit: 100/hour', 'JSON 응답'],
      category: 'User',
      tryUrl: 'https://api.inserview.studio/try/user-profile',
      documentation: {
        description: '특정 사용자의 프로필 정보를 조회하는 API입니다.',
        parameters: [
          {
            name: 'userId',
            type: 'string',
            required: true,
            description: '조회할 사용자의 고유 ID'
          }
        ],
        requestExample: `GET /api/v1/users/12345
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`,
        responseExample: `{
  "success": true,
  "data": {
    "userId": "12345",
    "username": "inserview_user",
    "email": "user@inserview.studio",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}`
      }
    },
    {
      id: 'create-project',
      title: 'Coming Soon',
      description: '-',
      endpoint: '/api/v1/projects',
      method: 'POST',
      features: ['인증 필요', '파일 업로드', 'Webhook 지원', 'JSON 응답'],
      category: 'Project',
      tryUrl: 'https://api.inserview.studio/try/create-project',
      documentation: {
        description: '새로운 프로젝트를 생성하는 API입니다.',
        parameters: [
          {
            name: 'title',
            type: 'string',
            required: true,
            description: '프로젝트 제목'
          },
          {
            name: 'description',
            type: 'string',
            required: false,
            description: '프로젝트 설명'
          }
        ],
        requestExample: `POST /api/v1/projects
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "title": "New Project",
  "description": "Project description here"
}`,
        responseExample: `{
  "success": true,
  "data": {
    "projectId": "proj_abc123",
    "title": "New Project",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}`
      }
    }
  ];

  // Documentation 모달 열기
  const openDocumentation = (api: APIData) => {
    setSelectedAPI(api);
  };

  // Documentation 모달 닫기
  const closeDocumentation = () => {
    setSelectedAPI(null);
  };

  // Try API 페이지로 이동
  const handleTryAPI = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id={SECTION_ID} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">{SECTION_TITLE}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {SECTION_DESCRIPTION}
          </p>
        </div>

        {/* API 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apiList.map((api) => (
            <APICard
              key={api.id}
              api={api}
              onOpenDocumentation={openDocumentation}
              onTryAPI={handleTryAPI}
            />
          ))}
        </div>

        {/* View All APIs 버튼 */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All APIs
          </Button>
        </div>
      </div>

      {/* Documentation 모달 */}
      {selectedAPI && (
        <DocumentationModal 
          api={selectedAPI} 
          onClose={closeDocumentation} 
        />
      )}
    </section>
  );
}

/**
 * 개별 API 카드 컴포넌트
 */
interface APICardProps {
  api: APIData;
  onOpenDocumentation: (api: APIData) => void;
  onTryAPI: (url: string) => void;
}

function APICard({ api, onOpenDocumentation, onTryAPI }: APICardProps) {
  const getMethodColor = (method: HttpMethod): string => {
    return METHOD_COLORS[method];
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{api.category}</Badge>
          <Badge className={getMethodColor(api.method)} variant="outline">
            {api.method}
          </Badge>
        </div>
        <CardTitle className="text-lg">{api.title}</CardTitle>
        <CardDescription>{api.description}</CardDescription>
      </CardHeader>

      <CardContent>
        {/* API 엔드포인트 */}
        <div className="mb-4 p-3 bg-secondary/30 rounded-md">
          <code className="text-sm text-foreground font-mono break-all">
            {api.endpoint}
          </code>
        </div>

        {/* API 기능 태그 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {api.features.map((feature) => (
            <Badge key={feature} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        {/* 액션 버튼 */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onOpenDocumentation(api)}
          >
            <Code className="h-4 w-4 mr-1" />
            Documentation
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => onTryAPI(api.tryUrl)}
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            Try API
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * API Documentation 모달 컴포넌트
 */
interface DocumentationModalProps {
  api: APIData;
  onClose: () => void;
}

function DocumentationModal({ api, onClose }: DocumentationModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 헤더 */}
        <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold">{api.title}</h3>
              <Badge className={METHOD_COLORS[api.method]} variant="outline">
                {api.method}
              </Badge>
            </div>
            <code className="text-sm text-muted-foreground font-mono">
              {api.endpoint}
            </code>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* 모달 내용 */}
        <div className="p-6 space-y-6">
          {/* 설명 */}
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-muted-foreground">{api.documentation.description}</p>
          </div>

          {/* 파라미터 */}
          {api.documentation.parameters && api.documentation.parameters.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3">Parameters</h4>
              <div className="space-y-3">
                {api.documentation.parameters.map((param) => (
                  <div key={param.name} className="border rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <code className="font-mono text-sm font-semibold">{param.name}</code>
                      <Badge variant="outline" className="text-xs">{param.type}</Badge>
                      {param.required && (
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{param.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Request Example */}
          <div>
            <h4 className="font-semibold mb-2">Request Example</h4>
            <div className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm font-mono whitespace-pre">
                {api.documentation.requestExample}
              </pre>
            </div>
          </div>

          {/* Response Example */}
          <div>
            <h4 className="font-semibold mb-2">Response Example</h4>
            <div className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm font-mono whitespace-pre">
                {api.documentation.responseExample}
              </pre>
            </div>
          </div>

          {/* Try API 버튼 */}
          <div className="pt-4 border-t">
            <Button 
              className="w-full" 
              onClick={() => window.open(api.tryUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Try this API
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}