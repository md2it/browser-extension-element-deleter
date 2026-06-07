"use strict";
function enableAllElementsFill(config) {
  setAllElementsStyleAtEnd(config.styleId, buildAllElementsFillCss(config));
}
function disableAllElementsFill(styleId) {
  removeAllElementsStyle(styleId);
}
