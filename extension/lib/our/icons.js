"use strict";
// ../lib/our/icons.ts
function stripComment3(svg) {
  return svg.replace(/<!--[\s\S]*?-->\s*/g, "").trim();
}
function inlineSvg(raw) {
  return stripComment3(raw).replace(/fill="#000000"/g, 'fill="currentColor"');
}
var MD2IT2 = inlineSvg(md2it_default);
