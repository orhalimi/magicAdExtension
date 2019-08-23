
function bindToAllBtns(func){
  const btns = document.getElementsByTagName('button');
  for(let i = 0; i < btns.length; i++){
    let btn = btns[i];
    btn.addEventListener('click',func);
  }
}

function sendLastVisitedUrl(){
  chrome.runtime.sendMessage({event: "sendLastVisitedUrl"});
}

bindToAllBtns(sendLastVisitedUrl);