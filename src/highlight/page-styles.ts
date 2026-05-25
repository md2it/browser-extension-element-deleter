import { DELETER_HIGHLIGHT_PAGE_CSS } from "./deleter-page-styles";

export const HIGHLIGHT_STYLE_ID = "dom-deleter-highlight-style";

/** Generic pick-mode page rules (cursor, iframe hit-test, fill tint). */
export const GENERIC_HIGHLIGHT_PAGE_CSS = `
.dd-highlight {
  cursor: crosshair !important;
}
iframe {
  pointer-events: none !important;
  cursor: crosshair !important;
}
iframe.dd-highlight-fill {
  /* Approximate --dd-highlight-fill over varied iframe content (not exact rgba). */
  filter: sepia(0.65) saturate(11) hue-rotate(342deg) brightness(0.88) !important;
}
`;

const HIGHLIGHT_PAGE_CSS =
  GENERIC_HIGHLIGHT_PAGE_CSS + DELETER_HIGHLIGHT_PAGE_CSS;

export function ensurePageHighlightStyles(): void {
  if (document.getElementById(HIGHLIGHT_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = HIGHLIGHT_STYLE_ID;
  style.textContent = HIGHLIGHT_PAGE_CSS;
  document.documentElement.appendChild(style);
}

export function removePageHighlightStyles(): void {
  document.getElementById(HIGHLIGHT_STYLE_ID)?.remove();
}
