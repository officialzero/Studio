import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

export function PrivacyPolicy() {
  const { product } = useParams<{ product: 'inserview' | 'job-clipper' }>();
  const isInserview = product === 'inserview' || !product;
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

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
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl">Privacy Policy</h1>

            {/* 언어 토글 스위치 */}
            <div className="relative inline-flex items-center bg-secondary rounded-full p-1 w-28 h-10">
              {/* 슬라이딩 배경 */}
              <div 
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-all duration-300 ease-in-out ${
                  language === 'en' ? 'left-[calc(50%+2px)]' : 'left-1'
                }`}
              />
              
              {/* Ko 버튼 */}
              <button
                onClick={() => setLanguage('ko')}
                className={`relative z-10 flex-1 text-sm font-medium transition-colors duration-300 ${
                  language === 'ko' ? 'text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                Ko
              </button>
              
              {/* En 버튼 */}
              <button
                onClick={() => setLanguage('en')}
                className={`relative z-10 flex-1 text-sm font-medium transition-colors duration-300 ${
                  language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                En
              </button>
            </div>
          </div>
          
          {/* 제품 선택 버튼 */}
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
        
        {isInserview ? (
          language === 'ko' ? <InserviewStudioPrivacyPolicy /> : <InserviewStudioPrivacyPolicyEN />
        ) : (
          language === 'ko' ? <JobClipperPrivacyPolicy /> : <JobClipperPrivacyPolicyEN />
        )}
      </div>
    </div>
  );
}

function InserviewStudioPrivacyPolicy() {
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
          <p>이메일: rhddlstj11@gmail.com</p>
          <p>전화: +82 (010) 2035-7617</p>
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
        <p className="text-muted-foreground mb-4">
          버전 : 1.0.0
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
              <li>사용자의 Notion 워크스페이스 내 데이터베이스 접근 및 데이터 전송</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3">제2조 (수집 및 저장하는 개인정보의 항목 및 방법)</h3>
            <p className="text-muted-foreground mb-2">
              본 서비스는 개발자의 외부 서버에 어떠한 개인정보나 클리핑 데이터를 전송되거나 저장하지 않으며, 모든 데이터는 사용자의 브라우저 또는 Notion 서버에만 저장됩니다.
            </p>
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">사용자 기기(브라우저)에 저장되는 정보 (개발자 서버 미저장)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>필수 정보 항목: Notion Access Token (데이터베이스 접근 권한), 사용자가 선택한 Notion Page ID</li>
                  <li>로컬 저장 장소: 사용자의 Chrome 확장 프로그램 로컬 스토리지 (chrome.storage.local) 입력하신 Notion 토큰과 데이터베이스 ID는 브라우저의 안전한 로컬 저장소(chrome.storage.local)에 보관되어, 매번 입력할 필요 없이 편리하게 사용하실 수 있습니다.</li>
                  <li>직접 통신: 데이터 전송 시 중간 서버를 거치지 않고, 사용자의 브라우저에서 Notion API 서버로 직접 데이터를 전송합니다.</li>
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
              <p className="text-muted-foreground mb-2">Notion Labs, Inc. (사용자 본인의 Notion 워크페이스)</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>제공 목적: 사용자가 요청한 채용 공고 데이터를 사용자의 Notion 워크스페이스에 저장하기 위함</li>
                <li>제공 항목: 채용 공고 데이터 (제목, 내용, URL 등)</li>
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
            본 서비스는 사용자의 데이터를 외부 클라우드나 개발자의 서버로 수집하지 않습니다. 모든 데이터 처리는 사용자의 <strong>브라우저 내부 환경</strong> 내에서만 이루어지며, 보안 및 투명성 제고를 위해 다음과 같은 조치를 취하고 있습니다.
            </p>
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-muted-foreground mb-2">기술적 조치</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>종단간 보안: 모든 데이터는 사용자의 브라우저에서 Notion 공식 API 서버로 직접 전송되며, 중간 서버를 거치지 않아 데이터 유출 위험이 없습니다.</li>
                  <li>접근 권한 최소화: Notion API 호출 시 사용자가 입력한 토큰은 브라우저의 메모리상에서만 일시적으로 처리되며, 외부 인증 서버를 경유하지 않습니다.</li>
                  <li>브라우저 보안 저장소 이용: 사용자의 설정값(Token, DB ID)은 Chrome에서 제공하는 암호화된 보안 저장소(chrome.storage.local)에 저장되어 타 프로그램의 접근을 차단합니다.</li>
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground mb-2">관리적 조치</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>데이터 비소유 원칙: 개발자는 사용자의 개인적인 설정값이나 저장된 데이터에 접속하거나 열람할 수 있는 어떠한 권한도 가지고 있지 않습니다.</li>
                  <li>개인정보 취급 지침 준수: 개발자는 정보주체의 개인정보 보호를 위해 관련 법규를 준수하며 지속적으로 서비스 보안을 점검합니다.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">제7조 (개인정보의 파기)</h3>
            <p className="text-muted-foreground mb-2">
            본 서비스는 사용자가 직접 입력하는 민감 정보(토큰 등)를 별도 서버에 저장하지 않으며, 다음의 원칙에 따라 데이터를 관리 및 파기합니다.
            </p>
            <div className="ml-4">
              <p className="text-muted-foreground mb-2">1. 서비스 설정 데이터 (Notion Token, Database ID)</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>사용자가 입력한 모든 설정값은 브라우저의 로컬 스토리지에만 저장됩니다.</li>
                <li>사용자가 확장 프로그램을 삭제하거나 브라우저의 확장 프로그램 데이터를 삭제할 경우 해당 정보는 즉시 영구 파기됩니다.</li>
              </ul>
              
              <p className="text-muted-foreground mb-2 mt-4">2. 클리핑 데이터 (공고 정보)</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>채용 공고에서 추출된 정보는 전송을 위해 메모리상에서만 일시적으로 처리됩니다.</li>
                <li>데이터 전송이 완료되거나 팝업 창이 닫히는 즉시 메모리 내 기록은 소멸되며, 개발자의 환경에는 어떠한 기록도 남지 않습니다.</li>
              </ul>

              <p className="text-muted-foreground mb-2 mt-4">3. 스토어 이용 정보</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>크롬 웹스토어를 통한 설치 과정에서 발생하는 정보는 구글(Google)의 시스템에 저장되며, 이는 구글의 개인정보 보호정책에 따라 관리됩니다.</li>
                <li>개발자는 서비스 운영(문의 대응 등)에 필요한 최소한의 범위 내에서만 해당 정보를 열람하며, 별도의 DB로 수집하지 않습니다.</li>
              </ul>
              <p className="text-muted-foreground mt-4">파기 절차: 전자적 파일 형태인 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 시스템 삭제 시 복구 불가능한 상태로 처리됩니다.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">제8조 (정보주체의 권리·의무 및 그 행사방법)</h3>
            <p className="text-muted-foreground mb-2">
              정보주체는 자신의 기기 내에서 구동되는 서비스에 대해 완전한 통제권을 가집니다.
            </p>
            <div className="ml-4">
              <p className="text-muted-foreground mb-2">권리 행사 방법:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>확장 프로그램 삭제: 브라우저에서 확장 프로그램을 삭제하면 기기에 저된 모든 데이터가 즉시 삭제됩니다.</li>
                <li>서비스 중단 및 데이터 파기: 브라우저에서 확장 프로그램을 삭제함으로써 모든 개인정보 처리를 중단하고 저장된 데이터를 즉시 삭제할 수 있습니다.</li>
                <li>결제 정보 확인: 구매 내역 및 결제 관련 정보는 구글 결제 센터 및 크롬 웹스토어 대시보드를 통해 확인 및 관리할 수 있습니다.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3">제9조 (개인정보 보호책임자 및 문의처)</h3>
            <p className="text-muted-foreground mb-2">
              서비스 이용 중 발생하는 개인정보 관련 문의나 의견은 아래의 연락처로 보내주시면 성실히 답변해 드리겠습니다.
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>담장자 성명: 공인서</li>
              <li>문의처: rhddlstj11@gmail.com</li>
              <li>역할: 개인정보 관련 문의 접수 및 서비스 개선 제안 수렴</li>
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
              이 개인정보 처리방침은 시행일로부터 적용되며, 기능 업데이트 등으로 인해 처리 방식이 변경될 경우 서비스 내 공지사항을 띄워 신속히 안내하겠습니다.
              법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
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


// 새로운 영어 버전 컴포넌트들
function InserviewStudioPrivacyPolicyEN() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
      <section>
        <h2 className="text-2xl mb-4">Privacy Policy</h2>
        <p className="text-muted-foreground mb-4">Last Updated: November 28, 2025</p>
        <p className="text-muted-foreground">
          Inserview Studio values your privacy and complies with privacy protection laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">1. Personal Information We Collect</h2>
        <p className="text-muted-foreground mb-2">We collect the following personal information:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number (optional)</li>
          <li>Inquiry content</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4">2. Purpose of Collection and Use</h2>
        <p className="text-muted-foreground mb-2">Collected personal information is used for:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>Responding to inquiries and feedback</li>
          <li>Service improvement and user experience enhancement</li>
          <li>Delivery of important notices</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4">3. Retention Period</h2>
        <p className="text-muted-foreground">
          Collected personal information is destroyed immediately after the purpose is achieved. 
          However, it may be retained for the period required by relevant laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">4. Third-Party Disclosure</h2>
        <p className="text-muted-foreground">
          We do not disclose personal information to third parties in principle, 
          except when required by law.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-4">5. User Rights</h2>
        <p className="text-muted-foreground mb-2">Users may exercise the following rights at any time:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
          <li>Request access to personal information</li>
          <li>Request correction of personal information</li>
          <li>Request deletion of personal information</li>
          <li>Request suspension of personal information processing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl mb-4">6. Privacy Officer</h2>
        <p className="text-muted-foreground">
          For inquiries regarding personal information processing, please contact:
        </p>
        <div className="mt-4 text-muted-foreground">
          <p>Email: rhddlstj11@gmail.com</p>
          <p>Phone: +82 (010) 2035-7617</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4">7. Policy Changes</h2>
        <p className="text-muted-foreground">
          This privacy policy may be revised according to changes in laws and policies. 
          Changes will be announced through our website.
        </p>
      </section>
    </div>
  );
}

function JobClipperPrivacyPolicyEN() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
      <section>
        <h2 className="text-2xl mb-4 font-bold">Job Clipper Privacy Policy</h2>
        <p className="text-muted-foreground mb-4">Last Updated: November 28, 2025</p>
        <p className="text-muted-foreground mb-4">Version: 1.0.0</p>
        <p className="text-muted-foreground mb-8">
          Job Clipper is a job posting management service that safely protects user privacy and complies with privacy protection laws.
        </p>
      </section>

      <section>
        <p className="text-muted-foreground mb-6">
          The developer establishes and discloses this privacy policy to protect the personal information of data subjects and handle related grievances promptly and smoothly in accordance with Article 30 of the Personal Information Protection Act.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl mb-3 font-semibold">Article 1 (Purpose of Processing Personal Information)</h3>
            <p className="text-muted-foreground mb-2">
              This service (Job Clipper) does not store personal information on the developer's server. However, minimal information is processed within the user's device or transmitted to Notion for the following purposes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Service provision and Notion integration management</li>
              <li>Access to databases in user's Notion workspace and data transmission</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3 font-semibold">Article 2 (Information Collected and Stored)</h3>
            <p className="text-muted-foreground mb-2">
              The Service does not transmit or store any personal information or clipping data to external developer servers. All data is stored only in the user's browser or on Notion's servers.
            </p>
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-muted-foreground mb-1 font-medium">Data Stored on User Device (Local Storage)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Required Items:</strong> Notion Access Token, Notion Database/Page ID.</li>
                  <li><strong>Storage Location:</strong> Chrome Extension local storage (chrome.storage.local). These credentials are kept securely in your browser to avoid repeated entry.</li>
                  <li><strong>Direct Communication:</strong> Data is sent directly from the user's browser to Notion's API servers without passing through any intermediate servers.</li>
                </ul>
              </div>
              <div>
                <p className="text-muted-foreground mb-1 font-medium">Temporary Processed Data (Volatile)</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Clipping Targets:</strong> Job title, company name, URL, and content.</li>
                  <li>This data is processed temporarily in memory during transmission and is never permanently stored on the developer's server.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3 font-semibold">Article 3 (Retention and Period)</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Retention: Data remains on the user's device until the extension is deleted.</li>
              <li>Destruction: Credentials are deleted immediately when the user removes the extension.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3 font-semibold">Article 4 (Third-Party Provision)</h3>
            <p className="text-muted-foreground mb-2">The Service only transmits data to the following external platform as directed by the user:</p>
            <div className="ml-4">
              <p className="text-muted-foreground mb-1 font-medium">Notion Labs, Inc. (User's personal workspace)</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Purpose: Saving job posting data to the user's Notion database.</li>
                <li>Items: Job data (title, company, URL, etc.).</li>
                <li>Retention: Governed by Notion's own Terms of Service and Privacy Policy.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl mb-3 font-semibold">Article 5 (Safety Measures)</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>End-to-End Security:</strong> All data is sent directly to Notion's official API; no intermediate servers are used.</li>
              <li><strong>Encryption:</strong> User settings (Token, DB ID) are stored using Chrome's encrypted storage API.</li>
              <li><strong>Data Non-Ownership:</strong> The developer has no authority or technical means to access the user's local storage or data.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3 font-semibold">Article 6 (User Rights)</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Uninstallation: Deleting the extension from the browser immediately removes all stored local data.</li>
              <li>Payment Info: Purchase and payment details are managed via Google's system.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl mb-3 font-semibold">Article 7 (Contact Information)</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Developer Name: Inseo Gong</li>
              <li>Email: rhddlstj11@gmail.com</li>
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t">
            <p className="text-muted-foreground text-center font-bold">
              [Job Clipper / Inseo Gong]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}