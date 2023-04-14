document.getElementById("FarmWeekly1").addEventListener("click",function(){
    window.open("https://www.farmersweekly.co.za/subscribe-to-our-magazine/attachment/farmers-weekly-12-february-2021/","_blank");
});
document.getElementById("FarmWeekly2").addEventListener("click",function(){
    window.open("https://www.magzter.com/ZA%2FCTP-Limited-ta-Farmer%E2%80%99s-Weekly%2FFarmers-Weekly%2FBusiness%2F292872","_blank");
});
document.getElementById("FarmWeekly3").addEventListener("click",function(){
    window.open("https://www.zinio.com/za/farmer-s-weekly/14-october-2016-i17793","_blank");
});

function checkmobile(){
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            const items = document.getElementsByClassName("ItemF");
             const bulle = document.getElementsByClassName("Item");
            const cert = document.getElementById("Cert");
            
            document.getElementById("beeflogo").style.marginTop = "-5rem";
            cert.style.flexBasis = "50%";

            for (let i = 0; i < items.length; i++) {
                items[i].style.flexBasis = "50%";
                bulle[i].style.flexBasis = "50%";
            }
        }
}
window.addEventListener("load", checkmobile());
window.addEventListener("hashchange", checkmobile());

function setFocusToFooter() {
    const footer = document.querySelector(".footer");
    footer.setAttribute("tabindex", "-1");
    footer.focus();
    footer.removeAttribute("tabindex");
  }
