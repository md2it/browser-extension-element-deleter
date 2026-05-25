import { createToastUiClasses } from "../../SHARED/src/toast";

export const UI_HOST_ATTR = "data-dom-deleter-ui";
export const UI_CLASS_PREFIX = "dd";

export const TOAST_STACK_ID = "dd-toast-stack";

export const TOAST_STACK_CONFIG = {
  stackId: TOAST_STACK_ID,
  hostAttr: UI_HOST_ATTR,
  classes: createToastUiClasses(UI_CLASS_PREFIX),
} as const;

export const PANEL_FOOTER_CONFIG = {
  footerClassName: "dd-panel-footer",
} as const;
