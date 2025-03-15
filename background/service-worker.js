// Background service worker

browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    
    if (details.url.includes('audio2.brain.fm') && !details.url.includes('favicon.ico')) {
      console.log('Detected request to:', details.url);

      browser.tabs.query({ url: "*://*.brain.fm/*" }).then((tabs) => {
        if (tabs.length > 0) {
          browser.tabs.sendMessage(tabs[0].id, { action: 'downloadMP3', url: details.url });
        }
      });
    }
    
    return { cancel: false };
  },
  { urls: ["<all_urls>"] }
);
