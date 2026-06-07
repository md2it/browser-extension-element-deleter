"use strict";
function getPanelPageUrl(pageHtml) {
  return ext.runtime.getURL(pageHtml);
}
function isPanelPage(href, pageHtml) {
  return href.startsWith(getPanelPageUrl(pageHtml));
}
function panelPagePath(pageHtml, panelTab, extraParams, tabQueryParam = "tab") {
  const params = new URLSearchParams({
    [tabQueryParam]: panelTab,
    ...extraParams,
  });
  return `${pageHtml}?${params.toString()}`;
}
