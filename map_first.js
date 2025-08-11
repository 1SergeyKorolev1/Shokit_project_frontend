const lightningIcon = L.icon({
  iconUrl: "images/lightning-icon.png", // путь к вашему изображению
  iconSize: [32, 37], // размер иконки (подберите под ваше изображение)
  iconAnchor: [16, 37], // точка привязки иконки
  popupAnchor: [0, -37], // точка привязки попапа
});

// Инициализация карты
const map = L.map("map").setView([58.04893432747559, 38.83636113365411], 10); // Центр Рыбинска

// Добавление тайлов OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Координаты
const rybinskCenter = [58.115945999852215, 38.64069668315109];
const rybinskNabereg1 = [58.05435819033855, 38.84016138558594];
const rybinskSkatePark1 = [58.04594148215337, 38.853224834731066];
const rybinskVikonda = [58.057879549554166, 38.76378440976732];
const rybinskGlebovo = [58.00916607337473, 38.456223482095645];
const rybinskMarhachovo = [58.02319083516569, 38.51207777598258];
const rybinskBelevo = [58.03110625631777, 38.60406510036634];
const rybinskKoprinoPlaj = [58.06163017390231, 38.355057494217995];
const rybinskKstovo = [58.00361464876557, 38.85732233628931];

// Расстояние в 2 км (примерно, на карте)
const offset = 0.02; // прибл. градусы, примерно 2 км

// Метка 1: в центре Рыбинска
const marker1 = L.marker(rybinskCenter, { icon: lightningIcon }).addTo(map);
marker1.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Судоверфь<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);

// Метка 2: в 2 км на северо-восток от центра
// const marker2Coords = [rybinskCenter[0] + offset, rybinskCenter[1] + offset];
// const marker2 = L.marker(marker2Coords).addTo(map);
// marker2.bindPopup("<b>Точка зарядки ShOKiT</b><br>Набережная.");

// Метка 3: в центре Рыбинска
const marker3 = L.marker(rybinskNabereg1, { icon: lightningIcon }).addTo(map);
marker3.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Набережная<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);

// Метка 4: в центре Рыбинска
const marker4 = L.marker(rybinskSkatePark1, { icon: lightningIcon }).addTo(map);
marker4.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>под мостом возле скейтпула<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);

// Метка 5: в центре Рыбинска
const marker5 = L.marker(rybinskVikonda, { icon: lightningIcon }).addTo(map);
marker5.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>ТРЦ Vikonda<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);

// Метка 6: в центре Рыбинска
const marker6 = L.marker(rybinskGlebovo, { icon: lightningIcon }).addTo(map);
marker6.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Глебово Перекресток<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);

// Метка 7: в центре Рыбинска
const marker7 = L.marker(rybinskMarhachovo, { icon: lightningIcon }).addTo(map);
marker7.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Мархачево<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);

// Метка 8: в центре Рыбинска
const marker8 = L.marker(rybinskBelevo, { icon: lightningIcon }).addTo(map);
marker8.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Белево - шиномонтаж<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);

// Метка 9: в центре Рыбинска
const marker9 = L.marker(rybinskKoprinoPlaj, { icon: lightningIcon }).addTo(
  map
);
marker9.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Коприно - пляж<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);

// Метка 10: в центре Рыбинска
const marker10 = L.marker(rybinskKstovo, { icon: lightningIcon }).addTo(map);
marker10.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Кстово<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
