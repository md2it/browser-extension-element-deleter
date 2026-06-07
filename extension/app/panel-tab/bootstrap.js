"use strict";
async function bootstrapPanelTabPageIfNeeded() {
  if (!isPanelPopupPage(location.href)) return;
  if (!isPanelTabMode()) return;
  const tab = await resolvePanelPageInitialTab2();
  await mountPanelTab(tab);
}
