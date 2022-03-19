/*Challenge 1
1 Récupérer la couleur et le schemee ------- DONE
2 Mettre la couleur et le scheme dans le fetch
3 récupérer le scheme  
4 Afficher les couleurs
*/
//********************Make the code dry*********************

//function to fetch the colors
async function getColors(couleur, scheme) {
  const response = await fetch(
    `https://www.thecolorapi.com/scheme?hex=${couleur}&mode=${scheme}`
  );
  const data = await response.json();
  const colors = data.colors;
  displayColors(colors);
  // return data.colors;
  const colorFont = document.getElementsByClassName("color-font");
  const colorHex = document.getElementsByClassName("hex-color");
  for (const hexcolor of colorHex) {
    hexcolor.addEventListener("dblclick", (event) => {
      navigator.clipboard
        .writeText(event.target.innerText)
        .then(() => {
          alert("successfully copied");
        })
        .catch(() => {
          alert("something went wrong");
        });
    });
  }
  console.log(colorFont);
  console.log(colorHex);
  for (let i = 0; i < colorFont.length; i++) {
    colorFont[i].addEventListener("dblclick", () => {
      navigator.clipboard
        .writeText(event.target.innerText)
        .then(() => {
          alert("successfully copied");
        })
        .catch(() => {
          alert("something went wrong");
        });
    });
  }
}

//function to display the colors
function displayColors(colors) {
  let myColorsHtml = colors
    .map((color) => {
      return `<div  class="color-font" style="background-color: ${color.hex.value}"><span class="hex-color">${color.hex.value}</span></div>`;
    })
    .join("");
  console.log(myColorsHtml);
  document.getElementById("color-container").innerHTML = myColorsHtml;
}

//Add event listener on color and scheme submission

document.getElementById("color-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let Choosedcolor = document.getElementById("color-picked").value;
  const scheme = document.getElementById("scheme-picked").value;
  Choosedcolor = Choosedcolor.slice(1);

  getColors(Choosedcolor, scheme);
});

/*Challenge : Récupérer la couleur en cliquant deux fois
1 Ecouter un double-click
2 copier la valeur
3 récupérer le scheme  
4 Afficher les couleurs
*/

//copy hexcolor

// colorFont.forEach((element) => {
//   element.addEventListener("dblclick", () => {
//     navigator.clipboard.writeText(colorHex[i].firstChild.innerHTML);
//   });
// });
