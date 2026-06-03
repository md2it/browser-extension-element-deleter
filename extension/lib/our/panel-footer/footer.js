"use strict";
// ../lib/our/panel-footer/footer.ts
var PANEL_FOOTER_LINKS = [
  { href: PANEL_FOOTER_LINKEDIN_URL, title: "LinkedIn", iconHtml: LINKEDIN },
  { href: PANEL_FOOTER_MD2IT_URL, title: "MD2IT", iconHtml: MD2IT2 },
];
function createFooterLink(link) {
  const anchor = document.createElement("a");
  anchor.href = link.href;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.title = link.title;
  anchor.innerHTML = link.iconHtml;
  return anchor;
}
function attachPanelFooterLinks(footer) {
  for (const anchor of Array.from(footer.querySelectorAll("a[href]"))) {
    anchor.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
}
function createPanelFooter(config) {
  const footer = document.createElement("div");
  footer.className = config.footerClassName;
  for (const link of PANEL_FOOTER_LINKS) {
    footer.appendChild(createFooterLink(link));
  }
  attachPanelFooterLinks(footer);
  return footer;
}
