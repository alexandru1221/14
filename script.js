// -----------------------------
// Butonul "Nu" fuge de mouse
// -----------------------------
const noBtn = document.getElementById("noBtn");
if(noBtn){
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

// -----------------------------
// Funcții pentru pagina de mulțumire
// -----------------------------
function showLetter(){
  document.getElementById("content").innerHTML = `
    <div class="letter">
    <p class="address">Iubita mea,</p>
     <p>
    <p>✉️ "Din momentul in care team cunoscut am inteles ca tu imi vei fi persoana care imi va aduce caldura in loc de soare, lumina in loc de intuneric si bucuria in loc de tristete, te iubesc foarte mult ca esti linga mine, ca mereu tii cu mine, prin acest mesaj vreau sati spun ca esti totul pentru mine, ca nu te voi schimba niciodata si mereu voi fi pentru tine totul ce iti doresti Și vreau să știi că fiecare zi alături de tine este un dar pe care îl prețuiesc cu toată inima. Îmi doresc să construim împreună amintiri frumoase, să trecem peste orice greutate ținându-ne de mână și să ne bucurăm de fiecare clipă ca și cum ar fi un miracol. Tu ești inspirația mea, sprijinul meu și visul pe care îl trăiesc în realitate. Îți promit că voi fi mereu aici, cu sufletul deschis, gata să-ți ofer dragostea mea necondiționată."</p>
    </p>
    <p class="signature">Cu toata dragostea, iubitul tau 💖</p>
      </div>
  `;
}

function showGift(){
  document.getElementById("content").innerHTML = `
    <div class="gift">
      <p>🎁 În centrul inimii mele ești tu 🌹</p>
      <p>💌 "Fiecare moment cu tine este un cadou minunat care nimeni nu il va putea schimba niciodata."</p>
    </div>
  `;
}

// -----------------------------
// Inimioare random pe ecran
// -----------------------------
function createHeart(){
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "absolute";

  // Dimensiune random
  const size = Math.floor(Math.random() * 20) + 20; // între 20px și 40px
  heart.style.fontSize = size + "px";

  // Alegem o margine random de unde apare
  const side = Math.floor(Math.random() * 4); // 0=stânga, 1=dreapta, 2=sus, 3=jos
  let duration = Math.random() * 4 + 4; // între 4s și 8s

  if(side === 0){ // stânga
    heart.style.left = "0px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.animation = `moveRight ${duration}s linear forwards, floatDance ${duration}s ease-in-out infinite`;
  } else if(side === 1){ // dreapta
    heart.style.left = window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";
    heart.style.animation = `moveLeft ${duration}s linear forwards, floatDance ${duration}s ease-in-out infinite`;
  } else if(side === 2){ // sus
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "0px";
    heart.style.animation = `moveDown ${duration}s linear forwards, floatDance ${duration}s ease-in-out infinite`;
  } else { // jos
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.animation = `moveUp ${duration}s linear forwards, floatDance ${duration}s ease-in-out infinite`;
  }

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}

// Creează inimioare la intervale
setInterval(createHeart, 1500);

// -----------------------------
// Animatii CSS injectate dinamic
// -----------------------------
const style = document.createElement("style");
style.innerHTML = `
@keyframes moveRight {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100vw) translateY(-50px); opacity: 0; }
}

@keyframes moveLeft {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(-100vw) translateY(50px); opacity: 0; }
}

@keyframes moveDown {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(100vh) translateX(50px); opacity: 0; }
}

@keyframes moveUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh) translateX(-50px); opacity: 0; }
}

/* Efect de balans și rotire */
@keyframes floatDance {
  0% { transform: rotate(0deg) translateX(0); }
  25% { transform: rotate(10deg) translateX(10px); }
  50% { transform: rotate(-10deg) translateX(-10px); }
  75% { transform: rotate(10deg) translateX(5px); }
  100% { transform: rotate(0deg) translateX(0); }
}
`;
document.head.appendChild(style);
