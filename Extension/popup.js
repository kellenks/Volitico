document.addEventListener('DOMContentLoaded', function () {

  const bg = chrome.extension.getBackgroundPage()
  Object.keys(bg.notifi).forEach(function (url) {
    const div = document.createElement('div')
    div.textContent = `${url}: ${bg.notifi[url]}`
    document.body.appendChild(div)
  })

}, false)