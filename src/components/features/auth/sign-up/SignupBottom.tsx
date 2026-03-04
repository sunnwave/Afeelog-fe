import { Button } from "@/components/ui/button/Button";

export default function SignupBottom({
  onClickNavigation,
}: {
  onClickNavigation: () => void;
}) {
  return (
    <div className="text-center">
      <p className="text-sm text-muted-foreground">
        이미 계정이 있으신가요?{" "}
        <Button
          variant="link"
          size="sm"
          onClick={onClickNavigation}
          className="text-lg font-semibold p-0"
        >
          로그인
        </Button>
      </p>
    </div>
  );
}
