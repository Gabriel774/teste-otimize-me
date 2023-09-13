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

function creditCardMask(value) {
  let inputOnlyDigits = value.replace(/\D/g, "");
  inputOnlyDigits = inputOnlyDigits.slice(0, 16);
  let groups = inputOnlyDigits.match(/.{1,4}/g);
  return groups ? groups.join(" ") : inputOnlyDigits;
}

function cpfCnpjMask(value) {
  const cnpjCpf = value.replace(/\D/g, "");

  if (cnpjCpf.length === 11) {
    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  return cnpjCpf.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    "$1.$2.$3/$4-$5"
  );
}

function cvvMask(value) {
  return value.slice(0, 4);
}

export {
  capitalizeMask,
  numberMask,
  phoneMask,
  zipCodeMask,
  creditCardMask,
  cpfCnpjMask,
  cvvMask,
};
