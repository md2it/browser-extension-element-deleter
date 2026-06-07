"use strict";
var PANEL_POPUP_HOST_STYLE =
  "display:block;width:372px;min-height:500px;position:relative;pointer-events:auto;";
async function mountPanelPopup(initialTab) {
  await mountPanelSurface(initialTab, {
    hostStyle: PANEL_POPUP_HOST_STYLE,
    surface: "popup",
  });
}
