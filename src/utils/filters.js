function capitalizeMask(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function zipCodeMask(value) {
  if (value.length > 9) return value.slice(0, 9);
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
}

function phoneMask(value) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d)/, "($1")
    .replace(/^(\(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d{1,5})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
}

function numberMask(value) {
  return value.replace(/\D/g, "");
}

export { capitalizeMask, numberMask, phoneMask, zipCodeMask };
