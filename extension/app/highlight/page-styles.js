"use strict";
var HIGHLIGHT_STYLE_ID = "element-deleter-highlight-style";
var HIGHLIGHT_UI = createHighlightUiClasses("dd");
var HIGHLIGHT_PAGE_CSS =
  buildGenericHighlightPageCss(HIGHLIGHT_UI) + DELETER_HIGHLIGHT_PAGE_CSS;
var DELETER_HIGHLIGHT_PAGE_STYLE = {
  styleId: HIGHLIGHT_STYLE_ID,
  pageCss: HIGHLIGHT_PAGE_CSS,
};
