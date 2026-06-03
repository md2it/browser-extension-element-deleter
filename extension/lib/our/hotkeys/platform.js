"use strict";
// ../lib/our/hotkeys/platform.ts
function isMacPlatform() {
  return (
    /Mac|iPhone|iPad|iPod/.test(navigator.userAgent) ||
    navigator.platform.toUpperCase().includes("MAC")
  );
}
