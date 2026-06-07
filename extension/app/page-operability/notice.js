"use strict";
var restrictedNoticeCache = null;
async function restrictedNoticeDismissMs() {
  const seconds = await getNotificationSeconds();
  if (seconds <= 0) return RESTRICTED_NOTICE_MIN_MS;
  return seconds * 1e3;
}
async function getRestrictedNoticeDismissMs() {
  return restrictedNoticeDismissMs();
}
async function refreshRestrictedNoticeCache() {
  const [locale, dismissMs] = await Promise.all([
    getLocale(),
    restrictedNoticeDismissMs(),
  ]);
  restrictedNoticeCache = { text: t(locale).restrictedPageNotice, dismissMs };
}
async function showRestrictedNotice(tabId, windowId) {
  if (!restrictedNoticeCache) {
    await refreshRestrictedNoticeCache();
  }
  await showBlockedNotice(
    tabId,
    RESTRICTED_NOTICE_CONFIG,
    restrictedNoticeCache,
    windowId,
  );
}
