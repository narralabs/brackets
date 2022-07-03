console.log('[BACKGROUND] Background initialized');

chrome.runtime.onInstalled.addListener(() => {
  console.log('[BACKGROUND] Chrome extension installed');
});
