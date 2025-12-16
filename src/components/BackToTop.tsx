import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

/**
 * 화면 맨 위로 스크롤하는 버튼 컴포넌트
 * - 스크롤 300px 이상 내려가면 표시
 * - 부드러운 애니메이션 지원
 * - 우측 하단 고정 위치
 */

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치 추적
  useEffect(() => {
    const toggleVisibility = () => {
      // 300px 이상 스크롤하면 버튼 표시
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', toggleVisibility);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };

  // 버튼이 보이지 않으면 렌더링하지 않음
  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all"
      aria-label="맨 위로 이동"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
