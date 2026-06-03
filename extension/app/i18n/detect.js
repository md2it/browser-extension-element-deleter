"use strict";
// src/i18n/detect.ts
function mapLanguageTag(tag) {
  const chinese = mapChineseUiLocale(tag);
  if (chinese) return chinese;
  const lower = tag.trim().toLowerCase().replace(/_/g, "-");
  const base = lower.split("-")[0];
  const map = {
    en: "en",
    es: "es",
    fr: "fr",
    de: "de",
    ru: "ru",
    ar: "ar",
  };
  return map[base] ?? null;
}
function detectLocale2() {
  return detectLocale(mapLanguageTag, "en");
}
