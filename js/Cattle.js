  function showImage(img) {
    const popup = document.querySelector(".image-popup");
    const popupImg = document.querySelector(".image-popup-content");
    popupImg.src = "pics/letterPlatinum.png";
    popup.style.display = "block";
  }
  
  function hideImage() {
    const popup = document.querySelector(".image-popup");
    popup.style.display = "none";
  }
  function checkmobile(){
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            const items =  document.getElementsByClassName("CCimg");
            const text =  document.getElementsByClassName("ccpp");
            const cowcon = document.getElementsByClassName("CowContaier");
            const ccInfo = document.getElementsByClassName("CCInfo");
            
            ccInfo[0].style.flexDirection = "column";
            cowcon[0].style.flexDirection = "column";
            
            for (let i = 0; i < items.length; i++) {
                items[i].style.fontSize = "0.75rem";
                text[i].style.fontSize = "1rem";
            }
        }
}
window.addEventListener("load", checkmobile());
window.addEventListener("hashchange", checkmobile());
