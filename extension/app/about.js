"use strict";
var ABOUT_AUTHOR_URL = "https://www.md2it.com/";
function buildAboutListItems(copy) {
  return copy.aboutBullets.map((text, index) => ({
    iconKind: "feature",
    iconHtml: ABOUT_BULLET_ICONS[index] ?? ABOUT_BULLET_ICONS[0],
    text,
    href: index === copy.aboutBullets.length - 1
      ? "https://github.com/md2it/browser-extension-element-deleter"
      : undefined,
  }));
}
