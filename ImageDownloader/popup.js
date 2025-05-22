document.getElementById('saveBtn').addEventListener('click', () => {
    console.log("here")
    const folder = document.getElementById('folderInput').value.trim();
    chrome.storage.local.set({ subfolder: folder });
    window.close();
});


chrome.storage.local.get('subfolder', ({ subfolder }) => {
    if (subfolder) {
        document.getElementById('folderInput').value = subfolder;
    }
});
