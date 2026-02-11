import type { Meta, StoryObj } from "@storybook/react";
import HeartIcon from "./HeartIcon";

const meta: Meta<typeof HeartIcon> = {
  title: "commons/HeartIcon",
  component: HeartIcon,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-screen bg-gray-900 flex items-center justify-center p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeartIcon>;

export const ColumnSm_NotLiked: Story = {
  args: {
    isLiked: false,
    likeCount: 12,
    iconSize: "sm",
    direction: "col",
  },
};

export const ColumnSm_Liked: Story = {
  args: {
    isLiked: true,
    likeCount: 12,
    iconSize: "sm",
    direction: "col",
  },
};

export const RowMd_NotLiked: Story = {
  args: {
    isLiked: false,
    likeCount: 128,
    iconSize: "md",
    direction: "row",
  },
};

export const RowMd_Liked: Story = {
  args: {
    isLiked: true,
    likeCount: 128,
    iconSize: "md",
    direction: "row",
  },
};

export const Sizes_Showcase: Story = {
  render: () => (
    <div className="flex flex-col gap-6 text-white">
      <div className="flex items-center gap-6">
        <HeartIcon
          isLiked={false}
          likeCount={3}
          iconSize="xs"
          direction="row"
        />
        <HeartIcon isLiked={true} likeCount={3} iconSize="xs" direction="row" />
      </div>

      <div className="flex items-center gap-6">
        <HeartIcon
          isLiked={false}
          likeCount={12}
          iconSize="sm"
          direction="row"
        />
        <HeartIcon
          isLiked={true}
          likeCount={12}
          iconSize="sm"
          direction="row"
        />
      </div>

      <div className="flex items-center gap-6">
        <HeartIcon
          isLiked={false}
          likeCount={128}
          iconSize="md"
          direction="row"
        />
        <HeartIcon
          isLiked={true}
          likeCount={128}
          iconSize="md"
          direction="row"
        />
      </div>

      <div className="flex items-center gap-6">
        <HeartIcon
          isLiked={false}
          likeCount={999}
          iconSize="lg"
          direction="row"
        />
        <HeartIcon
          isLiked={true}
          likeCount={999}
          iconSize="lg"
          direction="row"
        />
      </div>

      <div className="flex items-center gap-6">
        <HeartIcon
          isLiked={false}
          likeCount={1200}
          iconSize="xl"
          direction="row"
        />
        <HeartIcon
          isLiked={true}
          likeCount={1200}
          iconSize="xl"
          direction="row"
        />
      </div>
    </div>
  ),
};

export const CustomClassName: Story = {
  args: {
    isLiked: false,
    likeCount: 42,
    iconSize: "md",
    direction: "col",
    className: "hover:scale-110 active:scale-95",
  },
};
