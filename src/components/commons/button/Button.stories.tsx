import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button"; // ✅ 경로 맞게 수정

const meta: Meta<typeof Button> = {
  title: "commons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "버튼",
    variant: "solid",
    tone: "neutral",
    size: "sm",
    selected: false,
    disabled: false,
  },
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: "inline-radio",
      options: ["tab", "solid", "outlined", "ghost"],
    },
    tone: {
      control: "inline-radio",
      options: ["primary", "indigo", "emerald", "neutral"],
    },
    size: {
      control: "inline-radio",
      options: ["tab", "sm", "md", "lg"],
    },
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
    className: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div className="min-h-[240px] w-[420px] bg-background p-6 rounded-2xl border border-border flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Tab: Story = {
  args: {
    variant: "tab",
    tone: "indigo",
    selected: true,
    size: "tab",
    children: "필로그 키워드",
  },
};

export const SolidPrimary: Story = {
  args: {
    variant: "solid",
    tone: "primary",
    size: "md",
    children: "Primary Solid",
  },
};

export const OutlinedEmerald: Story = {
  args: {
    variant: "outlined",
    tone: "emerald",
    size: "md",
    children: "Outlined Emerald",
  },
};

export const GhostNeutral: Story = {
  args: {
    variant: "ghost",
    tone: "neutral",
    size: "sm",
    children: "Ghost Neutral",
  },
};

export const Disabled: Story = {
  args: {
    variant: "solid",
    tone: "indigo",
    size: "md",
    disabled: true,
    children: "Disabled",
  },
};

export const SizeShowcase: Story = {
  render: () => (
    <div className="w-[520px] space-y-3">
      <Button size="sm">Size sm</Button>
      <Button size="md">Size md</Button>
      <Button size="lg">Size lg</Button>
    </div>
  ),
};

export const ToneShowcaseSolid: Story = {
  render: () => (
    <div className="w-[520px] grid grid-cols-2 gap-3">
      <Button tone="primary" variant="solid">
        primary
      </Button>
      <Button tone="indigo" variant="solid">
        indigo
      </Button>
      <Button tone="emerald" variant="solid">
        emerald
      </Button>
      <Button tone="neutral" variant="solid">
        neutral
      </Button>
    </div>
  ),
};

export const ToneShowcaseOutlined: Story = {
  render: () => (
    <div className="w-[520px] grid grid-cols-2 gap-3">
      <Button tone="primary" variant="outlined">
        primary
      </Button>
      <Button tone="indigo" variant="outlined">
        indigo
      </Button>
      <Button tone="emerald" variant="outlined">
        emerald
      </Button>
      <Button tone="neutral" variant="outlined">
        neutral
      </Button>
    </div>
  ),
};

export const TabPairExample: Story = {
  render: () => (
    <div className="w-[520px] flex gap-2">
      <Button variant="tab" tone="indigo" size="tab" selected>
        필로그 키워드
      </Button>
      <Button variant="tab" tone="emerald" size="tab" selected={false}>
        마켓 키워드
      </Button>
    </div>
  ),
};
