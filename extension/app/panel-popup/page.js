"use strict";
// src/panel-popup/page.ts
function isPanelPopupPage(href) {
  return isPanelPage(href, PANEL_POPUP_PAGE);
}
async function resolvePanelPageInitialTab2() {
  return resolvePanelPageInitialTab({
    sessionTabKey: PANEL_PAGE_CONFIG.sessionTabKey,
    defaultTab: "settings",
    validTabs: PANEL_POPUP_TABS,
  });
}
async function bootstrapPanelPopupPageIfNeeded() {
  if (!isPanelPopupPage(location.href)) return;
  if (isPanelTabMode()) return;
  const tab = await resolvePanelPageInitialTab2();
  await mountPanelPopup(tab);
}
