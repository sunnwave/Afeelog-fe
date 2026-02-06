export const getImageUrl = (url?: string): string => {
  if (!url) return "/commons/no-image.svg";
  if (url.startsWith("https://") || url.startsWith("data:")) return url;
  if (url.startsWith("storage.googleapis.com")) return `https://${url}`;
  return `https://storage.googleapis.com/${url}`;
};

export const getProfileImage = (url?: string | null): string | undefined => {
  if (!url) return undefined;
  if (typeof url !== "string" || url.trim() === "") return undefined;
  if (url.startsWith("https://") || url.startsWith("data:")) return url;
  if (url.startsWith("storage.googleapis.com")) return `https://${url}`;
  return `https://storage.googleapis.com/${url}`;
};
