import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

/**
 * Contact 섹션 컴포넌트
 * - EmailJS를 통한 이메일 전송 기능
 * - 폼 유효성 검사 및 사용자 피드백
 */

// EmailJS 설정
// 1. https://www.emailjs.com/ 에서 계정 생성
// 2. Email Services에서 Gmail 연결
// 3. Email Templates에서 템플릿 생성 (변수: {{from_name}}, {{from_email}}, {{phone}}, {{service}}, {{message}})
// 4. Account > API Keys에서 Public Key 확인
const EMAILJS_SERVICE_ID = ''; // EmailJS Service ID를 여기에 입력
const EMAILJS_TEMPLATE_ID = ''; // EmailJS Template ID를 여기에 입력
const EMAILJS_PUBLIC_KEY = ''; // EmailJS Public Key를 여기에 입력
const RECIPIENT_EMAIL = ''; // 메일을 받을 Gmail 주소를 여기에 입력 (예: your-email@gmail.com)

// 폼 데이터 타입 정의
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS 설정 확인
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error('이메일 전송 설정이 완료되지 않았습니다. 관리자에게 문의해주세요.');
      console.error('EmailJS configuration is missing. Please set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, and EMAILJS_PUBLIC_KEY');
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS를 통해 이메일 전송
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || '(미입력)',
        service: formData.service || '(미선택)',
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast.success('소중한 의견 감사합니다! 이메일이 성공적으로 전송되었습니다.');
      
      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 폼 필드 변경 핸들러
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            여러분의 생각과 의견을 듣고 싶습니다. 
            궁금한 점이나 제안하고 싶은 아이디어가 있다면 언제든 연락 주세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 연락처 정보 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">contact@inserview.studio</p>
                <p className="text-muted-foreground">support@inserview.studio</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+82 10-XXXX-XXXX</p>
                <p className="text-muted-foreground">평일 9AM-6PM KST</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  서울특별시<br />
                  강남구<br />
                  테헤란로 XXX
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 문의 폼 */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Share Your Thoughts</CardTitle>
                <CardDescription>
                  여러분의 의견과 생각을 자유롭게 남겨주세요.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 이름 & 이메일 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium">Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                          handleChange('name', e.target.value)
                        }
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                          handleChange('email', e.target.value)
                        }
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* 전화번호 & 서비스 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium">Phone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                          handleChange('phone', e.target.value)
                        }
                        placeholder="+82 10-XXXX-XXXX"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium">Service</label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value: string) => 
                          handleChange('service', value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-development">Mobile Development</SelectItem>
                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          <SelectItem value="utility-tools">Utility Tools</SelectItem>
                          <SelectItem value="playful-interaction">Playful Interaction</SelectItem>
                          <SelectItem value="visual-experiments">Visual Experiments</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* 메시지 */}
                  <div>
                    <label className="block mb-2 text-sm font-medium">Details *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
                        handleChange('message', e.target.value)
                      }
                      placeholder="궁금한 점, 제안하고 싶은 아이디어, 또는 피드백을 자유롭게 작성해주세요..."
                      rows={4}
                      required
                    />
                  </div>

                  {/* 제출 버튼 */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full group" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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