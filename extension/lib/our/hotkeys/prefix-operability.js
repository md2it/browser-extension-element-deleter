"use strict";
// ../lib/our/hotkeys/prefix-operability.ts
async function queryPrefixHintCanShowInContent() {
  return probeDocumentOperability();
}
function notifyPrefixHintBlockedOnBackground() {
  void ext.runtime.sendMessage({ type: PREFIX_HINT_BLOCKED }).catch(() => {});
}
var operabilityListenersRegistered = false;
function registerPrefixHintOperabilityListeners(handlers) {
  if (operabilityListenersRegistered) return;
  operabilityListenersRegistered = true;
  ext.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const tabId = sender.tab?.id;
    if (tabId === void 0) return;
    const msg = message;
    if (msg.type === PREFIX_HINT_CAN_SHOW) {
      void handlers.canOperateOnTab(tabId).then((ok) => {
        sendResponse(ok);
      });
      return true;
    }
    if (msg.type === PREFIX_HINT_BLOCKED) {
      void handlers.onBlockedOnTab?.(tabId, sender.tab?.windowId);
    }
  });
}
