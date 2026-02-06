import type { Meta, StoryObj } from "@storybook/react";
import RecordFeedCard from "./RecordCard";

const meta: Meta<typeof RecordFeedCard> = {
  title: "features/Records/RecordCard",
  component: RecordFeedCard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof RecordFeedCard>;

export const WithImage: Story = {
  args: {},
};

export const WithoutImage: Story = {
  args: {},
};
