/*Challenge 1
1 Récupérer la couleur et le schemee ------- DONE
2 Mettre la couleur et le scheme dans le fetch
3 récupérer le scheme  
4 Afficher les couleurs
*/

document.getElementById("color-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let couleur = document.getElementById("color-picked").value;
  const scheme = document.getElementById("scheme-picked").value;
  couleur = couleur.slice(1);

  let array = [];
  fetch(`https://www.thecolorapi.com/scheme?hex=${couleur}&mode=${scheme}`)
    .then((res) => res.json())

    .then((data) => {
      //add background to each div
      for (let i = 0; i < data.colors.length; i++) {
        array[i] = data.colors[i].hex.value;
        // console.log(array[i]);
        document.getElementById("premiere-couleur").style.backgroundColor =
          array[0];
        document.getElementById("deuxieme-couleur").style.backgroundColor =
          array[1];
        document.getElementById("troisieme-couleur").style.backgroundColor =
          array[2];
        document.getElementById("quatrieme-couleur").style.backgroundColor =
          array[3];
        document.getElementById("cinquieme-couleur").style.backgroundColor =
          array[4];
        //add hexcolor bottom div
        document.getElementById(
          "premiere-couleur-hex"
        ).innerHTML = `<h2 >${array[0]}</h2>`;
        document.getElementById(
          "deuxieme-couleur-hex"
        ).innerHTML = `<h2 >${array[1]}</h2>`;
        document.getElementById(
          "troisieme-couleur-hex"
        ).innerHTML = `<h2 >${array[2]}</h2>`;
        document.getElementById(
          "quatrieme-couleur-hex"
        ).innerHTML = `<h2 >${array[3]}</h2>`;
        document.getElementById(
          "cinquieme-couleur-hex"
        ).innerHTML = `<h2 >${array[4]}</h2>`;
      }
    });
  // console.log(array[0]);
});

/*Challenge : Récupérer la couleur en cliquant deux fois
1 Ecouter un double-click
2 copier la valeur
3 récupérer le scheme  
4 Afficher les couleurs
*/

//copy hexcolor
const colorFont = document.querySelectorAll(".color-font");
const colorHex = document.getElementsByClassName("hex-color");
for (const hexcolor of colorHex) {
  hexcolor.addEventListener("dblclick", () => {
    navigator.clipboard.writeText(hexcolor.firstChild.innerHTML);
  });
}
console.log(colorFont);
console.log(colorHex);
for (let i = 0; i < colorFont.length; i++) {
  colorFont[i].addEventListener("dblclick", () => {
    navigator.clipboard.writeText(colorHex[i].firstChild.innerHTML);
  });
}
// colorFont.forEach((element) => {
//   element.addEventListener("dblclick", () => {
//     navigator.clipboard.writeText(colorHex[i].firstChild.innerHTML);
//   });
// });
