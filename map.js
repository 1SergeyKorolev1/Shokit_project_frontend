import * as coin from "./coin.js";

// Глобальные переменные
const allMarkers = [];
const user = coin.user;

const lightningIcon = L.icon({
  iconUrl: "images/lightning-icon.png", // путь к вашему изображению
  iconSize: [32, 37], // размер иконки (подберите под ваше изображение)
  iconAnchor: [16, 37], // точка привязки иконки
  popupAnchor: [0, -37], // точка привязки попапа
});

const loadIcon = L.icon({
  iconUrl: "images/load_icon.png", // путь к вашей иконке загрузки
  iconSize: [32, 37],
  iconAnchor: [16, 37],
  popupAnchor: [0, -37],
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
//const offset = 0.02; // прибл. градусы, примерно 2 км

// Метка 1: в центре Рыбинска
const marker1 = L.marker(rybinskCenter, { icon: lightningIcon });
marker1.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Судоверфь<br><button class="charger-button" onclick="window.startCharging(0)">Зарядить</button>`
);
allMarkers.push(marker1);

// Метка 2: в 2 км на северо-восток от центра
// const marker2Coords = [rybinskCenter[0] + offset, rybinskCenter[1] + offset];
// const marker2 = L.marker(marker2Coords).addTo(map);
// marker2.bindPopup("<b>Точка зарядки ShOKiT</b><br>Набережная.");

// Метка 3: в центре Рыбинска
const marker3 = L.marker(rybinskNabereg1, { icon: lightningIcon });
marker3.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Набережная<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
allMarkers.push(marker3);

// Метка 4: в центре Рыбинска
const marker4 = L.marker(rybinskSkatePark1, { icon: lightningIcon });
marker4.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>под мостом возле скейтпула<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
allMarkers.push(marker4);

// Метка 5: в центре Рыбинска
const marker5 = L.marker(rybinskVikonda, { icon: lightningIcon });
marker5.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>ТРЦ Vikonda<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
allMarkers.push(marker5);

// Метка 6: в центре Рыбинска
const marker6 = L.marker(rybinskGlebovo, { icon: lightningIcon });
marker6.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Глебово Перекресток<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
allMarkers.push(marker6);

// Метка 7: в центре Рыбинска
const marker7 = L.marker(rybinskMarhachovo, { icon: lightningIcon });
marker7.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Мархачево<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
allMarkers.push(marker7);

// Метка 8: в центре Рыбинска
const marker8 = L.marker(rybinskBelevo, { icon: lightningIcon });
marker8.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Белево - шиномонтаж<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
allMarkers.push(marker8);

// Метка 9: в центре Рыбинска
const marker9 = L.marker(rybinskKoprinoPlaj, { icon: lightningIcon });
marker9.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Коприно - пляж<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
allMarkers.push(marker9);

// Метка 10: в центре Рыбинска
const marker10 = L.marker(rybinskKstovo, { icon: lightningIcon });
marker10.bindPopup(
  `<b>Точка зарядки ShOKiT</b><br>Кстово<br><button class="charger-button" onclick="alert('Начинаем зарядку!')">Зарядить</button>`
);
allMarkers.push(marker10);

const chargers = {}; // для хранения таймеров

function getMarkerById(id) {
  return allMarkers[id];
}

function updatePopupButton(marker, markerId, label, callback) {
  const popupContent = marker.getPopup().getContent();
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = popupContent;

  const btn = tempDiv.querySelector(".charger-button");
  if (btn) {
    btn.innerText = label;
    btn.onclick = null;
    btn.onclick = () => callback(markerId);
  }

  marker.setPopupContent(tempDiv.innerHTML);
  marker.openPopup();
}

// Обновляем кнопку внутри попапа при открытии
function attachButtonHandler(marker, markerId, label, callback) {
  // Получаем DOM-элемент попапа
  const popupNode = marker.getPopup().getElement();

  if (popupNode) {
    const btn = popupNode.querySelector(".charger-button");
    if (btn) {
      btn.innerText = label;
      // Обнуляем старый обработчик, чтобы избежать множественных привязок
      btn.onclick = null;
      // Назначаем новый обработчик
      btn.onclick = () => callback(markerId);
    }
  }
}

export function startCharging(markerId) {
  const marker = getMarkerById(markerId);
  if (!marker) return;

  // Если уже заряжает - ничего не делаем
  if (chargers[markerId] && chargers[markerId].interval) return;

  // Меняем иконку на load_icon.png
  marker.setIcon(loadIcon);

  // Меняем кнопку на "Остановить"
  updatePopupButton(marker, markerId, "Остановить", stopCharging);

  // Запускаем интервал
  const intervalId = setInterval(() => {
    const decrement = 0.00083; // за 3 сек - 1 квт
    if (user.kilovat >= decrement) {
      user.kilovat -= decrement;
      updateKilovatDisplay();
    } else {
      // Баланс закончился — останавливаем
      stopCharging(markerId);
      alert("у вас нулевой балланс мы вынуждены остановить зарядку(...");
    }
  }, 3000);

  chargers[markerId] = { interval: intervalId };
  map.fire("popupopen");
}

export function stopCharging(markerId) {
  const marker = getMarkerById(markerId);
  if (!marker) return;

  if (chargers[markerId] && chargers[markerId].interval) {
    clearInterval(chargers[markerId].interval);
    chargers[markerId] = null;

    // Возвращаем исходную иконку
    marker.setIcon(lightningIcon);

    // Обратно к кнопке "Зарядить"
    updatePopupButton(marker, markerId, "Зарядить", startCharging);
    map.fire("popupopen");
  }
}

function updateKilovatDisplay() {
  document.getElementById("kilovat-balance").innerText =
    user.kilovat.toFixed(3);
}

function addAllMarkersToMap() {
  allMarkers.forEach((marker) => {
    marker.addTo(map);
  });
}

addAllMarkersToMap();

// После добавления всех маркеров
map.on("popupopen", function (e) {
  if (e.popup) {
    const marker = e.popup._source; // Получаем маркер
    const markerId = allMarkers.indexOf(marker); // Или ваш механизм получения ID

    // В зависимости от состояния, обновляем кнопку
    // Например, если зарядка не активна
    // Или, если активна
    // Здесь нужно учитывать текущий статус
    // Для примера, делаем так:
    if (chargers[markerId]) {
      // Заряжает, показываем "Остановить"
      attachButtonHandler(marker, markerId, "Остановить", stopCharging);
    } else {
      // Не заряжает, показываем "Зарядить"
      attachButtonHandler(marker, markerId, "Зарядить", startCharging);
    }
  } else {
    return;
  }
});
