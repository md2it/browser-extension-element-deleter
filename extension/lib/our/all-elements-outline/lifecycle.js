"use strict";
// ../lib/our/all-elements-outline/lifecycle.ts
function enableAllElementsOutline(config) {
  setAllElementsStyleAtEnd(config.styleId, buildAllElementsOutlineCss(config));
}
function disableAllElementsOutline(styleId) {
  removeAllElementsStyle(styleId);
}
