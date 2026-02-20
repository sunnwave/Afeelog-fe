import type { Meta, StoryObj } from "@storybook/react";
import type { IUser } from "@/shared/graphql/generated/types";
import ProfileEntry from "./ProfileEntry";
// import { vi } from "vitest";

// // ✅ UI 확인용 Avatar mock
// vi.mock("@/components/commons/avatar/Avatar", () => ({
//   default: () => (
//     <div className="h-9 w-9 rounded-full bg-white/20 border border-white/30 text-white font-bold flex items-center justify-center">
//       A
//     </div>
//   ),
// }));

const baseUser: IUser = {
  __typename: "User",
  _id: "user_1",
  email: "alice@example.com",
  name: "Alice",
  picture: null,
  createdAt: "2026-02-06T00:00:00.000Z",
  updatedAt: "2026-02-06T00:00:00.000Z",
  deletedAt: null,
  userPoint: null,
};

const meta: Meta<typeof ProfileEntry> = {
  title: "layout/ProfileEntry",
  component: ProfileEntry,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div className="min-h-screen w-screen bg-white p-6 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProfileEntry>;

export const LoggedOut: Story = {
  args: { user: baseUser, variant: "loggedOut" },
};

export const LoggedIn_LongName: Story = {
  args: {
    user: { ...baseUser, name: "아주아주아주긴이름테스트아주아주아주긴이름" },
    variant: "loggedIn",
  },
};
