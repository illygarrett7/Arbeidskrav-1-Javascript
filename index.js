//lager en liste
let harListen = [];

function harListe() {
  let produkt = document.getElementById("harProdukt").value;
  harListen.push(produkt);
  let ut = "";
  for (let produkt of harListen) {
    ut = "<li>";
    ut += produkt;
    ut += "</li>";
  }
  document.getElementById("utListe").innerHTML += ut;
}
let garTomListen = [];
function garTomListe() {
  let ut = "";
  let produkt = document.getElementById("tomProdukt").value;
  garTomListen.push(produkt);
  for (let p of garTomListen) {
    ut = "<li>";
    ut += p;
    ut += "</li>";
  }
  document.getElementById("utProdukt").innerHTML += ut;
}

//må validere listen utenfor fordi bruker hjelpefunksjon
let kjopListen = [];

function kjop() {
  //henter inputet
  let produkt = document.getElementById("produkt").value;
  let pris = document.getElementById("pris").value;

  //lager objekt
  let produktpris = {
    produkt: produkt,
    pris: parseInt(pris), //må parse pris for at det blir tall
  };
  //Sjekker om prisen er riktig
  if (pris == 0) {
    alert("Produktet kan ikke være 0 ");
  } else if (isNaN(pris)) {
    alert("skirv inn tall");
  } else {
    kjopListen.push(produktpris);
    console.log(kjopListen);
    skrivut();
  }
  //nulstill inputtboksene
  document.getElementById("produkt").value = "";
  document.getElementById("pris").value = "";
}
function skrivut() {
  let totalbelop = 0;
  let ut = "";
  for (let p of kjopListen) {
    ut = "<li>";
    ut += p.produkt + " " + p.pris + "kr";
    ut += "</li>";
    totalbelop += p.pris;
  }

  document.getElementById("totalbelop").innerHTML +=
    ut + "totalbeløpet er lik " + totalbelop + "kr";
}

function slett() {
  let result = confirm("ønsker du å slette vare");
  if (result) {
    kjopListen.splice(-1);
    document.getElementById("totalbelop").innerHTML = "";
    skrivut();
  }
}
function slett1() {
  let result = confirm("ønsker du å slette vare");
  if (result) {
    harListen.splice(-1, 1);
    document.getElementById("utListe").innerHTML = "";
    harListe();
  }
}
function slett2() {
  let result = confirm("ønsker du å slette vare");
  if (result) {
    garTomListen.splice(0, 2);
    document.getElementById("utProdukt").innerHTML = "";
    garTomListe();
  }
}
