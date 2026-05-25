/**
 * Smoke: generic hotkey infra in SHARED + deleter wiring (no browser APIs).
 * Run: node scripts/smoke-hotkeys.mjs
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sharedHotkeys = join(root, "../SHARED/src/hotkeys");

/** Mirrors SHARED/src/hotkeys/platform.ts */
function isMacPlatform(ua, platform) {
  return (
    /Mac|iPhone|iPad|iPod/.test(ua) ||
    platform.toUpperCase().includes("MAC")
  );
}

/** Mirrors SHARED/src/hotkeys/keys.ts */
function isModifierShiftKeyEvent(e, key, mac) {
  const modifier = mac ? e.metaKey : e.ctrlKey;
  return modifier && e.shiftKey && e.key.toLowerCase() === key.toLowerCase();
}

function isPrefixChordKeyEvent(e, mac) {
  return isModifierShiftKeyEvent(e, "x", mac);
}

function isPrefixActionKeyEvent(e, key) {
  if (e.ctrlKey || e.metaKey || e.altKey) return false;
  return e.key.toLowerCase() === key.toLowerCase();
}

function isModifierKeyEvent(e, key, options = {}, mac) {
  const modifier = mac ? e.metaKey : e.ctrlKey;
  const shift = options.shift ?? false;
  const alt = options.alt ?? false;
  return (
    modifier &&
    Boolean(e.shiftKey) === shift &&
    Boolean(e.altKey) === alt &&
    e.key.toLowerCase() === key.toLowerCase()
  );
}

function isEscapeKeyEvent(e) {
  return e.key === "Escape";
}

/** Mirrors SHARED/src/hotkeys/suppress.ts */
const DEFAULT_TOGGLE_COMMAND_SUPPRESS_MS = 300;

function shouldSuppressContentToggleAfterToggleCommand(
  lastAt,
  now,
  windowMs = DEFAULT_TOGGLE_COMMAND_SUPPRESS_MS,
) {
  return lastAt > 0 && now - lastAt < windowMs;
}

const ev = (partial) => ({ ...partial, key: partial.key ?? "" });

assert.equal(isPrefixChordKeyEvent(ev({ ctrlKey: true, shiftKey: true, key: "X" }), false), true);
assert.equal(isPrefixChordKeyEvent(ev({ metaKey: true, shiftKey: true, key: "x" }), true), true);
assert.equal(isPrefixChordKeyEvent(ev({ ctrlKey: true, shiftKey: false, key: "X" }), false), false);

assert.equal(isPrefixActionKeyEvent(ev({ key: "d" }), "D"), true);
assert.equal(isPrefixActionKeyEvent(ev({ ctrlKey: true, key: "d" }), "D"), false);

assert.equal(isModifierKeyEvent(ev({ ctrlKey: true, key: "z" }), "z", {}, false), true);
assert.equal(isModifierKeyEvent(ev({ ctrlKey: true, shiftKey: true, key: "z" }), "z", {}, false), false);

assert.equal(isEscapeKeyEvent(ev({ key: "Escape" })), true);

assert.equal(isMacPlatform("Mozilla/5.0 (Macintosh)", "MacIntel"), true);
assert.equal(isMacPlatform("Mozilla/5.0 (Windows NT 10.0)", "Win32"), false);

assert.equal(
  shouldSuppressContentToggleAfterToggleCommand(1000, 1200),
  true,
);
assert.equal(
  shouldSuppressContentToggleAfterToggleCommand(1000, 1400),
  false,
);
assert.equal(shouldSuppressContentToggleAfterToggleCommand(0, 100), false);

const sharedIndexSrc = readFileSync(join(sharedHotkeys, "index.ts"), "utf8");
assert.match(sharedIndexSrc, /registerPrefixManifestHotkeys/);
assert.match(sharedIndexSrc, /registerPrefixStartHotkey/);
assert.match(sharedIndexSrc, /formatPrefixHotkeyLabel/);
assert.match(sharedIndexSrc, /PREFIX_ACTION_TIMEOUT_MS/);

const deleterKeysSrc = readFileSync(join(root, "src/hotkeys/keys.ts"), "utf8");
assert.match(deleterKeysSrc, /formatPrefixHotkeyLabel/);
assert.match(deleterKeysSrc, /PREFIX_ACTION_KEY/);

const deleterRegistrySrc = readFileSync(join(root, "src/hotkeys/registry.ts"), "utf8");
assert.match(deleterRegistrySrc, /registerSharedContentHotkey/);
assert.match(deleterRegistrySrc, /elementDeleter/);

const deleterBackgroundSrc = readFileSync(join(root, "src/hotkeys/background.ts"), "utf8");
assert.match(deleterBackgroundSrc, /registerPrefixManifestHotkeys/);
assert.match(deleterBackgroundSrc, /COMMAND_EXECUTE_ACTION/);
assert.match(deleterBackgroundSrc, /PREFIX_ARM_TOGGLE/);
assert.match(deleterBackgroundSrc, /TOGGLE_REQUEST/);
assert.doesNotMatch(deleterBackgroundSrc, /registerManifestCommandHotkeys/);

const commandsSrc = readFileSync(join(root, "src/hotkeys/commands.ts"), "utf8");
assert.match(commandsSrc, /toggle-delete-mode/);
assert.match(commandsSrc, /_execute_action/);
assert.match(commandsSrc, /undo-delete/);

const manifestSrc = readFileSync(join(root, "manifest.json"), "utf8");
assert.match(manifestSrc, /"_execute_action"/);
assert.match(manifestSrc, /"toggle-delete-mode"/);
assert.match(manifestSrc, /Ctrl\+Shift\+X/);

console.log("smoke-hotkeys: ok");
