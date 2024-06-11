function downloadStatus(url, filename) {
    chrome.runtime.sendMessage({ action: 'downloadStatus', url: url, filename: filename });
  }
  
  async function extractStatuses() {
    const statuses = [];
  
    // Select image statuses
    document.querySelectorAll('img[src^="blob:https://web.whatsapp.com/"]').forEach((img, index) => {
      const url = img.src;
      const filename = `status_image_${index + 1}.jpg`;
      statuses.push({ url, filename });
    });
  
    // Select video statuses
    const videoElements = document.querySelectorAll('video[src^="blob:https://web.whatsapp.com/"]');
  
    for (let index = 0; index < videoElements.length; index++) {
      const video = videoElements[index];
      const url = video.src;
      const filename = `status_video_${index + 1}.mp4`;
  
      const blob = await fetch(url).then(r => r.blob());
      const objectURL = URL.createObjectURL(blob);
  
      statuses.push({ url: objectURL, filename });
    }
  
    return statuses;
  }
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getStatuses') {
      extractStatuses().then(statuses => {
        sendResponse(statuses);
      });
      return true;  // Required to use asynchronous sendResponse
    }
  });
  