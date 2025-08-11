export const user = {
  balanceElectron: 0,
  kilovat: 0,
};

export function replenishVolt(amount) {
  user.balanceElectron += amount;
  alert(
    `Баланс Electron ⚡ пополнен на ${amount}. Текущий баланс: ${user.balanceElectron} ⚡`
  );
}

export function exchangeVoltToKilovat(amount) {
  const exchangeRate = 50; // 50 ⚡ = 1 kilovat
  const kilovatAmount = amount / exchangeRate;

  if (user.balanceElectron >= amount) {
    user.balanceElectron -= amount;
    user.kilovat += Number(kilovatAmount.toFixed(2));
    alert(
      `Обменено ${amount} Electron ⚡ на ${kilovatAmount} Kilovat 🔋. Текущий Kilovat: ${user.kilovat} 🔋`
    );
  } else {
    alert("Недостаточно Electron ⚡ для обмена.");
  }
}

export function getVoltBalance() {
  return `${user.balanceElectron}`;
}

export function getKilovatBalance() {
  return `${user.kilovat}`;
}
