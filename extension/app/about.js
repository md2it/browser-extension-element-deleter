"use strict";
// src/about.ts
function buildAboutListItems(copy) {
  return copy.aboutBullets.map((text, index) => ({
    iconKind: "feature",
    iconHtml: ABOUT_BULLET_ICONS[index] ?? ABOUT_BULLET_ICONS[0],
    text,
  }));
}
