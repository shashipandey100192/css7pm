function abc()
{
var myid = document.getElementById('second');
var mydate = new Date();
var s = mydate.getSeconds();
myid.innerHTML=s;
// myid.style.transform="rotate("+(s*6)+"deg)";
myid.style.transform=`rotate(${s*6}deg)`;

}
setInterval("abc()",1000);