let isActive

const toggle = () => {
  chrome.tabs.executeScript({
    code: 'document.body.classList.toggle("___found_color_active")'
  })
}

chrome.browserAction.onClicked.addListener(function(tab) {

  if (typeof isActive === 'undefined'){
    return chrome.tabs.insertCSS( tab.id, {
      file: './inject.css'
    }, toggle())
  }

  toggle()
});