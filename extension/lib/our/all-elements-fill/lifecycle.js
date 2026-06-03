"use strict";
// ../lib/our/all-elements-fill/lifecycle.ts
function enableAllElementsFill(config) {
  setAllElementsStyleAtEnd(config.styleId, buildAllElementsFillCss(config));
}
function disableAllElementsFill(styleId) {
  removeAllElementsStyle(styleId);
}
