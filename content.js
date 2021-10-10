window.onload = async () => {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  while (document.querySelector(".container__YPDh") == undefined) {
    await delay(1000);
  }
  document.querySelector(".container__YPDh").style.fontSize = "18px";
};
