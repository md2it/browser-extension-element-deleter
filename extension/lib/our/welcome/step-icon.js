"use strict";
// ../lib/our/welcome/step-icon.ts
function welcomeStepIcon(raw, size = 14) {
  return raw.replace("<svg ", `<svg width="${size}" height="${size}" `);
}
