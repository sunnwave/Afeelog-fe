import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";
import { Pencil, Ticket, Trash } from "lucide-react";
import { ActionSheet } from "./ActionSheet";

const meta: Meta<typeof ActionSheet> = {
  title: "commons/ActionSheet",
  component: ActionSheet,
  parameters: { layout: "fullscreen" },
  argTypes: {
    isOpen: { control: false },
    onClose: { control: false },
    title: { control: "text" },
    description: { control: "text" },
    options: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        {/* 스크롤/바디 잠금 확인용 더미 */}
        <div className="mx-auto max-w-lg space-y-3">
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
type Story = StoryObj<typeof ActionSheet>;

export const Default: Story = {
  args: {
    title: "작업 선택",
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => setOpen(true)}
            className="rounded-2xl bg-primary px-4 py-3 text-white shadow-lg hover:opacity-90"
          >
            ActionSheet 열기
          </button>
        </div>

        <ActionSheet
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          options={[
            {
              icon: Pencil,
              label: "에필로그 쓰기",
              description: "공연 후기와 감상을 기록해보세요",
              onClick: () => console.log("에필로그 쓰기"),
            },
            {
              icon: Ticket,
              label: "거래글 작성",
              description: "티켓이나 MD를 거래해보세요",
              onClick: () => console.log("거래글 작성"),
              variant: "default",
            },
            {
              icon: Trash,
              label: "글 삭제",
              description: "작성한 글을 삭제해요",
              onClick: () => console.log("글 삭제"),
              variant: "destructive",
            },
          ]}
        />
      </>
    );
  },
};
