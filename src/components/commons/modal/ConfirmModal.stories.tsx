// src/components/commons/modal/Modal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react";
import { ConfirmModal } from "./ConfirmModal";
import { Button } from "@/components/ui/button/Button";

const meta: Meta<typeof ConfirmModal> = {
  title: "commons/Modal/confirmModal",
  component: ConfirmModal,
  parameters: { layout: "fullscreen" },
  argTypes: {
    open: { control: false },
    onOpenChange: { control: false },
    trigger: { control: false },
    title: { control: "text" },
    description: { control: "text" },
    showCloseButton: { control: "boolean" },
    icon: { control: false }, // 아이콘은 스토리별로 지정
    variant: {
      control: "inline-radio",
      options: ["default", "destructive", "success", "primary"],
    },
    footer: { control: false },
    className: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto max-w-3xl space-y-3">
          <div className="h-10 rounded-lg border border-border bg-card" />
          <div className="h-10 rounded-lg border border-border bg-card" />
          <div className="h-10 rounded-lg border border-border bg-card" />
        </div>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

function Demo(
  args: Omit<React.ComponentProps<typeof ConfirmModal>, "open" | "onOpenChange">
) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => setOpen(true)}
          className="rounded-2xl bg-primary px-4 py-3 text-white shadow-lg hover:opacity-90"
        >
          Modal 열기
        </button>
      </div>

      <ConfirmModal
        {...args}
        open={open}
        onOpenChange={setOpen}
        footer={
          <div className="flex w-full items-center justify-center gap-3">
            <Button variant="secondary" className="flex-1">
              취소
            </Button>
            <Button variant="destructive" className="flex-1">
              삭제
            </Button>
          </div>
        }
      />
    </>
  );
}

export const Default: Story = {
  args: {
    title: "기본 모달",
    description: "설명 텍스트가 들어가는 기본 모달입니다.",
    showCloseButton: true,
  },
  render: (args) => <Demo {...args} />,
};

export const WithInfoIcon: Story = {
  args: {
    title: "안내",
    description: "이 작업은 안전합니다.",
    icon: Info,
    showCloseButton: true,
  },
  render: (args) => <Demo {...args} />,
};

export const WithDangerIcon: Story = {
  args: {
    title: "삭제할까요?",
    description: "삭제하면 되돌릴 수 없어요.",
    icon: AlertTriangle,
    variant: "destructive",
    showCloseButton: true,
  },
  render: (args) => <Demo {...args} />,
};

export const SuccessIcon: Story = {
  args: {
    title: "완료",
    description: "요청이 성공적으로 처리되었습니다.",
    icon: CheckCircle2,
    variant: "success",
    showCloseButton: true,
  },
  render: (args) => <Demo {...args} />,
};
