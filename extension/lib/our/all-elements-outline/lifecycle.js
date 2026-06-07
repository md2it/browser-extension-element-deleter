"use strict";
function enableAllElementsOutline(config) {
  setAllElementsStyleAtEnd(config.styleId, buildAllElementsOutlineCss(config));
}
function disableAllElementsOutline(styleId) {
  removeAllElementsStyle(styleId);
}
