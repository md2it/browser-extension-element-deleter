"use strict";
// ../lib/our/extension-icon-state/create.ts
function createExtensionIconState(config) {
  const sync = createIconSync(config);
  return {
    bootstrapToolbarIcons: sync.bootstrapToolbarIcons,
    forgetIconSyncedTab: sync.forgetIconSyncedTab,
    setGlobalToolbarIcon: sync.setGlobalToolbarIcon,
    syncIconForTab: sync.syncIconForTab,
    registerExtensionIconStateListeners: () =>
      registerExtensionIconStateListeners(sync),
    onContentActiveChanged: (tabId, active) => {
      onContentActiveChanged(sync, tabId, active);
    },
  };
}
