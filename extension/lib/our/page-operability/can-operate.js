"use strict";
// ../lib/our/page-operability/can-operate.ts
function scriptingTarget(tabId, frameId) {
  return frameId !== void 0 && frameId !== 0
    ? { tabId, frameIds: [frameId] }
    : { tabId };
}
function messageOptions(frameId) {
  return frameId !== void 0 && frameId !== 0 ? { frameId } : void 0;
}
async function canOperateOnTab(tabId, frameId) {
  try {
    const response = await ext.tabs.sendMessage(
      tabId,
      { type: PROBE_DOCUMENT_OPERABILITY },
      messageOptions(frameId),
    );
    if (response === true) return true;
    if (response === false) return false;
  } catch {}
  try {
    const [result] = await ext.scripting.executeScript({
      target: scriptingTarget(tabId, frameId),
      func: probeDocumentOperability,
    });
    return result?.result === true;
  } catch {
    return false;
  }
}
