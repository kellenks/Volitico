const re = new RegExp('(?<=vjQh1d \"\>)[A-Z]{1,10}','g')
const matches = document.documentElement.innerHTML.match(re) || []
//hi it's Jesse
const img = chrome.extension.getURL('triplepepper.png')

//</span><span class="vjQh1d ">

document.documentElement.innerHTML = 
         document.documentElement.innerHTML.replace('<span class="vjQh1d ">QQQ</span>','<span class="vjQh1d ">QQQ<img src="'+ img + '" alt="pepper" width="60" height="20"></span>');



//document.documentElement.innerHTML = 
         //document.documentElement.innerHTML.replace('.vjQh1d{flex-shrink:0;font-weight:500;color:#212121}','.vjQh1d{flex-shrink:0;font-weight:500;color:#212121}.abc123{flex-shrink:0;font-weight:1000;color:#e80f0c}');



fetch('https://raw.githubusercontent.com/kellenks/Volitico/master/backend.json')
.then(response => response.json())
.then(data => {
  var i;
  for (i = 0; i < matches.length; i++) {
	if (Object.keys(data).includes(matches[i])) {
		console.log(matches[i])
		chrome.runtime.sendMessage({
		  url: window.location.href,
		  count: matches[i]
		})
	}
  }
 
})


/* chrome.runtime.sendMessage({
  url: window.location.href,
  count: matches
}) */
