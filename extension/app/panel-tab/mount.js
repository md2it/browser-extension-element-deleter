"use strict";
// src/panel-tab/mount.ts
async function mountPanelTab(initialTab) {
  applyPanelTabPageLayout2();
  await mountPanelSurface(initialTab, { hostStyle: PANEL_TAB_HOST_STYLE });
}
