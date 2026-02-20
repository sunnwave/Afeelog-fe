import type { Meta, StoryObj } from "@storybook/react";
import WriterMenu from "./WriterMenu";

const meta: Meta<typeof WriterMenu> = {
  title: "commons/WriterMenu",
  component: WriterMenu,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div className="min-h-[220px] w-[320px] flex items-start justify-end p-6 bg-background border border-border rounded-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WriterMenu>;

export const Default: Story = {
  args: {},
};
