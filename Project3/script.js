/* Fonksiyon Atama */
var dino = document.getElementById("dino");
var engel = document.getElementById("engel");
var counter = 0;

/* Koşulların Belirlenmesi */

function zipla() {
  if (engel.classList != "engel-animate") {
    engel.classList.add("engel-animate");
  }

  if (dino.classList != "dino-animate") {
    dino.classList.add("dino-animate");
    setTimeout(function () {
      dino.classList.remove("dino-animate");
    }, 500);
  }
}
var carpismaKontrol = setInterval(function () {
  var dinoingBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );

  var engelingLeft = parseInt(
    window.getComputedStyle(engel).getPropertyValue("left")
  );

  /* Popup ekranı */
  
  if (engelingLeft > 0 && engelingLeft < 60 && dinoingBottom < 60) {
    engel.classList.remove("engel-animate");
    engel.style.display = "none";
    alert("Game Over.  Time Played: " + Math.floor(counter / 100));
    counter = 0;
    engel.style.display = "engeling 1s infinite linear";
  } else {
    counter++;
    document.getElementById("timeSpan").innerHTML = Math.floor(
      counter / 100
    );
  }
}, 10);
