document.getElementById('dark-pdf-shrestha-extension').addEventListener('click', () => {
    chrome.tabs.query({ active: true,
        currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                function: injectContent
            });
    });
});

function injectContent() {
    if (!window.location.href.toString().endsWith('pdf')) {
        return;
    }
    let test = document.getElementById('dark-cover-extension-by-shresth');
    if (test && test.getAttribute('style') !== '') {
        test.setAttribute('style', '');
        return;
    }

    let coverDiv = document.createElement('div');
    coverDiv.id = 'dark-cover-extension-by-shresth';
    let css = `
        position: fixed;
        pointer-events: none;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
        mix-blend-mode: difference;
        z-index: 1;
    `;
    coverDiv.setAttribute('style', css);
    document.body.appendChild(coverDiv);
}