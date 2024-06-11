document.getElementById('downloadBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          files: ['content.js']
        },
        () => {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'getStatuses' }, (statuses) => {
            statuses.forEach(status => {
              chrome.runtime.sendMessage({ action: 'downloadStatus', url: status.url, filename: status.filename });
            });
          });
        }
      );
    });
  });
  