// src/components/commons/alert/Alert.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";
import { Info, AlertTriangle, BadgeCheck } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "commons/ui/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background p-8">
        <div className="mx-auto w-full max-w-[720px] space-y-6">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["default", "destructive", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>알림</AlertTitle>
      <AlertDescription>기본 알림 메시지입니다.</AlertDescription>
    </Alert>
  ),
};

export const WithIcon: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args}>
      <Info />
      <AlertTitle>안내</AlertTitle>
      <AlertDescription>아이콘이 포함된 알림입니다.</AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle />
      <AlertTitle>오류</AlertTitle>
      <AlertDescription>
        문제가 발생했습니다. 다시 시도해주세요.
      </AlertDescription>
    </Alert>
  ),
};

export const RichContent: Story = {
  args: {
    variant: "success",
  },
  render: (args) => (
    <Alert {...args}>
      <BadgeCheck />
      <AlertTitle>저장 완료</AlertTitle>
      <AlertDescription>
        <p>댓글이 성공적으로 저장되었습니다.</p>
      </AlertDescription>
    </Alert>
  ),
};
