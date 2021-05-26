let player1 = 0;
let player2 = 0;
let total=0;
const form = document.querySelector('#form');
const pd1 = document.querySelector('#pd1');
const pd2 = document.querySelector('#pd2');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');

form.addEventListener('change',function(e){
    e.preventDefault();
    total=this.value;
    console.log(`${player1} ${player2} ${total}`);
})

p1.addEventListener('click',function(e){
    if(player1<total) player1++;
    if(player1==total)
    {
        pd1.style.color='green';
        pd2.style.color='red';
    }
    pd1.innerText = `${player1}`;
})

p2.addEventListener('click',function(e){
    if(player2<total) player2++;
    if(player2==total)
    {
        pd2.style.color='green';
        pd1.style.color='red';
    }
    pd2.innerText = `${player2}`;
})

reset.addEventListener('click',function(e){
    player1=0;
    player2=0;
    total=0;
    pd1.innerText = `${player1}`;
    pd2.innerText = `${player2}`;
    pd1.style.color = 'black';
    pd2.style.color = 'black';
})


