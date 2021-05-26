let player1 = 0;
let player2 = 0;
let total=0;
const form = document.querySelector('#form');
const h = document.querySelector('h2');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');

form.addEventListener('submit',function(e){
    e.preventDefault();
    total=this.elements.select.value;
})

p1.addEventListener('click',function(e){
    if(player1<total) player1++;
    if(player1==total)
    {
        p1.style.color='green';
        p2.style.color='red';
    }
    h.innerText = `${player1} to ${player2}`;
})

p2.addEventListener('click',function(e){
    if(player2<total) player2++;
    if(player2==total)
    {
        p2.style.color='green';
        p1.style.color='red';
    }
    h.innerText = `${player1} to ${player2}`;
})

reset.addEventListener('click',function(e){
    player1=0;
    player2=0;
    total=0;
    h.innerText = `${player1} to ${player2}`;
})


