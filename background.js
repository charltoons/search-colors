let isActive;
console.log("background loaded");

chrome.browserAction.onClicked.addListener(function(tab) {
  isActive = !isActive;
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { ___found_color_action: isActive ? "enable" : "disable" },
      function(response) {}
    );
  });
});

chrome.runtime.onMessage.addListener(function(message, callback) {
  console.log("message", message);
});
