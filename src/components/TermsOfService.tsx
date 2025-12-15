import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";

export function TermsOfService() {
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

        <h1 className="text-4xl mb-8">Terms of Service</h1>

        <Tabs defaultValue="inserview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="inserview">
              Inserview Studio
            </TabsTrigger>
            <TabsTrigger value="job-clipper">
              Job Clipper
            </TabsTrigger>
          </TabsList>

          {/* Inserview Studio Terms of Service */}
          <TabsContent value="inserview">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl mb-4">이용약관</h2>
                <p className="text-muted-foreground mb-4">
                  최종 수정일: 2025년 11월 28일
                </p>
                <p className="text-muted-foreground">
                  본 약관은 Inserview Studio(이하 "저희")가
                  제공하는 서비스의 이용과 관련하여 저희와
                  이용자 간의 권리, 의무 및 책임사항을
                  규정합니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">
                  1. 서비스의 목적
                </h2>
                <p className="text-muted-foreground">
                  Inserview Studio는 독특한 시선으로 세상을
                  해석하고 이를 UX, 기획, 콘텐츠로 구현하는
                  크리에이티브 스튜디오입니다. 본 웹사이트는
                  저희의 작업과 철학을 공유하고 방문자들의
                  의견을 수렴하기 위한 플랫폼입니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">
                  2. 이용자의 의무
                </h2>
                <p className="text-muted-foreground mb-2">
                  이용자는 다음 행위를 하여서는 안 됩니다:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>타인의 개인정보를 도용하는 행위</li>
                  <li>
                    저희의 서비스를 부정한 목적으로 이용하는
                    행위
                  </li>
                  <li>
                    저희의 저작권, 상표권 등 지적재산권을
                    침해하는 행위
                  </li>
                  <li>컴퓨터 바이러스 등을 유포하는 행위</li>
                  <li>
                    타인의 명예를 훼손하거나 모욕하는 행위
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">
                  3. 저작권 및 지적재산권
                </h2>
                <p className="text-muted-foreground">
                  본 웹사이트에 게시된 모든 콘텐츠(텍스트,
                  이미지, 디자인 등)의 저작권 및 지적재산권은
                  Inserview Studio에 귀속됩니다. 저희의 사전
                  승인 없이 무단으로 복제, 전송, 배포하는 것을
                  금지합니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">4. 면책조항</h2>
                <p className="text-muted-foreground mb-2">
                  저희는 다음 사항에 대해 책임을 지지 않습니다:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    천재지변, 전쟁, 기간통신사업자의 서비스 중지
                    등 불가항력으로 인한 서비스 제공 불가
                  </li>
                  <li>
                    이용자의 귀책사유로 인한 서비스 이용 장애
                  </li>
                  <li>
                    이용자가 제공한 정보의 정확성이나 신뢰성
                  </li>
                  <li>
                    이용자 간 또는 이용자와 제3자 간의 분쟁
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl mb-4">
                  5. 서비스의 변경 및 중단
                </h2>
                <p className="text-muted-foreground">
                  저희는 필요한 경우 서비스의 전부 또는 일부를
                  변경하거나 중단할 수 있으며, 이에 대해
                  이용자에게 별도의 보상을 하지 않습니다. 다만,
                  중요한 변경사항은 사전에 공지하도록
                  노력하겠습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">6. 분쟁 해결</h2>
                <p className="text-muted-foreground">
                  본 약관과 관련하여 분쟁이 발생한 경우, 저희와
                  이용자는 성실히 협의하여 해결하도록
                  노력합니다. 협의가 이루어지지 않을 경우 관련
                  법령에 따라 해결합니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">
                  7. 약관의 변경
                </h2>
                <p className="text-muted-foreground">
                  본 약관은 관련 법령의 변경이나 서비스 정책의
                  변경에 따라 수정될 수 있으며, 변경된 약관은
                  웹사이트를 통해 공지됩니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4">8. 문의</h2>
                <p className="text-muted-foreground">
                  본 약관에 대한 문의사항이 있으시면 아래
                  연락처로 문의해 주시기 바랍니다.
                </p>
                <div className="mt-4 text-muted-foreground">
                  <p>이메일: hello@inserview.com</p>
                  <p>전화: +1 (555) 123-4567</p>
                </div>
              </section>
            </div>
          </TabsContent>

          {/* Job Clipper Terms of Service */}
          <TabsContent value="job-clipper">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl mb-4">
                  Job Clipper 서비스 이용약관
                </h2>
                <p className="text-muted-foreground mb-4">
                  최종 수정일: 2025년 11월 28일
                </p>
              </section>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl mb-3">제1조 (목적)</h3>
                  <p className="text-muted-foreground">
                    본 약관은 [공인서/개발자명] (이하 "개발자"라
                    함)이 제공하는 "잡 클리퍼(Job Clipper)" 크롬
                    확장 프로그램 및 관련 제반 서비스(이하
                    "서비스"라 함)의 이용과 관련하여 개발자와
                    회원 간의 권리, 의무 및 책임사항, 기타
                    필요한 사항을 규정함을 목적으로 합니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-3">제2조 (정의)</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      "서비스"란 회원이 구직 사이트의 채용 공고
                      정보를 수집하여 본인의 Notion
                      데이터베이스로 저장할 수 있도록 지원하는
                      "잡 클리퍼" 소프트웨어 및 관련 기능을
                      의미합니다.
                    </li>
                    <li>
                      "회원"이란 본 약관에 동의하고 서비스를
                      이용하는 자를 말합니다.
                    </li>
                    <li>
                      "Notion"이란 Notion Labs, Inc.가 제공하는
                      생산성 도구를 의미하며, 본 서비스는 Notion
                      API를 활용하여 작동합니다.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-3">
                    제3조 (약관의 효력 및 변경)
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      본 약관은 서비스를 이용하고자 하는 자가 본
                      약관의 내용에 동의함으로서 효력이
                      발생합니다.
                    </li>
                    <li>
                      개발자는 합리적인 사유가 발생할 경우 관련
                      법령에 위배되지 않는 범위 안에서 약관을
                      개정할 수 있으며, 개정된 약관은 서비스 내
                      공지사항 등을 통해 공지함으로써 효력이
                      발생합니다.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-3">
                    제4조 (서비스의 제공 및 변경)
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    개발자는 다음과 같은 서비스를 제공합니다.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      채용 사이트(잡코리아, 사람인, 원티드,
                      인크루트 등)의 공고 내용 추출 기능
                    </li>
                    <li>
                      추출된 데이터를 사용자의 Notion 계정 및
                      데이터베이스로 안전하게 전송하는 기능
                    </li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    본 서비스는 Notion API의 정책 변경이나 대상
                    채용 사이트의 구조 변경에 따라 기능이
                    변경되거나 중단될 수 있습니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-3">
                    제5조 (회원의 의무)
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      회원은 본 서비스를 이용하여 취득한 정보를
                      개인적인 구직 활동 관리 목적으로만
                      사용하여야 하며, 이를 상업적으로
                      배포하거나 타인의 권리를 침해하는 용도로
                      사용해서는 안 됩니다.
                    </li>
                    <li>
                      회원은 자신의 Notion 계정 접근 권한(Access
                      Token)을 타인과 공유하지 않도록 주의해야
                      합니다.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-3">
                    제6조 (책임의 한계)
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      개발자는 무료로 제공되는 본 서비스의
                      이용과 관련하여 회원에게 발생한 어떠한
                      손해에 대해서도 책임을 지지 않습니다.
                    </li>
                    <li>
                      개발자는 대상 채용 사이트의 시스템
                      변경으로 인해 서비스가 정상적으로 작동하지
                      않는 경우 및 Notion API를 이용하는
                      과정에서 발생하는 Notion 내부의 문제에
                      대해 책임을 지지 않습니다.
                    </li>
                    <li>
                      본 서비스는 Notion Labs, Inc.와 제휴되거나
                      보증된 서비스가 아닙니다.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-3">
                    제7조 (준거법 및 관할법원)
                  </h3>
                  <p className="text-muted-foreground">
                    본 약관에 명시되지 않은 사항은 대한민국의
                    관계 법령에 따르며, 서비스 이용으로 발생한
                    분쟁에 대해서는 민사소송법상의 관할 법원에
                    제소합니다.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl mb-3">부칙</h3>
                  <p className="text-muted-foreground">
                    이 약관은 2025년 11월 28일부터 시행합니다.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}