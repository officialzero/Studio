import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useParams, Link } from 'react-router-dom';

export function CookiePolicy() {
  const { product } = useParams<{ product: 'inserview' | 'job-clipper' }>();
  const isInserview = product === 'inserview' || !product;

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Button 
          variant="ghost" 
          onClick={handleBack}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl mb-4">Cookie Policy</h1>
          <div className="flex gap-4">
            <Link 
              to="/cookie-policy/inserview"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isInserview 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Inserview Studio
            </Link>
            <Link 
              to="/cookie-policy/job-clipper"
              className={`px-4 py-2 rounded-lg transition-colors ${
                !isInserview 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Job Clipper
            </Link>
          </div>
        </div>

        {isInserview ? <InterviewStudioCookiePolicy /> : <JobClipperCookiePolicy />}
      </div>
    </div>
  );
}

function InterviewStudioCookiePolicy() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
      <section>
        <h2 className="text-2xl mb-4">쿠키 정책</h2>
        <p className="text-muted-foreground mb-4">
          최종 수정일: 2025년 11월 28일
        </p>
        <p className="text-muted-foreground">
          Inserview Studio는 웹사이트 방문자에게 최적화된 경험을 제공하기 위해 쿠키를 사용합니다. 
          본 정책은 저희가 어떤 쿠키를 사용하며, 어떤 목적으로 사용하는지 설명합니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">1. 쿠키란?</h2>
        <p className="text-muted-foreground">
          쿠키는 웹사이트를 방문할 때 사용자의 브라우저에 저장되는 작은 텍스트 파일입니다. 
          쿠키를 통해 웹사이트는 사용자의 방문 정보를 기억하고, 더 나은 사용자 경험을 제공할 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">2. 사용하는 쿠키의 종류</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl mb-2">필수 쿠키</h3>
            <p className="text-muted-foreground">
              웹사이트의 기본 기능을 제공하기 위해 반드시 필요한 쿠키입니다. 
              이 쿠키가 없으면 웹사이트가 정상적으로 작동하지 않을 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">기능 쿠키</h3>
            <p className="text-muted-foreground">
              사용자의 선호도와 설정을 기억하여 개인화된 경험을 제공하는 쿠키입니다. 
              예: 언어 설정, 다크 모드 설정 등
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">분석 쿠키</h3>
            <p className="text-muted-foreground">
              웹사이트 사용 패턴을 분석하여 서비스를 개선하는 데 사용됩니다. 
              이 데이터는 익명으로 수집되며 개인을 식별하는 데 사용되지 않습니다.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4">3. 쿠키 관리</h2>
        <p className="text-muted-foreground mb-2">
          대부분의 브라우저는 쿠키를 자동으로 수락하도록 설정되어 있지만, 
          사용자는 브라우저 설정을 통해 쿠키를 거부하거나 삭제할 수 있습니다.
        </p>
        <p className="text-muted-foreground">
          다만, 쿠키를 비활성화하면 일부 웹사이트 기능이 제대로 작동하지 않을 수 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">4. 제3자 쿠키</h2>
        <p className="text-muted-foreground">
          저희 웹사이트는 Google Analytics와 같은 제3자 서비스를 사용할 수 있습니다. 
          이러한 서비스는 자체 쿠키를 설정할 수 있으며, 해당 서비스의 개인정보 보호정책이 적용됩니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">5. 쿠키 정책 변경</h2>
        <p className="text-muted-foreground">
          본 쿠키 정책은 필요에 따라 업데이트될 수 있습니다. 
          변경 사항이 있을 경우 이 페이지에 공지하며, 중요한 변경사항의 경우 별도로 알려드립니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">6. 문의</h2>
        <p className="text-muted-foreground">
          쿠키 정책에 대한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
        </p>
        <div className="mt-4 p-4 bg-secondary rounded-lg">
          <p className="text-muted-foreground">
            <strong>이메일:</strong> rhddlstj11@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}

function JobClipperCookiePolicy() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
      <section>
        <h2 className="text-2xl mb-4">Cookie Policy</h2>
        <p className="text-muted-foreground mb-4">
          Last Updated: November 28, 2025
        </p>
        <p className="text-muted-foreground">
          Job Clipper uses cookies to provide you with an optimized browsing experience. 
          This policy explains what cookies we use and for what purposes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">1. What are Cookies?</h2>
        <p className="text-muted-foreground">
          Cookies are small text files stored on your browser when you visit a website. 
          They enable the website to remember your visit information and provide a better user experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">2. Types of Cookies We Use</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl mb-2">Essential Cookies</h3>
            <p className="text-muted-foreground">
              These cookies are necessary for the basic functions of the website. 
              Without these cookies, the website may not function properly.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Functional Cookies</h3>
            <p className="text-muted-foreground">
              These cookies remember your preferences and settings to provide a personalized experience. 
              Examples: Language settings, dark mode preferences, etc.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Analytics Cookies</h3>
            <p className="text-muted-foreground">
              Used to analyze website usage patterns and improve our services. 
              This data is collected anonymously and is not used to identify individuals.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Extension Storage</h3>
            <p className="text-muted-foreground">
              Job Clipper browser extension uses local storage to save your clipped job postings. 
              This data is stored locally on your device and is not transmitted to our servers unless you explicitly choose to sync.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4">3. Managing Cookies</h2>
        <p className="text-muted-foreground mb-2">
          Most browsers are set to accept cookies automatically, but you can refuse or delete cookies through your browser settings.
        </p>
        <p className="text-muted-foreground">
          However, disabling cookies may prevent some website features from working properly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">4. Third-Party Cookies</h2>
        <p className="text-muted-foreground">
          Our website may use third-party services such as Google Analytics. 
          These services may set their own cookies, subject to their respective privacy policies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">5. Browser Extension Data</h2>
        <p className="text-muted-foreground mb-2">
          Job Clipper browser extension stores the following data locally:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>Job posting URLs and metadata</li>
          <li>User notes and tags</li>
          <li>Application status tracking</li>
          <li>Extension preferences and settings</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          This data remains on your device and can be deleted at any time through the extension settings.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">6. Changes to Cookie Policy</h2>
        <p className="text-muted-foreground">
          This cookie policy may be updated as needed. 
          We will post any changes on this page and notify you separately for significant changes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">7. Contact</h2>
        <p className="text-muted-foreground">
          If you have any questions about this cookie policy, please contact us at:
        </p>
        <div className="mt-4 p-4 bg-secondary rounded-lg">
          <p className="text-muted-foreground">
            <strong>Email:</strong> rhddlstj11@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
