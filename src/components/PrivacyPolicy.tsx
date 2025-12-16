import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useParams, Link } from 'react-router-dom';

export function PrivacyPolicy() {
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
          <h1 className="text-4xl mb-4">Privacy Policy</h1>
          <div className="flex gap-4">
            <Link 
              to="/privacy/inserview"
              className={`px-4 py-2 rounded-lg transition-colors ${
                isInserview 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Inserview Studio
            </Link>
            <Link 
              to="/privacy/job-clipper"
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
        
        {isInserview ? <InterviewStudioPrivacyPolicy /> : <JobClipperPrivacyPolicy />}
      </div>
    </div>
  );
}

function InterviewStudioPrivacyPolicy() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
      <section>
        <h2 className="text-2xl mb-4">개인정보 처리방침</h2>
        <p className="text-muted-foreground mb-4">
          최종 수정일: 2025년 11월 28일
        </p>
        <p className="text-muted-foreground">
          Inserview Studio는 여러분의 개인정보를 소중히 여기며, 개인정보 보호법을 준수하고 있습니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">1. 수집하는 개인정보</h2>
        <p className="text-muted-foreground mb-2">
          저희는 다음과 같은 개인정보를 수집합니다:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>이름</li>
          <li>이메일 주소</li>
          <li>전화번호 (선택사항)</li>
          <li>문의 내용</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4">2. 개인정보의 수집 및 이용 목적</h2>
        <p className="text-muted-foreground mb-2">
          수집한 개인정보는 다음의 목적을 위해 활용됩니다:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>문의 및 피드백에 대한 응답</li>
          <li>서비스 개선 및 사용자 경험 향상</li>
          <li>중요 공지사항 전달</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4">3. 개인정보의 보유 및 이용 기간</h2>
        <p className="text-muted-foreground">
          수집된 개인정보는 수집 목적이 달성된 후 즉시 파기됩니다. 
          단, 관련 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">4. 개인정보의 제3자 제공</h2>
        <p className="text-muted-foreground">
          저희는 원칙적으로 사용자의 개인정보를 외부에 제공하지 않습니다. 
          다만, 법령에 의해 요구되는 경우에는 예외로 합니다.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">5. 이용자의 권리</h2>
        <p className="text-muted-foreground mb-2">
          이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>개인정보 열람 요구</li>
          <li>개인정보 정정 요구</li>
          <li>개인정보 삭제 요구</li>
          <li>개인정보 처리 정지 요구</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4">6. 개인정보 보호책임자</h2>
        <p className="text-muted-foreground">
          개인정보 처리에 관한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
        </p>
        <div className="mt-4 text-muted-foreground">
          <p>이메일: hello@inserview.com</p>
          <p>전화: +1 (555) 123-4567</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4">7. 개인정보 처리방침 변경</h2>
        <p className="text-muted-foreground">
          본 개인정보 처리방침은 법령 및 정책 변경에 따라 수정될 수 있으며, 
          변경 시 웹사이트를 통해 공지하겠습니다.
        </p>
      </section>
    </div>
  );
}

function JobClipperPrivacyPolicy() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
      <section>
        <h2 className="text-2xl mb-4">Job Clipper 개인정보 처리방침</h2>
        <p className="text-muted-foreground mb-4">
          최종 수정일: 2025년 11월 28일
        </p>
        <p className="text-muted-foreground mb-8">
          Job Clipper는 채용 공고 관리 서비스로, 사용자의 개인정보를 안전하게 보호하며 개인정보 보호법을 준수하고 있습니다.
        </p>
      </section>

      {/* 개인정보 처리방침 (기존 제2부를 제1부로 변경) */}
      <section>
        <p className="text-muted-foreground mb-6">
          [공인서/개발자명](이하 '개발자')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl mb-3">제1조 (개인정보의 처리 목적)</h3>
            <p className="text-muted-foreground mb-2">
              본 서비스(잡 클리퍼)는 개인정보를 개발자의 서버에 저장하지 않습니다. 다만, 다음의 목적을 위하여 최소한의 정보만을 사용자의 기기 내에서 처리하거나 Notion으로 전송합니다.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>서비스 제공 및 Notion 연동 관리</li>
              <li>Notion OAuth 2.0 인증을 통한 접근 권한 획득 및 유효성 확인</li>
              <li>사용자의 Notion 워크스페이스 내 데이터베이스 접근 및 데이터 전송</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3">제2조 (수집 및 저장하는 개인정보의 항목 및 방법)</h3>
            <p className="text-muted-foreground mb-2">
              본 서비스는 개발자의 서버에 개인정보를 저장하지 않으며, 모든 데이터는 사용자의 브라우저 또는 Notion 서버에만 저장됩니다.
            </p>
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">사용자 기기(브라우저)에 저장되는 정보 (개발자 서버 미저장)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>항목: Notion Access Token (데이터베이스 접근 권한), 사용자가 선택한 Notion Page ID</li>
                  <li>저장 장소: 사용자의 Chrome 확장 프로그램 로컬 스토리지 (chrome.storage.local)</li>
                  <li>목적: 매번 로그인 없이 Notion API를 호출하고 클리핑 대상 데이터베이스를 기억하기 위함</li>
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">일시적으로 처리(경유)되는 정보 (Notion으로 전송 후 즉시 휘발)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>채용 공고의 제목, 회사명, URL, 내용 등 클리핑 대상 데이터</li>
                  <li>이 데이터는 전송 과정에서 일시적으로 메모리상에서만 처리되며, 개발자의 서버나 데이터베이스에 영구적으로 저장되지 않습니다.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">제3조 (개인정보의 처리 및 보유 기간)</h3>
            <p className="text-muted-foreground mb-2">
              개발자는 원칙적으로 사용자의 개인정보를 직접 보유하지 않습니다.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>보유 기간: 사용자가 확장 프로그램을 삭제하거나 Notion 연동을 해제할 때까지 사용자의 기기 내에만 보관됩니다.</li>
              <li>파기 시점: 사용자가 Chrome 브라우저에서 확장 프로그램을 삭제하거나, Notion 설정에서 연결을 끊는 즉시 해당 Access Token은 효력을 상실하거나 삭제됩니다.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3">제4조 (개인정보의 제3자 제공)</h3>
            <p className="text-muted-foreground mb-2">
              본 서비스는 사용자가 수집한 데이터를 사용자의 지시에 따라 다음의 외부 플랫폼으로 전송할 뿐, 그 외 어떠한 제3자에게도 개인정보를 제공하지 않습니다.
            </p>
            <div className="ml-4">
              <p className="text-muted-foreground mb-2">Notion Labs, Inc. (국외)</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>제공 목적: 사용자가 요청한 채용 공고 데이터를 사용자의 Notion 워크스페이스에 저장하기 위함</li>
                <li>제공 항목: 채용 공고 데이터 (제목, 내용, URL 등) 및 Notion Access Token</li>
                <li>보유 및 이용 기간: Notion의 이용약관 및 개인정보 처리방침을 따름</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">제5조 (개인정보 처리업무의 위탁)</h3>
            <p className="text-muted-foreground">
              본 서비스는 별도의 회원 DB를 운영하지 않으므로, 개인정보 처리를 위한 별도의 위탁 계약을 체결하고 있지 않습니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3">제6조 (개인정보의 안전성 확보 조치)</h3>
            <p className="text-muted-foreground mb-2">
              개발자는 개인정보가 개발자의 서버에 저장되지 않더라도, 서비스 이용 과정의 안전성 확보 및 투명성 제고를 위해 다음과 같은 기술적·관리적 조치를 취하고 있습니다.
            </p>
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">기술적 조치</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>암호화 통신: 개인정보(Notion Access Token 등)의 전송은 HTTPS/SSL 프로토콜을 통한 암호화 통신을 적용하여 안전하게 전송됩니다. (API 통신 표준 준수)</li>
                  <li>접근 권한 관리: Notion API 접근 시 최소 권한만을 요청하며, Access Token은 보안에 취약한 쿠키 대신 사용자 기기의 로컬 스토리지에 한하여 저장되도록 통제하고 있습니다.</li>
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">관리적 조치</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>내부 통제 원칙: 개발자는 이용자의 Notion Access Token 및 클리핑 데이터에 대해 접근 통제 원칙을 준수하며, 비인가 접근을 차단하기 위한 노력을 지속합니다.</li>
                  <li>개인정보 취급자 교육: 개인정보보호 관련 법규 및 지침 준수 교육을 이행하고 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">제7조 (개인정보의 파기)</h3>
            <p className="text-muted-foreground mb-2">
              개발자는 개인정보 보유기간 경과, 처리목적 달성 등으로 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            </p>
            <div className="ml-4">
              <p className="text-muted-foreground mb-2">파기 절차 및 시점:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access Token: 제3조에서 명시한 바와 같이, 사용자의 확장 프로그램 삭제 또는 Notion 연결 해제 요청 시 효력을 상실하거나 삭제됩니다.</li>
                <li>일시적 처리 데이터: 클리핑 데이터가 Notion으로 전송되어 처리 목적이 달성되는 즉시, 서버의 메모리 및 임시 로그 파일 등에서 파기됩니다.</li>
              </ul>
              <p className="text-muted-foreground mt-2">파기 방법: 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 파기합니다.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">제8조 (정보주체의 권리·의무 및 그 행사방법)</h3>
            <p className="text-muted-foreground mb-2">
              정보주체는 언제든지 본인의 개인정보(Access Token)에 대한 통제권을 행사할 수 있습니다.
            </p>
            <div className="ml-4">
              <p className="text-muted-foreground mb-2">권리 행사 방법:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>확장 프로그램 삭제: 브라우저에서 확장 프로그램을 삭제하면 기기에 저된 모든 데이터가 즉시 삭제됩니다.</li>
                <li>Notion 연결 해제: Notion 설정(My connections) 메뉴에서 앱 접근 권한을 해제하면 서비스의 접근이 즉시 차단됩니다.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">제9조 (개인정보 보호책임자)</h3>
            <p className="text-muted-foreground mb-2">
              개발자는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>성명: [공인서]</li>
              <li>직책: [개발자 / 대표]</li>
              <li>연락처: [이메일 주소 입력]</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3">제10조 (권익침해 구제방법)</h3>
            <p className="text-muted-foreground">
              정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-3">제11조 (개인정보 처리방침의 변경)</h3>
            <p className="text-muted-foreground">
              이 개인정보 처리방침은 2025년 11월 28일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t">
            <p className="text-muted-foreground text-center">
              [잡 클리퍼 제작자/공인서]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}