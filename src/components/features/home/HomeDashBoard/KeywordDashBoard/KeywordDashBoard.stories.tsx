// src/components/features/home/KeywordDashBoard/KeywordDashBoard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import KeywordDashBoard from "./KeywordDashBoard";
import { MOCK_FEELLOG_KEYWORDS, MOCK_MARKET_KEYWORDS } from "../../constants";

const meta: Meta<typeof KeywordDashBoard> = {
  title: "features/home/KeywordDashBoard",
  component: KeywordDashBoard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-screen bg-background p-6 flex items-start justify-center">
        <div className="w-full max-w-md">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof KeywordDashBoard>;

export const Feelog_Default: Story = {
  args: {
    variant: "feelog",
    keywords: MOCK_FEELLOG_KEYWORDS,
    intervalMs: 1800,
  },
};

export const Market_Default: Story = {
  args: {
    variant: "market",
    keywords: MOCK_MARKET_KEYWORDS,
    intervalMs: 1800,
  },
};

export const SingleItem: Story = {
  args: {
    variant: "feelog",
    keywords: [{ rank: 1, name: "단 하나만" }],
    intervalMs: 1000,
  },
};

export const Empty: Story = {
  args: {
    variant: "feelog",
    keywords: [],
    intervalMs: 1000,
  },
};
