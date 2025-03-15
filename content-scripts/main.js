// Content script: runs in context of web pages
console.log('Brain Drain content script loaded!');

// Keep track of URLs we've already tried to download
const seenURLs = new Set();

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'downloadMP3') {
    const url = message.url;
    
    browser.storage.local.set({ downloadedUrls: Array.from(seenURLs) });
    
    // Check if we've already tried to download this URL
    if (seenURLs.has(url)) {
      return;
    }
    
    console.log('Detected MP3 URL:', url);
    seenURLs.add(url);
  }
});