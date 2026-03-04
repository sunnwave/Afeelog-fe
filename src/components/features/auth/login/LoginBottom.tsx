import { Button } from "@/components/ui/button/Button";

export default function LoginBottom({
  onClickNavigation,
}: {
  onClickNavigation: () => void;
}) {
  return (
    <div className="text-center">
      <p className="text-sm text-muted-foreground">
        아직 회원이 아니신가요?{" "}
        <Button
          variant="link"
          size="sm"
          onClick={onClickNavigation}
          className="text-lg font-semibold p-0"
        >
          회원가입
        </Button>
      </p>
    </div>
  );
}
