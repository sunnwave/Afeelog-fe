import type { Meta, StoryObj } from "@storybook/react";
import BookMarkIcon from "./BookMarkIcon";

const meta: Meta<typeof BookMarkIcon> = {
  title: "commons/ui/icons/BookMarkIcon",
  component: BookMarkIcon,
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
    isSaved: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof BookMarkIcon>;

export const Default: Story = {
  args: {
    isSaved: false,
  },
};
