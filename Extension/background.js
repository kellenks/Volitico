window.notifi = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  window.notifi[request.url] = request.count
})

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({url: 'popup.html'})
  chrome.tabs.create({url: 'https://www.google.com/finance?tab=yourstocks'})
})