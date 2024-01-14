let cart_btns=document.querySelectorAll("#btn");
let items_in=document.getElementById("selected");
let clicked_btn;

cart_btns.forEach(btn => {
    btn.addEventListener("click",function(){
        clicked_btn=btn
        btn.textContent="added"
    })
});

items_in.insertAdjacentHTML=clicked_btn;
console.log(items_in)