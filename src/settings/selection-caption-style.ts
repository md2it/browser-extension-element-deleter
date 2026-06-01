import { ext } from "../api";
import { SELECTION_CAPTION_STYLE_KEY } from "../messages";

export type SelectionCaptionStyle =
  | "none"
  | "click-to-delete"
  | "tag-id-class"
  | "selector"
  | "full-xpath";

export const DEFAULT_SELECTION_CAPTION_STYLE: SelectionCaptionStyle = "click-to-delete";

export const SELECTION_CAPTION_STYLES: readonly SelectionCaptionStyle[] = [
  "none",
  "click-to-delete",
  "tag-id-class",
  "selector",
  "full-xpath",
];

function normalizeSelectionCaptionStyle(raw: unknown): SelectionCaptionStyle {
  if (raw === "click-to-copy") return "click-to-delete";
  return SELECTION_CAPTION_STYLES.includes(raw as SelectionCaptionStyle)
    ? (raw as SelectionCaptionStyle)
    : DEFAULT_SELECTION_CAPTION_STYLE;
}

export async function getSelectionCaptionStyle(): Promise<SelectionCaptionStyle> {
  const data = await ext.storage.local.get(SELECTION_CAPTION_STYLE_KEY);
  return normalizeSelectionCaptionStyle(data[SELECTION_CAPTION_STYLE_KEY]);
}

export async function setSelectionCaptionStyle(
  style: SelectionCaptionStyle,
): Promise<void> {
  await ext.storage.local.set({ [SELECTION_CAPTION_STYLE_KEY]: style });
}
