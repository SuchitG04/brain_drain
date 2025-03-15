const downloadButtons = document.getElementById('downloadButtons');
const downloadedUrls = browser.storage.local.get('downloadedUrls').then((result) => {
  for (let url of result.downloadedUrls) {
    const button = document.createElement('button');

    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop();

    const fileName = url
                        .replace('%20', ' ')
                        .split('/').pop()
                        .split(/\d+/)[0];

    button.textContent = fileName;
    button.appendChild(link);
    button.addEventListener('click', () => {
      link.click();
    });

    downloadButtons.appendChild(button);
  }
});