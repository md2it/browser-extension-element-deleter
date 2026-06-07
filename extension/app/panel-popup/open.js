"use strict";
function openPanelInActionPopup2(panelTab, target) {
  openPanelInActionPopup(PANEL_PAGE_CONFIG, panelTab, target, openPanelInTab);
}
function openPanelFromSender(panelTab, senderTab) {
  openPanelInActionPopup2(panelTab, {
    tabId: senderTab?.id,
    windowId: senderTab?.windowId,
  });
}
