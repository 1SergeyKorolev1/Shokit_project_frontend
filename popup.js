// popup.js
import { getVoltBalance, getKilovatBalance, replenishVolt } from "./coin.js";

export function showPopup(title, contentHtml) {
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";

  const popup = document.createElement("div");
  popup.className = "popup";

  const h3 = document.createElement("h3");
  h3.innerText = title;
  popup.appendChild(h3);

  const content = document.createElement("div");
  content.innerHTML = contentHtml;
  popup.appendChild(content);

  const closeBtn = document.createElement("button");
  closeBtn.innerText = "Закрыть";
  closeBtn.onclick = () => document.body.removeChild(overlay);
  popup.appendChild(closeBtn);

  overlay.appendChild(popup);
  document.body.appendChild(overlay);
}

// Экспортируем функции для вызова
export function showVoltInfo() {
  showPopup(
    "⚡ Electron",
    `
    <p>Electron это тестовая валюта ⚡. Можно пополнить баланс или обменять на kilovat.</p>
    <button class="charger-button" onclick="window.replenishVolt(100); window.updateDisplay();">Пополнить на 100 ⚡</button>
    <br/><br/>
   `
  );
}

export function showKilovatInfo() {
  showPopup(
    "🔋 Kilovat",
    `
    <p>Обменяйте ⚡ на kilovat, чтобы использовать в зарядных станциях.</p>
    <input type="number" id="kilovat-exchange-amount" placeholder="Количество ⚡" style="width:120px;"/>
    <button class="charger-button" onclick="window.performExchange(); window.updateDisplay();">Обменять</button>
  `
  );
}

// Эти функции вызываются из index.html
export function exchangeVolt() {
  const amount = parseInt(
    document.getElementById("volt-exchange-amount").value
  );
  if (isNaN(amount) || amount <= 0) {
    alert("Введите корректное число");
    return;
  }
  window.coin.exchangeVoltToKilovat(amount);
}

export function performExchange() {
  const amount = parseInt(
    document.getElementById("kilovat-exchange-amount").value
  );
  if (isNaN(amount) || amount <= 0) {
    alert("Введите корректное число");
    return;
  }
  window.coin.exchangeVoltToKilovat(amount);
}

// Обновление отображения балансов
export function updateDisplay() {
  document.getElementById("volt-balance").innerText =
    window.coin.getVoltBalance();
  document.getElementById("kilovat-balance").innerText =
    window.coin.getKilovatBalance();
}

// создаем глобальные функции для вызова из inline onclick
window.replenishVolt = () => {
  replenishVolt(100);
  updateDisplay();
};
