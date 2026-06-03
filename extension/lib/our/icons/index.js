"use strict";
// ../lib/icons/index.ts
function stripComment(svg) {
  return svg.replace(/<!--[\s\S]*?-->\s*/g, "").trim();
}
function lucideUiIcon(raw) {
  return stripComment(raw);
}
function brandIcon(raw) {
  return stripComment(raw).replace(/fill="#000000"/g, 'fill="currentColor"');
}
var ARROW_UP = lucideUiIcon(arrow_up_default);
var CIRCLE_POWER = lucideUiIcon(circle_power_default);
var COG = lucideUiIcon(cog_default);
var COPY = lucideUiIcon(copy_default);
var EXTERNAL_LINK = lucideUiIcon(external_link_default);
var FILE_DOWN = lucideUiIcon(file_down_default);
var FILES = lucideUiIcon(files_default);
var IMAGE_DOWN = lucideUiIcon(image_down_default);
var IMAGES = lucideUiIcon(images_default);
var HEART = lucideUiIcon(heart_default);
var HISTORY = lucideUiIcon(history_default);
var INFO = lucideUiIcon(info_default);
var KEYBOARD = lucideUiIcon(keyboard_default);
var SETTINGS = lucideUiIcon(settings_default);
var SHIELD_CHECK = lucideUiIcon(shield_check_default);
var PIN = lucideUiIcon(pin_default);
var PLAY = lucideUiIcon(play_default);
var PUZZLE = lucideUiIcon(puzzle_default);
var ROTATE_CW = lucideUiIcon(rotate_cw_default);
var LINKEDIN = brandIcon(linkedin_default);
