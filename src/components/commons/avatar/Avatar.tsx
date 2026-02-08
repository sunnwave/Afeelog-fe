import { IUser } from "@/commons/graphql/generated/types";
import { getProfileImage } from "@/utils/getImage";
import { pickAvatarGradient } from "@/utils/pickAvatarColor";
import Image from "next/image";
import { JSX } from "react";

type AvatarSize = "xs" | "sm" | "md" | "lg";

type AvatarType = "filled" | "outlined";

const sizeClasses: Record<AvatarSize, { px: number; cls: string }> = {
  xs: { px: 32, cls: "h-8 w-8 text-sm font-semibold" },
  sm: { px: 36, cls: "h-9 w-9 text-sm font-semibold" },
  md: { px: 45, cls: "h-[45px] w-[45px] text-xl font-semibold" },
  lg: { px: 72, cls: "h-18 w-18 text-3xl font-bold" },
};

export default function Avatar({
  user,
  size = "sm",
  type = "outlined",
}: {
  user?: IUser;
  size?: AvatarSize;
  type?: AvatarType;
}): JSX.Element {
  const avatarUrl = getProfileImage(user?.picture);
  const s = sizeClasses[size];

  const key = user?._id || user?.email || user?.name || "anonymous";
  const g = pickAvatarGradient(key);
  const filledStyle =
    type === "filled"
      ? { backgroundImage: `linear-gradient(135deg, ${g.from}, ${g.to})` }
      : undefined;

  const base = "rounded-full flex items-center justify-center";

  return avatarUrl ? (
    <Image
      className={`${base} object-cover`}
      src={avatarUrl}
      alt="User Avatar"
      width={sizeClasses[size].px}
      height={sizeClasses[size].px}
    />
  ) : (
    <div
      className={`${base} ${
        sizeClasses[size].cls
      } text-white font-semibold overflow-hidden ${
        type === "outlined" ? "bg-white/20 border border-white/30" : ""
      }`}
      style={filledStyle}
    >
      {user?.name?.[0] || "익"}
    </div>
  );
}
