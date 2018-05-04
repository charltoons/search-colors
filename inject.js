console.log("injected");

const onBodyClicked = e => {
  // Google Images
  if (e.target.classList.contains("rg_i")) {
    console.log("google images");
  }
};

const enable = () => {
  document.body.classList.add("___found_color_active");
  document.body.addEventListener("click", onBodyClicked, true);
};

const disable = () => {
  document.body.classList.add("___found_color_active");
  document.body.removeEventListener("click", onBodyClicked, true);
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );

  console.log(request);
  if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
});
