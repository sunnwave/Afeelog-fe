import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "commons/Logo",
  component: Logo,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-screen bg-white p-6 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const defaultLogo: Story = {};
