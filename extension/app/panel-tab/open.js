"use strict";
// src/panel-tab/open.ts
function panelTabPath2(panelTab) {
  return panelTabPath(PANEL_PAGE_CONFIG.pageHtml, panelTab);
}
async function openPanelInTab(panelTab) {
  await openPanelPageInTab(panelTabPath2(panelTab), PANEL_PAGE_CONFIG.logLabel);
}
