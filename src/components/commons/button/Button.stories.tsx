import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "commons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "Button",
    variant: "solid",
    tone: "neutral",
    selected: false,
    disabled: false,
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["tab", "solid", "ghost"] },
    tone: {
      control: "inline-radio",
      options: ["primary", "indigo", "emerald", "neutral"],
    },
    selected: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

export const Gallery: Story = {
  render: () => (
    <div className="w-[840px] max-w-[calc(100vw-32px)] space-y-6">
      {/* TAB */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Tab</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="tab" tone="indigo" selected>
            필로그 키워드(선택)
          </Button>
          <Button variant="tab" tone="indigo">
            필로그 키워드
          </Button>
          <Button variant="tab" tone="emerald" selected>
            마켓 키워드(선택)
          </Button>
          <Button variant="tab" tone="emerald">
            마켓 키워드
          </Button>
          <Button variant="tab" tone="neutral">
            뉴트럴
          </Button>
          <Button variant="tab" tone="neutral" selected>
            뉴트럴(선택)
          </Button>
        </div>
      </section>

      {/* SOLID */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Solid</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="solid" tone="primary">
            Primary
          </Button>
          <Button variant="solid" tone="indigo">
            Indigo
          </Button>
          <Button variant="solid" tone="emerald">
            Emerald
          </Button>
          <Button variant="solid" tone="neutral">
            Neutral
          </Button>
          <Button variant="solid" tone="indigo" disabled>
            Disabled
          </Button>
        </div>
      </section>

      {/* GHOST */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">Ghost</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" tone="primary">
            Primary
          </Button>
          <Button variant="ghost" tone="indigo">
            Indigo
          </Button>
          <Button variant="ghost" tone="emerald">
            Emerald
          </Button>
          <Button variant="ghost" tone="neutral">
            Neutral
          </Button>
          <Button variant="ghost" tone="indigo" disabled>
            Disabled
          </Button>
        </div>
      </section>
    </div>
  ),
};
