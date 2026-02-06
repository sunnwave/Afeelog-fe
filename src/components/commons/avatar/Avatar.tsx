import { IUser } from "@/commons/graphql/generated/types";
import { getProfileImage } from "@/utils/getImage";
import Image from "next/image";
import { JSX } from "react";

type AvatarSize = "xs" | "sm" | "md" | "lg";

type AvatarType = "filled" | "outlined";

const sizeClasses: Record<AvatarSize, { px: number; cls: string }> = {
  xs: { px: 32, cls: "h-8 w-8" },
  sm: { px: 36, cls: "h-9 w-9" },
  md: { px: 45, cls: "h-[45px] w-[45px] text-xl font-semibold" },
  lg: { px: 72, cls: "h-18 w-18 text-3xl font-bold" },
};

const typeClasses: Record<AvatarType, string> = {
  filled: "bg-[#94A3B8]/70 border-0 ",
  outlined: "bg-white/20 border border-white/30",
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

  const base = "rounded-full flex items-center justify-center";

  if (avatarUrl) {
    return (
      <Image
        className={`${base} object-cover`}
        src={avatarUrl}
        alt="User Avatar"
        width={sizeClasses[size].px}
        height={sizeClasses[size].px}
      />
    );
  } else {
    return (
      <div
        className={`${base} ${typeClasses[type]} ${sizeClasses[size].cls} text-white font-semibold`}
      >
        {user?.name?.[0] || "익"}
      </div>
    );
  }
}
