import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { Plus, Trash2, ChevronRight } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "commons/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div
        className="min-h-screen w-screen p-10"
        // style={{ background: "#0B1220" }}
      >
        <div className="max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "버튼",
    variant: "solid",
    tone: "brand",
    size: "md",
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "soft", "outline", "ghost", "link"],
    },
    tone: {
      control: "select",
      options: ["brand", "neutral", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    isLoading: { control: "boolean" },
    disabled: { control: "boolean" },
    leftIcon: { control: false },
    rightIcon: { control: false },
    onClick: { action: "clicked" },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <section className="space-y-3">
        <h3 className=" font-semibold">Solid</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="solid" tone="brand">
            Brand
          </Button>
          <Button variant="solid" tone="neutral">
            Neutral
          </Button>
          <Button variant="solid" tone="danger">
            Danger
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold">Soft</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="soft" tone="brand">
            Brand
          </Button>
          <Button variant="soft" tone="neutral">
            Neutral
          </Button>
          <Button variant="soft" tone="danger">
            Danger
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className=" font-semibold">Outline</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" tone="brand">
            Brand
          </Button>
          <Button variant="outline" tone="neutral">
            Neutral
          </Button>
          <Button variant="outline" tone="danger">
            Danger
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className=" font-semibold">Ghost</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="ghost" tone="brand">
            Brand
          </Button>
          <Button variant="ghost" tone="neutral">
            Neutral
          </Button>
          <Button variant="ghost" tone="danger">
            Danger
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className=" font-semibold">Link</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="link" tone="brand">
            Brand Link
          </Button>
          <Button variant="link" tone="neutral">
            Neutral Link
          </Button>
          <Button variant="link" tone="danger">
            Danger Link
          </Button>
        </div>
      </section>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="icon">
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button leftIcon={<Plus className="h-4 w-4" />}>작성하기</Button>
      <Button
        variant="soft"
        tone="neutral"
        rightIcon={<ChevronRight className="h-4 w-4" />}
      >
        더보기
      </Button>
      <Button
        variant="solid"
        tone="danger"
        leftIcon={<Trash2 className="h-4 w-4" />}
      >
        삭제
      </Button>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button>Default</Button>
      <Button isLoading>저장 중</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>
        Outline Disabled
      </Button>
    </div>
  ),
};
