import type { Meta, StoryObj } from "@storybook/react";
import HeartIcon from "./HeartIcon";

const meta: Meta<typeof HeartIcon> = {
  title: "commons/HeartIcon",
  component: HeartIcon,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-screen bg-gray-900 flex items-center justify-center p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isLiked: { control: "boolean" },
    likeCount: { control: { type: "number", min: 0 } },
  },
};

export default meta;
type Story = StoryObj<typeof HeartIcon>;

export const Default: Story = {
  args: {
    isLiked: false,
    likeCount: 12,
  },
};

export const Liked: Story = {
  args: {
    isLiked: true,
    likeCount: 12,
  },
};
