// Senarai URL iklan YouTube
const blockList = [
  "*://*.doubleclick.net/*",
  "*://*.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://www.youtube.com/api/stats/ads*",
  "*://www.youtube.com/pagead/*",
  "*://www.youtube.com/ptracking*",
  "*://www.youtube.com/get_midroll_info*",
  "*://www.youtube.com/ad_break*",
  "*://*.googlevideo.com/videoplayback*ad*"
];

// Block request
chrome.webRequest.onBeforeRequest.addListener(
  () => ({ cancel: true }),
  { urls: blockList },
  ["blocking"]
);
