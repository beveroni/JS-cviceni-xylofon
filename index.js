// console.log('Funguju');
const kameny = document.querySelectorAll('.kamen');
const nadpis = document.querySelector('h1');

const prehrajTony = (kamen) => {
  const ton = kamen.textContent;
  nadpis.textContent = ton;

  const zvuk = new Audio(`tony/${ton}.mp3`);
  zvuk.play();
};

const stisknuti = (udalost) => {
  prehrajTony(udalost.target);
};

kameny.forEach((kamen) => {
  kamen.addEventListener('click', stisknuti);
});

const stiskNaKlavesu = (e) => {
  // const code = e
  // if (code === (Digit))
};
document.addEventListener('keydown', stiskNaKlavesu);

// Přidej ovládání přes klávesnici.
// Přidej posluchač události keydown na celou stránku.
// Pokud vlastnost code vzniklé události začíná na Digit, ulož si do proměnné následující číslo. Například z Digit4 si ulož 4.
// Pokud je číslo větší nebo rovno jedné a menší nebo rovno počtu kamenů, přehraj tón na příslušném kamenu. Nezapomeň, že pole se v JavaScriptu indexují od nuly, takže například pro číslo 1 přehraj tón na kameni s indexem 0.
