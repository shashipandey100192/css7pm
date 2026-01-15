
function msg()
{
    alert("welcome to javascript event");
}

var mybtn = document.querySelectorAll('button');
console.log(mybtn);

mybtn[0].addEventListener("click",msg);

mybtn[1].addEventListener("click",function(){
    alert("this is ano function");
})


mybtn[2].addEventListener("click",()=>{
    alert("this is arrow function ");
});


mybtn[3].addEventListener("click",()=>{
    mybtn[3].style.color='red';
    // mybtn[3].style.backgroundColor='green';
    // mybtn[3].style.fontSize='30px';
    // mybtn[3].style.padding='5px';
    // mybtn[3].style.margin='10px';
});



mybtn[4].addEventListener("click",()=>{
    mybtn[4].className="first";
});



var heading = document.getElementsByClassName("ten");

heading[0].addEventListener("click",()=>{    
    heading[0].classList.add('first',"second","third");
});

heading[0].addEventListener("dblclick",()=>{    
    heading[0].classList.remove("second","third");
});

heading[1].addEventListener("click",()=>{    
    heading[1].classList.toggle('first');
});

