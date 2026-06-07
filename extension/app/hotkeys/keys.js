"use strict";
var ESC_HOTKEY_LABEL = ESCAPE_KEY_LABEL;
var SHORTCUTS_PREFIX_CHORD_WIN_DISPLAY = "Ctrl+Shift+X";
var SHORTCUTS_PREFIX_CHORD_MAC_DISPLAY = "Cmd+Shift+X";
var SHORTCUTS_UNDO_WIN_DISPLAY = "Ctrl+Z";
var SHORTCUTS_UNDO_MAC_DISPLAY = "⌘Z";
function compactHotkeyLabel(label) {
  return label.replace(/\s*\+\s*/g, "+");
}
function getStartHotkeyChordLabel() {
  return compactHotkeyLabel(formatPrefixChordLabel());
}
function getStartHotkeyActionLabel() {
  return PREFIX_ACTION_KEY.toUpperCase();
}
function getStartHotkeyAriaLabel() {
  return `${getStartHotkeyChordLabel()} → ${getStartHotkeyActionLabel()}`;
}
function isEscHotkeyEvent(e) {
  return isEscapeKeyEvent(e);
}
function getUndoHotkeyLabel() {
  const label = formatModifierKeyLabel("Z");
  return label.startsWith("⌘") ? "⌘Z" : label;
}
function isUndoHotkeyEvent(e) {
  return isModifierKeyEvent(e, "z");
}
