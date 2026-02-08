import { QUOTE_GRADIENTS } from "@/constants/quoteGradients";

function hashToIndex(input: string, mod: number) {
  let h = 0;
  for (let i = 0; i < input.length; i++)
    h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h % mod;
}

export function pickQuoteGradient(key: string) {
  return QUOTE_GRADIENTS[hashToIndex(key || "default", QUOTE_GRADIENTS.length)];
}
