"use strict";
// src/extension-icon-state/index.ts
var iconState = createExtensionIconState({
  paths: TOOLBAR_ICON_PATHS,
  syncedTabIdsStorageKey: ICON_SYNCED_TAB_IDS_KEY,
  logLabel: ICON_STATE_LOG_LABEL,
});
var {
  bootstrapToolbarIcons,
  forgetIconSyncedTab,
  onContentActiveChanged: onContentActiveChanged2,
  registerExtensionIconStateListeners: registerExtensionIconStateListeners2,
  setGlobalToolbarIcon,
  syncIconForTab,
} = iconState;
