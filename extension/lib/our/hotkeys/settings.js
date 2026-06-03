"use strict";
// ../lib/our/hotkeys/settings.ts
function readBooleanSetting(data, key) {
  const raw = data[key];
  return raw !== false;
}
