import type { Meta, StoryObj } from "@storybook/react";
import KeywordItem from "./KeywordItem";

const meta: Meta<typeof KeywordItem> = {
  title: "features/home/KeywordItem",
  component: KeywordItem,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-screen bg-white p-8 flex items-start justify-center">
        <div className="w-full max-w-md space-y-3">
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["feelog", "market"],
    },
    active: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KeywordItem>;

export const feelogActive: Story = {
  args: {
    variant: "feelog",
    active: true,
    keyword: { rank: 1, name: "위키드" },
  },
};

export const feelogInactive: Story = {
  args: {
    variant: "feelog",
    active: false,
    keyword: { rank: 2, name: "레미제라블" },
  },
};

export const MarketActive: Story = {
  args: {
    variant: "market",
    active: true,
    keyword: { rank: 1, name: "양도" },
  },
};

export const MarketInactive: Story = {
  args: {
    variant: "market",
    active: false,
    keyword: { rank: 7, name: "교환" },
  },
};

/** 리스트에서 active가 바뀌는 느낌을 보고 싶을 때 */
export const ListExample: Story = {
  render: (args) => (
    <div className="space-y-3">
      <KeywordItem
        {...args}
        variant="feelog"
        active
        keyword={{ rank: 1, name: "위키드" }}
      />
      <KeywordItem
        {...args}
        variant="feelog"
        active={false}
        keyword={{ rank: 2, name: "라이온 킹" }}
      />
      <KeywordItem
        {...args}
        variant="feelog"
        active={false}
        keyword={{ rank: 3, name: "시카고" }}
      />
      <div className="h-4" />
      <KeywordItem
        {...args}
        variant="market"
        active
        keyword={{ rank: 1, name: "양도" }}
      />
      <KeywordItem
        {...args}
        variant="market"
        active={false}
        keyword={{ rank: 2, name: "구매" }}
      />
      <KeywordItem
        {...args}
        variant="market"
        active={false}
        keyword={{ rank: 3, name: "교환" }}
      />
    </div>
  ),
};
