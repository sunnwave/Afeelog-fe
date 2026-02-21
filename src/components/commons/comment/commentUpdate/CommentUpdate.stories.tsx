// src/components/.../CommentUpdate.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { CommentUpdate } from "./CommentUpdate";

const meta: Meta<typeof CommentUpdate> = {
  title: "commons/comment/CommentUpdate",
  component: CommentUpdate,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto w-full max-w-[720px] rounded-2xl border border-border bg-card p-6">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CommentUpdate>;

export const Default: Story = {
  args: {
    initialContent: "댓글 수정 테스트입니다.\n줄바꿈도 확인해볼게요.",
    autoFocus: false,
  },
};

export const AutoFocusOn: Story = {
  args: {
    initialContent: "자동 포커스가 켜져 있어요. 커서가 끝으로 이동합니다.",
    autoFocus: true,
  },
};

export const LongContent: Story = {
  args: {
    initialContent:
      "아주 긴 댓글 내용입니다. ".repeat(25) +
      "\n\n줄바꿈도 있고, 자동 리사이즈가 200px까지 늘어납니다.",
    autoFocus: false,
  },
};

export const EmptyInitial: Story = {
  args: {
    initialContent: "",
    autoFocus: false,
  },
};
