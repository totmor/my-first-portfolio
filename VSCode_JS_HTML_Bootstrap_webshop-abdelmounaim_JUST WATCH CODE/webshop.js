//producten via js hieronder toevoegen

console.log("Toevoegen van producten bezig...");
let ontbijtProducten = [
  {
    naam: "Bruin brood vierkant",
    img: "/Beelden/Bruin-brood.jpg",
    prijs: 1.49,
  },
  { naam: "Wit brood vierkant", img: "/Beelden/Wit-brood.jpg", prijs: 1.99 },
  { naam: "Kramiek brood", img: "/Beelden/Kramiek-brood.jpeg", prijs: 2.49 },
  { naam: "Boter", img: "/Beelden/Boter.jpg", prijs: 3.49 },
  { naam: "Gouda kaas", img: "/Beelden/Gouda-kaas.png", prijs: 4.49 },
  { naam: "Aardbei confituur", img: "/Beelden/Aardbei-jam.png", prijs: 1.34 },
  { naam: "Abrikoos-jam", img: "/Beelden/Abrikoos-jam.jpeg", prijs: 1.39 },
  { naam: "Nutella", img: "/Beelden/Nutella.webp", prijs: 5.99 },
  { naam: "Luikse siroop", img: "/Beelden/Luikse-siroop.webp", prijs: 2.24 },
  {
    naam: "Boterkoek met rozijnen",
    img: "/Beelden/Boterkoek-met-rozijnen.jpg",
    prijs: 0.99,
  },
  {
    naam: "Lipton thee moroccan mint",
    img: "/Beelden/Thee-lipton-moroccan-mint-spices.jpeg",
    prijs: 2.29,
  },
  {
    naam: "Smeerkaas van Maredsous",
    img: "/Beelden/Kaas-Maredsous.png",
    prijs: 4.29,
  },
  {
    naam: "Cappuccino",
    img: "/Beelden/Cappuccino-nescafe-gold.webp",
    prijs: 2.99,
  },
  { naam: "water van Spa", img: "/Beelden/Water-Spa.jpg", prijs: 0.85 },
  {
    naam: "Fristi rood fruit",
    img: "/Beelden/Fristi-rood-fruit.jpg",
    prijs: 4.15,
  },
  {
    naam: "Sinaasappelsap",
    img: "/Beelden/sinaasappelsap-2l.png",
    prijs: 2.49,
  },
  { naam: "Pindakaas", img: "/Beelden/Pindakaas-calvé.jpeg", prijs: 9.99 },
  {
    naam: "Kellogs frosted flakes",
    img: "/Beelden/Kellogs-frosted-flakes.webp",
    prijs: 5.99,
  },
  {
    Naam: "Kellogs cornflakes",
    img: "/Beelden/Kellogs-corn-flakes.webp",
    prijs: 4.99,
  },
  { Naam: "Volle melk", img: "/beelden/Volle-melk.png", prijs: 1.09 },
  { naam: "Halfvolle melk", img: "/Beelden/Halfvolle-melk.png", prijs: 1.09 },
  { naam: "Scharreleieren", img: "/Beelden/Eieren.png", prijs: 1.89 },
  { naam: "Ontbijtkoekjes", img: "/Beelden/Ontbijtkoekjes.jpeg", prijs: 3.99 },
  { naam: "Havermout", img: "/Beelden/Quaker-havermout.webp", prijs: 4.09 },
];

let gezondeProducten = [
  { naam: "Rode appels", img: "/Beelden/Jonagold-appelen.jpg", prijs: 1.79 },
  {
    naam: "Groene appels",
    img: "/Beelden/Granny-smith-appelen.jpg",
    prijs: 1.74,
  },
  { naam: "Peren", img: "/Beelden/Doyenné-peren.jpg", prijs: 1.99 },
  { naam: "Bananen", img: "/Beelden/bananen.jpg", prijs: 2.19 },
  { naam: "Sinaasappels", img: "/Beelden/Sinaasappels.jpg", prijs: 1.49 },
  { naam: "Mandarijnen", img: "/Beelden/mandarijnen.jpg", prijs: 2.09 },
  { naam: "Broccoli", img: "/Beelden/Broccolli.jpg", prijs: 0.79 },
  { naam: "Tomaten", img: "/Beelden/Tomaten.jpg", prijs: 2.29 },
];

//logo voor de product-toevoegen knop
const btnSVG = ` <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>`;

//Hieronder voor een elk product een card toegevoegd aan de html.
let id = 0;

for (let rep = 0; rep < ontbijtProducten.length; rep++) {
  ontbijtDiv.innerHTML += `<div class="col">
    <div class="card mb-2" id="card${id}">
        <img src=${ontbijtProducten[rep].img} class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"  style="text-align: center;">${ontbijtProducten[rep].naam}</h5>
            <p style="text-align: center;">€ ${ontbijtProducten[rep].prijs}</p> 
            <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="button" id="button${id}">
                           ${btnSVG}
                        </button>
                       
                      </div> 
        </div>
    </div>
    
</div>`;

  id++;
}

console.log(`Ontbijtproducten toegevoegd`);
//Hieronder toevoeging van gezonde producten.
for (let rep = 0; rep < gezondeProducten.length; rep++) {
  GezondeProductenDiv.innerHTML += `<div class="col">
    <div class="card mb-2" id="card${id}">
        <img src=${gezondeProducten[rep].img} class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"  style="text-align: center;">${gezondeProducten[rep].naam}</h5>
            <p style="text-align: center;">€ ${gezondeProducten[rep].prijs}</p>  
            <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button" id="button${id}">
               ${btnSVG}
            </button>
           
          </div> 
        </div>
    </div>
    
</div>`;
  id++;
}

