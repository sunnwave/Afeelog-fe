import type { Meta, StoryObj } from "@storybook/react";
import CommentIcon from "./CommentIcon";

const meta: Meta<typeof CommentIcon> = {
  title: "commons/CommentIcon",
  component: CommentIcon,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-screen bg-gray-900 flex items-center justify-center p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CommentIcon>;

export const Default: Story = {
  args: { count: 12 },
};
