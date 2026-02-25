// src/components/commons/actionSheet/ActionSheet.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Edit3, Trash2, Share2, Copy } from "lucide-react";
import { ActionSheet } from "./ActionSheet";

const meta: Meta<typeof ActionSheet> = {
  title: "commons/ActionSheet",
  component: ActionSheet,
  parameters: { layout: "fullscreen" },
  argTypes: {
    variant: { control: "inline-radio", options: ["withHeader", "withIcon"] },
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

export const WithHeader: Story = {
  args: {
    title: "작업 선택",
    variant: "withHeader",
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
              icon: <Edit3 className="w-5 h-5" />,
              label: "수정하기",
              description: "내용을 수정합니다",
              onClick: () => console.log("edit"),
              variant: "primary",
            },
            {
              icon: <Share2 className="w-5 h-5" />,
              label: "공유하기",
              description: "링크를 공유합니다",
              onClick: () => console.log("share"),
              variant: "default",
            },
            {
              icon: <Copy className="w-5 h-5" />,
              label: "링크 복사",
              description: "클립보드에 복사합니다",
              onClick: () => console.log("copy"),
              variant: "default",
            },
            {
              icon: <Trash2 className="w-5 h-5" />,
              label: "삭제하기",
              description: "삭제하면 되돌릴 수 없어요",
              onClick: () => console.log("delete"),
              variant: "danger",
            },
          ]}
        />
      </>
    );
  },
};

export const WithIcon: Story = {
  args: {
    title: "작성하려면 로그인해요",
    description: "로그인하고 공연 후기와 거래글을 작성해보세요",
    variant: "withIcon",
  },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="max-w-fit rounded-xl border border-border bg-card px-4 py-2 hover:bg-muted"
        >
          제목 없는 시트 열기
        </button>

        <ActionSheet
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          options={[
            {
              icon: <Share2 className="w-5 h-5" />,
              label: "공유하기",
              onClick: () => console.log("share"),
            },
            {
              icon: <Trash2 className="w-5 h-5" />,
              label: "삭제하기",
              onClick: () => console.log("delete"),
              variant: "danger",
            },
          ]}
        />
      </>
    );
  },
};

export const OnlyDanger: Story = {
  args: { title: "위험 작업" },
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="max-w-fit rounded-xl bg-destructive px-4 py-2 text-white hover:opacity-90"
        >
          Danger Sheet
        </button>

        <ActionSheet
          {...args}
          isOpen={open}
          onClose={() => setOpen(false)}
          options={[
            {
              icon: <Trash2 className="w-5 h-5" />,
              label: "영구 삭제",
              description: "이 작업은 되돌릴 수 없습니다",
              onClick: () => console.log("danger"),
              variant: "danger",
            },
          ]}
        />
      </>
    );
  },
};
