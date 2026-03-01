import BackButton from "@/components/commons/backButton/BackButton";
import { Button } from "@/components/commons/button/Button";
import { useNavigation } from "@/shared/hooks/ui/useNavigation";

export default function SignupPage() {
  const { onClickNavigation } = useNavigation();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden px-4 py-4 lg:px-6 lg:pb-8">
      {/* TODO: 뒤로가기 경로 설정 */}
      <BackButton fallbackHref="/login" label="로그인으로 돌아가기" />

      <main className="flex-1 flex flex-col items-center px-6 py-8 pb-20">
        <div className="w-full max-w-sm mb-8 text-center">
          {/* Welcome Message */}
          <h2 className="text-xl font-semibold text-foreground mb-1">
            atFeelog에 오신 것을 환영합니다
          </h2>
          <p className="text-sm text-muted-foreground">
            공연의 감동을 기록하고 공유해보세요
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            이미 계정이 있으신가요?{" "}
            <Button
              variant="link"
              size="sm"
              onClick={onClickNavigation("/login")}
              className="text-lg font-semibold p-0"
            >
              로그인
            </Button>
          </p>
        </div>
      </main>
    </div>
  );
}
