var flag = false;
setInterval(function(){
    if(flag == false){
        document.getElementById("img1").src = "pics/twoverse.jpeg";
        document.getElementById("img2").src = "pics/verseinfield.jpg";
        document.getElementById("img3").src = "pics/130095nodad.jpg";
        document.getElementById("img4").src = "pics/rinkles.jpeg";  
        flag = true;  
    }else{
        document.getElementById("img1").src = "pics/v2.jpeg";
        document.getElementById("img2").src = "pics/verse1.jpeg";
        document.getElementById("img3").src = "pics/koppie.jpeg";
        document.getElementById("img4").src = "pics/drylands.jpg"; 
        flag = false;
    }
},7000);

function checkmobile(){
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            const items = document.getElementsByClassName("image");
            for (let i = 0; i < items.length; i++) {
                items[i].style.width = "23%";
                items[i].style.height = "19%";
                items[i].style.flexBasis = "50%";
            }
        }
}
window.addEventListener("load", checkmobile());
window.addEventListener("hashchange", checkmobile());

