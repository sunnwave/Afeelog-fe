import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";
import type { IBoard } from "@/commons/graphql/generated/types";

const IMG = "https://picsum.photos/id/64/200/200";

const boardWithUser = {
  __typename: "Board",
  _id: "board_1",
  title: "테스트",
  contents: "내용",
  createdAt: "2026-02-06T00:00:00.000Z",
  updatedAt: "2026-02-06T00:00:00.000Z",
  deletedAt: null,
  user: {
    __typename: "User",
    _id: "user_1",
    email: "alice@example.com",
    name: "Alice",
    picture: IMG,
    createdAt: "2026-02-06T00:00:00.000Z",
    updatedAt: "2026-02-06T00:00:00.000Z",
    deletedAt: null,
    userPoint: null,
  },
} as unknown as IBoard;

const boardAnonymous = {
  ...boardWithUser,
  user: null,
} as unknown as IBoard;

const meta: Meta<typeof Profile> = {
  title: "commons/Profile",
  component: Profile,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-screen bg-gray-900 p-6 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const WithUser: Story = {
  args: { board: boardWithUser },
};

export const Anonymous: Story = {
  args: { board: boardAnonymous },
};
