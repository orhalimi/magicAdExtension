
function bindToAllBtns(func){
  const btns = document.getElementsByTagName('img');
  for(let i = 0; i < btns.length; i++){
    let btn = btns[i];
    btn.addEventListener('click',func);
  }
}

function sendLastVisitUrl(){
  // console.log(chrome);
  // chrome.history.search({text: '', maxResults: 1}, (data) => console.log(data[0].url));
  chrome.runtime.sendMessage
}

function post(url,data){

}

bindToAllBtns(sendLastVisitUrl);