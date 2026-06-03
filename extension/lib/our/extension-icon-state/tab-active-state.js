"use strict";
// ../lib/our/extension-icon-state/tab-active-state.ts
var tabActive = /* @__PURE__ */ new Map();
function getTabActiveState(tabId) {
  return tabActive.get(tabId) ?? false;
}
function setTabActiveState(tabId, active) {
  tabActive.set(tabId, active);
}
function deleteTabActiveState(tabId) {
  tabActive.delete(tabId);
}
function clearTabActiveState(tabId) {
  tabActive.set(tabId, false);
}
function forEachActiveTabId(fn) {
  for (const tabId of tabActive.keys()) {
    if (tabActive.get(tabId)) fn(tabId);
  }
}
