export const AVATAR_GRADIENTS = [
  { from: "#0F172A", to: "#334155" }, // slate-900 -> slate-700
  { from: "#111827", to: "#374151" }, // gray-900 -> gray-700
  { from: "#1E293B", to: "#475569" }, // slate-800 -> slate-600
  { from: "#1F2937", to: "#4B5563" }, // gray-800 -> gray-600
  { from: "#0B1220", to: "#1E293B" }, // deep navy -> slate-800

  { from: "#312E81", to: "#4F46E5" }, // indigo-900 -> indigo-600
  { from: "#3730A3", to: "#6366F1" }, // indigo-800 -> indigo-500
  { from: "#4338CA", to: "#818CF8" }, // indigo-700 -> indigo-400
  { from: "#4F46E5", to: "#A5B4FC" }, // indigo-600 -> indigo-300 (밝지만 톤 유지)
  { from: "#2E1065", to: "#7C3AED" }, // violet-950 -> violet-600

  { from: "#4C1D95", to: "#8B5CF6" }, // violet-900 -> violet-500
  { from: "#5B21B6", to: "#A78BFA" }, // violet-800 -> violet-400
  { from: "#581C87", to: "#C084FC" }, // fuchsia-900 -> fuchsia-400
  { from: "#3B0764", to: "#9333EA" }, // purple-950 -> purple-600
  { from: "#1E1B4B", to: "#6366F1" }, // indigo-ish dark -> indigo

  { from: "#0C4A6E", to: "#0284C7" }, // sky-900 -> sky-600
  { from: "#0E7490", to: "#22D3EE" }, // cyan-700 -> cyan-400
  { from: "#134E4A", to: "#14B8A6" }, // teal-900 -> teal-500
  { from: "#064E3B", to: "#10B981" }, // emerald-900 -> emerald-500
  { from: "#14532D", to: "#22C55E" }, // green-900 -> green-500
] as const;

function hashToIndex(input: string, mod: number) {
  let h = 0;
  for (let i = 0; i < input.length; i++)
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h % mod;
}

export function pickAvatarGradient(userKey?: string) {
  const key = userKey?.trim() || "anonymous";
  return AVATAR_GRADIENTS[hashToIndex(key, AVATAR_GRADIENTS.length)];
}
