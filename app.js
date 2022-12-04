// test
function getColor(){
    const randomNumber= Math.floor(Math.random()*16777215);
    
    const randomcode="#"+randomNumber.toString(16);
    
    document.body.style.backgroundColor=randomcode;

}
setInterval(getColor,2000);
