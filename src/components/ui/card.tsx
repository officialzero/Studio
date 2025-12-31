import * as React from "react";
// cn 함수는 Tailwind CSS 클래스를 조건부로 병합하는 유틸리티입니다.
const cn = (...classes: (string | undefined | null | boolean)[]): string =>
  classes.filter(Boolean).join(" ");

// Card 컴포넌트는 React.forwardRef를 사용하여 부모 컴포넌트로부터 ref를 전달받을 수 있도록 합니다.
const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref} // Ref 전달
      data-slot="card"
      className={cn(
        // 'border border-border'를 추가하여 테두리 색상을 시스템의 '--border' 변수로 고정
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-border shadow-md",
        className,
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

// CardHeader는 Ref가 필요 없으므로 function 또는 const를 사용해도 무방합니다.
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}
CardHeader.displayName = "CardHeader";

function CardTitle({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      data-slot="card-title"
      // 폰트 크기 및 스타일을 지정하여 제목처럼 보이게 합니다.
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}
CardTitle.displayName = "CardTitle";


function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}
CardDescription.displayName = "CardDescription";

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}
CardAction.displayName = "CardAction";

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 last:pb-6", className)}
      {...props}
    />
  );
}
CardContent.displayName = "CardContent";

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};