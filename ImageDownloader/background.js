// 1) Command handler
chrome.commands.onCommand.addListener((command) => {
    if (command === 'set-folder') {
        // Opens popup.html as an action popup
        chrome.action.openPopup();
    }
    else if (command === 'download-image') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            if (!tab || !tab.id) return;
            // Inject in-page helper
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: extractImageInfo
            });
        });
    }
});

// 2) Runs in-page: grabs #image, parses ?id= from URL, sends both back
function extractImageInfo() {
    const img = document.getElementById('image');
    if (!img) {
        alert('No image found!');
        return;
    }
    const url = img.src;

    const pageURL = new URL(window.location.href);
    const id = pageURL.searchParams.get('id') || Date.now();
    const filename = `${id}.jpg`;

    chrome.runtime.sendMessage({
        type: 'IMAGE_INFO',
        url,
        filename
    });
}

// 3) Receive image info & download
chrome.runtime.onMessage.addListener((message) => {
    if (message.type !== 'IMAGE_INFO') return;

    chrome.storage.local.get('subfolder', ({ subfolder }) => {
        let { url, filename } = message;
        // If user set a subfolder, prefix it
        if (subfolder) {
            // sanitize just in case:
            filename = `${subfolder}/${filename}`;
        }

        chrome.downloads.download({
            url,
            filename,
            conflictAction: 'uniquify',
            saveAs: false
        });
    });
});
