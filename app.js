const colors= ['green','red',"rgba(133,122,200)","#f15025"];

const btn=document.getElementById('btn');
const color=document.querySelector('.color')

btn.addEventListener('click',function(){
    //get random number 0-5
    const number=getRandomNumber();
    console.log(number);
    document.body.style.backgroundColor=colors[number];
    color.textContent=colors[number]
})

function getRandomNumber(){
    return [Math.floor(Math.random() * colors.length)];

}