const text = {
  uz: {
    title: "Fuel Tabs — yoqilg‘ini tejovchi innovatsiya",
    btn1: "Nimaga foydali?",
    btn2: "Qanday ishlaydi?",
    btn3: "Qanday ishlatiladi?",
    b1: 
      🚗 Yoqilg‘i tejaladi<br>
      ⚙️ Dvigatel yumshoq ishlaydi<br>
      🌍 Zararli gazlar kamayadi
    ,
    b2: 
      Fuel Tabs yoqilg‘i molekulalarini faollashtiradi
      va yonishni to‘liq qiladi.
    ,
    b3: 
      💊 1 tabletka — 60–70 litr<br>
      ⛽️ To‘g‘ridan-to‘g‘ri bakka tashlanadi
    
  },

  kz: {
    title: "Fuel Tabs — отынды үнемдейтін шешім",
    btn1: "Неге пайдалы?",
    btn2: "Қалай жұмыс істейді?",
    btn3: "Қалай қолданады?",
    b1: 
      🚗 Отын үнемделеді<br>
      ⚙️ Қозғалтқыш жақсарады
    ,
    b2: 
      Отынның толық жануына көмектеседі.
    ,
    b3: 
      💊 1 таблетка — 60–70 литр
    
  },

  ru: {
    title: "Fuel Tabs — экономия топлива",
    btn1: "Для чего?",
    btn2: "Как работает?",
    btn3: "Как использовать?",
    b1: 
      🚗 Экономия топлива<br>
      ⚙️ Лучшая работа двигателя
    ,
    b2: 
      Улучшает процесс сгорания топлива.
    ,
    b3: 
      💊 1 таблетка на 60–70 литров
    
  }
};

function load(lang) {
  document.getElementById("title").innerText = text[lang].title;
  document.getElementById("btn1").innerText = text[lang].btn1;
  document.getElementById("btn2").innerText = text[lang].btn2;
  document.getElementById("btn3").innerText = text[lang].btn3;
  document.getElementById("b1").innerHTML = text[lang].b1;
  document.getElementById("b2").innerHTML = text[lang].b2;
  document.getElementById("b3").innerHTML = text[lang].b3;
}

function show(id) {
  document.querySelectorAll(".box").forEach(b => b.style.display = "none");
  document.getElementById(id).style.display = "block";
}

document.getElementById("lang").addEventListener("change", e => {
  load(e.target.value);
});

load("uz"
