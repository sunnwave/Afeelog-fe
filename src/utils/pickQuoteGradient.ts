import { GRADIENTS } from "@/constants/gradientPallete";

function hashToIndex(input: string, mod: number) {
  let h = 0;
  for (let i = 0; i < input.length; i++)
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h % mod;
}

export function pickQuoteGradient(key: string) {
  return GRADIENTS[hashToIndex(key || "default", GRADIENTS.length)];
}
