import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "commons/SearchBar",
  component: SearchBar,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div
        className="min-h-screen w-screen p-8"
        style={{ background: "#0B1220" }}
      >
        <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const OnlySearch: Story = {
  args: { variant: "onlySearch" },
};

export const WithDate: Story = {
  args: { variant: "withDate" },
};
