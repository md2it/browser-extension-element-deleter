"use strict";
// src/about.ts
var ABOUT_AUTHOR_URL = "https://www.linkedin.com/in/alex-terekhov/";
function buildAboutListItems(copy) {
  return copy.aboutBullets.map((text, index) => ({
    iconKind: "feature",
    iconHtml: ABOUT_BULLET_ICONS[index] ?? ABOUT_BULLET_ICONS[0],
    text,
  }));
}
