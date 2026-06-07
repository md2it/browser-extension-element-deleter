"use strict";
var HOTKEY_NAMESPACE = "elementDeleter";
function registerContentHotkey2(slot, handler) {
  registerContentHotkey(HOTKEY_NAMESPACE, slot, handler);
}
function unregisterContentHotkey2(slot) {
  unregisterContentHotkey(HOTKEY_NAMESPACE, slot);
}
