const serverUrI = 'http://localhost:3000/'

chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    if (request.event == "sendLastVisitedUrl") {
        chrome.history.search({text: '', maxResults: 1}, data => sendJson(serverUrI +'api/addVisitedUrl',{name: 'Or Halimi', url: data[0].url}));
    }
});

function sendJson(url,json){
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json)
    });
}