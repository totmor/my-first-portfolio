


let shoppingKar= JSON.parse(localStorage.getItem("shopKarArray"));
let naam2 = localStorage.getItem('naam2');
let naamhtml= document.getElementById('naampag2');
let voornaamhtml=document.getElementById('voornaampag2');
let phonehtml=document.getElementById('phonepag2');
let datehtml=document.getElementById('datepag2');
let timehtml= document.getElementById('timepag2');
let streethtml=document.getElementById('streetpag2');
let cityhtml=document.getElementById('citypag2');
let totaalhtml= document.getElementById('totaalpag2');

let vn2=localStorage.getItem('voornaam2')
let ph2=localStorage.getItem('phone2')
let dt2=localStorage.getItem('date2')
let tm2=localStorage.getItem('time2')
let str2=localStorage.getItem('straat2')
let ct2=localStorage.getItem('stad2')
let tot2 = localStorage.getItem("totaal");

naamhtml.innerHTML="Uw naam: "+naam2;
voornaamhtml.innerHTML="uw voornaam: "+ vn2;
phonehtml.innerHTML="un telefoonnummer: " + ph2;
datehtml.innerHTML= "Bestelling wordt geleverd op: "+dt2 + "om "+ tm2+"uur.";
streethtml.innerHTML="straat: "+ str2;
cityhtml.innerHTML= ct2;
totaalhtml.innerHTML= "te betalen totaal: " +  tot2 + " euro.";


for(let i=0;i<shoppingKar.length;i++){
   
   
    document.getElementById('purchaseInformation').innerHTML+=`<p>purchase:${shoppingKar[i].id}-name:${shoppingKar[i].naam}</p>`
}

localStorage.clear()