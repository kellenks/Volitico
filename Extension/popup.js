document.addEventListener('DOMContentLoaded', function () {

  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.notifi).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.notifi[url]}`
    document.body.appendChild(div)

document.addEventListener('DOMContentLoaded', () => {
   var y = document.getElementById("index_link");
   y.addEventListener("click", openIndex);
});

function openIndex() {
 chrome.tabs.create({active: true, url: "http://www.google.com"});
}
  })

}, false)