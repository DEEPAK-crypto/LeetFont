chrome.tabs.query(
  {
    currentWindow: true,
    active: true,
  },
  function (foundTabs) {
    if (foundTabs.length > 0) {
      var url = foundTabs[0].url;
      if (!url.includes("https://leetcode.com/problems/"))
        document.querySelector(".nonleet").style.display = "block";
      else {
        document.querySelector(".leet").style.display = "block";
      }
    }
  }
);

document.querySelector("select").addEventListener("change", (e) => {
  selectedFont(e.target.value);
});

function selectedFont(fontsize) {
  chrome.tabs.executeScript({
    code: `document.querySelector(".container__YPDh").style.fontSize = "${fontsize}"`,
  });
}