let productButtonsNode = productensection.querySelectorAll(".btn");

let winkelkarArray = [];
if (JSON.parse(localStorage.getItem("shopKarArray"))) {
  winkelkarArray = JSON.parse(localStorage.getItem("shopKarArray"));
}

function GetProductPrijs(i) {
  let separate =
    productButtonsNode[
      i
    ].parentElement.previousElementSibling.textContent.split(" ");
  return parseFloat(separate[1]).toFixed(2);
}

function GetProductNaam(i) {
  let prodName =
    productButtonsNode[
      i
    ].parentElement.previousElementSibling.previousElementSibling.textContent.trim();
  return prodName;
}

let purchaseId = 0;
if (localStorage.prId) {
  purchaseId = localStorage.prId;
}

let winkelkar = document.getElementById("$winkelkar");

let price = 0.0;

if (localStorage.winkelkarhtml) {
  document.getElementById("$winkelkar").innerHTML += localStorage.winkelkarhtml;
  if (localStorage.totaal) {
    price =
      localStorage.totaal > 0
        ? parseFloat(localStorage.totaal).toFixed(2)
        : 0.0;
    document.getElementById("totaalprijs").innerText = localStorage.totaal;
  }
}

let btns = productButtonsNode;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener(`click`, function () {
    let chosenProduct = {
      id: purchaseId,
      naam: GetProductNaam(i),
      prijs: GetProductPrijs(i),
    };
    winkelkarArray.push(chosenProduct);
    localStorage.setItem("shopKarArray", JSON.stringify(winkelkarArray));
    price = (parseFloat(price) + parseFloat(chosenProduct.prijs)).toFixed(2);

    winkelkar.innerHTML += `<div class="row" id="purchase${chosenProduct.id}"> 
  <div class="col" id="aankoopId${chosenProduct.id}">
  ${chosenProduct.id}
  </div>
  <div class="col">
  ${chosenProduct.naam}
  </div>
  <div class="col" id="aankoopPrijs${chosenProduct.id}">
  ${chosenProduct.prijs}
  </div>
  <div class="col">
  <button class="btn btn-danger">verwijderen</button>
  </div>
  </div>
  
  `;
    purchaseId++;
    localStorage.setItem("prId", purchaseId);
    localStorage.setItem("winkelkarhtml", winkelkar.innerHTML);
    document.getElementById("totaalprijs").innerText = price;

    localStorage.setItem("totaal", price);

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let winkelkarBtns = $winkelkar.querySelectorAll(".btn");

    if (winkelkarBtns) {
      for (let i = 0; i < winkelkarBtns.length; i++) {
        if (winkelkarBtns[i]) {
          winkelkarBtns[i].addEventListener("click", function () {
            let purchaseRowId = winkelkarBtns[i].parentElement.parentElement.id;
            console.log("todelete object id =" + purchaseRowId);
            purchaseRow = winkelkarBtns[i].parentElement.parentElement;

            price = (
              parseFloat(price) -
              parseFloat(this.parentElement.previousElementSibling.innerText)
            ).toFixed(2);
            let index = winkelkarArray.findIndex(
              (obj) => obj.id === purchaseRowId
            );
            winkelkarArray.splice(index, 1);
            document.getElementById("totaalprijs").innerText = price;

            purchaseRow.parentElement.removeChild(purchaseRow);

            localStorage.setItem("winkelkarhtml", winkelkar.innerHTML);
            localStorage.setItem("totaal", price);
          });
        }
      }
    }
  });
}

let paybtn = document.getElementById("payButton");

let forms = document.forms;
let deForm = forms.mijnForm;
console.log(forms);
function RunPayment() {
  if (deForm.formNaam.value === "") {
    deForm.formNaam.classList.add("is-invalid");
  } else {
    deForm.formNaam.classList.remove("is-invalid");
  }

  if (deForm.formVoornaam.value === "") {
    deForm.formVoornaam.classList.add("is-invalid");
  } else {
    deForm.formVoornaam.classList.remove("is-invalid");
  }

  if (deForm.formPhone.value === "") {
    deForm.formPhone.classList.add("is-invalid");
  } else {
    deForm.formPhone.classList.remove("is-invalid");
  }

  if (deForm.formDate.value === "") {
    deForm.formDate.classList.add("is-invalid");
  } else {
    deForm.formDate.classList.remove("is-invalid");
  }

  if (deForm.formTime.value === "") {
    deForm.formTime.classList.add("is-invalid");
  } else {
    deForm.formTime.classList.remove("is-invalid");
  }

  if (deForm.formStreet.value === "") {
    deForm.formStreet.classList.add("is-invalid");
  } else {
    deForm.formStreet.classList.remove("is-invalid");
  }

  if (deForm.formCity.value === "") {
    deForm.formCity.classList.add("is-invalid");
  } else {
    deForm.formCity.classList.remove("is-invalid");
  }

  localStorage.setItem("naam2", deForm.formNaam.value);
  localStorage.setItem("voornaam2", deForm.formVoornaam.value);
  localStorage.setItem("phone2", deForm.formPhone.value);
  localStorage.setItem("date2", deForm.formDate.value);
  localStorage.setItem("time2", deForm.formTime.value);
  localStorage.setItem("straat2", deForm.formStreet.value);
  localStorage.setItem("stad2", deForm.formCity.value);
  localStorage.setItem("totaal", price);
}

paybtn.addEventListener("click", function () {
  RunPayment();
});
