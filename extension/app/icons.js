"use strict";
// src/icons.ts
function stripComment2(svg) {
  return svg.replace(/<!--[\s\S]*?-->\s*/g, "").trim();
}
function lucideUiIcon2(raw) {
  return stripComment2(raw);
}
function brandIcon2(raw) {
  return stripComment2(raw).replace(/fill="#000000"/g, 'fill="currentColor"');
}
var MD2IT = brandIcon2(md2it_default);
var UNDO_2 = lucideUiIcon2(undo_2_default);
var CHEVRON_LEFT = lucideUiIcon2(chevron_left_default);
var CHEVRON_RIGHT = lucideUiIcon2(chevron_right_default);
var CHEVRONS_LEFT = lucideUiIcon2(chevrons_left_default);
var CHEVRONS_RIGHT = lucideUiIcon2(chevrons_right_default);
var INACTIVE_BG = "#f00";
var TOOLBAR_VIEWBOX = 24;
var TOOLBAR_RADIUS_RATIO = 0.18;
var TOOLBAR_PAD_RATIO = 0.1;
var elementDeleterLogoInner = stripFullBackgroundRect(
  innerSvgMarkup(stripComment2(icon_default)),
);
function innerSvgMarkup(svg) {
  const match = svg.match(/<svg[\s\S]*?>([\s\S]*)<\/svg>/i);
  return match ? match[1].trim() : svg;
}
function stripFullBackgroundRect(inner) {
  const match = inner.match(/^\s*(<rect\b[^>]*\/?>)/i);
  if (!match) return inner;
  const tag = match[1];
  const x = Number(svgAttr(tag, "x") ?? 0);
  const y = Number(svgAttr(tag, "y") ?? 0);
  const w = Number(svgAttr(tag, "width"));
  const h = Number(svgAttr(tag, "height"));
  const fill = svgAttr(tag, "fill");
  if (
    x === 0 &&
    y === 0 &&
    w === 24 &&
    h === 24 &&
    fill &&
    !/^none$/i.test(fill)
  ) {
    return inner.slice(match[0].length).trimStart();
  }
  return inner;
}
function svgAttr(tag, name) {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`));
  return m?.[1];
}
var trash2Inner = innerSvgMarkup(stripComment2(trash_2_default));
function trashMarkGroup(stroke) {
  return `<g fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${trash2Inner}</g>`;
}
function extensionMarkSvg(options) {
  switch (options.variant) {
    case "toast":
      return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">${trashMarkGroup("#ffffff")}</svg>`;
    case "panel":
      return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">${trashMarkGroup("currentColor")}</svg>`;
  }
}
var ABOUT_BULLET_ICONS = [
  lucideUiIcon2(trash_2_default),
  lucideUiIcon2(circle_power_default),
  lucideUiIcon2(undo_2_default),
  ROTATE_CW,
  lucideUiIcon2(shield_check_default),
  lucideUiIcon2(shield_check_default),
];
function toolbarWelcomeIconSvg(bg = INACTIVE_BG, size = 16) {
  const r = TOOLBAR_VIEWBOX * TOOLBAR_RADIUS_RATIO;
  const pad = TOOLBAR_VIEWBOX * TOOLBAR_PAD_RATIO;
  const scale = (TOOLBAR_VIEWBOX - pad * 2) / TOOLBAR_VIEWBOX;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${TOOLBAR_VIEWBOX} ${TOOLBAR_VIEWBOX}" aria-hidden="true"><rect width="${TOOLBAR_VIEWBOX}" height="${TOOLBAR_VIEWBOX}" rx="${r}" fill="${bg}"/><g fill="#ffffff" transform="translate(${pad} ${pad}) scale(${scale})">${elementDeleterLogoInner}</g></svg>`;
}
var ACTIVE_BG = INACTIVE_BG;
function drawInnerSvg(ctx, inner) {
  ctx.fillStyle = "transparent";
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (const m of inner.matchAll(/<line\b[^>]*\/?>/g)) {
    const tag = m[0];
    const x1 = Number(svgAttr(tag, "x1"));
    const y1 = Number(svgAttr(tag, "y1"));
    const x2 = Number(svgAttr(tag, "x2"));
    const y2 = Number(svgAttr(tag, "y2"));
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  for (const m of inner.matchAll(/<rect\b[^>]*\/?>/g)) {
    const tag = m[0];
    const x = Number(svgAttr(tag, "x") ?? 0);
    const y = Number(svgAttr(tag, "y") ?? 0);
    const w = Number(svgAttr(tag, "width"));
    const h = Number(svgAttr(tag, "height"));
    const rx = Number(svgAttr(tag, "rx") ?? 0);
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, rx);
    ctx.stroke();
  }
  for (const m of inner.matchAll(/<path\b[^>]*\/?>/g)) {
    const tag = m[0];
    const d = svgAttr(tag, "d");
    if (!d) continue;
    const path = new Path2D(d);
    const fill = svgAttr(tag, "fill");
    const stroke = svgAttr(tag, "stroke");
    if (fill && !/^none$/i.test(fill) && !/^url\(/i.test(fill)) ctx.fill(path);
    if (stroke && !/^none$/i.test(stroke) && !/^url\(/i.test(stroke))
      ctx.stroke(path);
    if (!fill && !stroke) ctx.stroke(path);
  }
}
function drawToolbarIcon(size, bg) {
  const canvas = new OffscreenCanvas(size, size);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2d context unavailable");
  const r = size * TOOLBAR_RADIUS_RATIO;
  const pad = size * TOOLBAR_PAD_RATIO;
  const scale = (size - pad * 2) / TOOLBAR_VIEWBOX;
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.roundRect(0, 0, size, size, r);
  ctx.fill();
  ctx.save();
  ctx.translate(pad, pad);
  ctx.scale(scale, scale);
  drawInnerSvg(ctx, elementDeleterLogoInner);
  ctx.restore();
  return ctx.getImageData(0, 0, size, size);
}
var toolbarCache = null;
function getToolbarIconSets() {
  if (toolbarCache) return toolbarCache;
  const sizes = [16, 32, 48, 128];
  const inactive = {};
  const active = {};
  for (const size of sizes) {
    const key = String(size);
    inactive[key] = drawToolbarIcon(size, INACTIVE_BG);
    active[key] = drawToolbarIcon(size, ACTIVE_BG);
  }
  toolbarCache = { inactive, active };
  return toolbarCache;
}
