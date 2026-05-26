/** PNG paths for manifest default_icon and setIcon(path) fallback (SVG unsupported in CRX). */
const INACTIVE = {
  16: "icons/icon-16.png",
  32: "icons/icon-32.png",
  48: "icons/icon-48.png",
  128: "icons/icon-128.png",
} as const;

const ACTIVE = {
  16: "icons/toolbar-active-16.png",
  32: "icons/toolbar-active-32.png",
  48: "icons/toolbar-active-48.png",
  128: "icons/toolbar-active-128.png",
} as const;

export const TOOLBAR_ICON_PATHS = {
  inactive: INACTIVE,
  active: ACTIVE,
} as const;

export type ToolbarIconMode = keyof typeof TOOLBAR_ICON_PATHS;
