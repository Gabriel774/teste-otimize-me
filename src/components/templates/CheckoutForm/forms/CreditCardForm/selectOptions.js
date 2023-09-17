const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const years = ["2024", "2025", "2026", "2027"];

const installments = (value, quantity) => {
  const list = [];

  for (let count = 1; count <= quantity; count++) {
    list.push({
      value: count.toString(),
      label: `${count}x de R$ ${new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value / count)}`,
    });
  }

  return list;
};

export { months, years, installments };
