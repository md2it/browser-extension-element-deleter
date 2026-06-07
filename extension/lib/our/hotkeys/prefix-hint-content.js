"use strict";
function createContentPrefixHintSink() {
  return {
    show(letter) {
      void ext.runtime
        .sendMessage({ type: PREFIX_HINT_SHOW, letter })
        .catch(() => {});
    },
    hide() {
      void ext.runtime.sendMessage({ type: PREFIX_HINT_HIDE }).catch(() => {});
    },
  };
}
