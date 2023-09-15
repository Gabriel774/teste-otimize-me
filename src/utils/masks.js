export default {
  capitalize: function (value) {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  zipCode: function (value) {
    if (value.length > 9) return value.slice(0, 9);
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  },

  phone: function (value) {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d)/, "($1")
      .replace(/^(\(\d{2})(\d)/, "$1) $2")
      .replace(/(\d{5})(\d{1,5})/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  },

  number: function (value) {
    return value.replace(/\D/g, "");
  },

  creditCard: function (value) {
    let inputOnlyDigits = value.replace(/\D/g, "");
    inputOnlyDigits = inputOnlyDigits.slice(0, 16);
    let groups = inputOnlyDigits.match(/.{1,4}/g);
    return groups ? groups.join(" ") : inputOnlyDigits;
  },

  cpfCnpj: function (value) {
    let cnpjCpf = value.replace(/\D/g, "").slice(0, 14);

    if (cnpjCpf.length > 11) {
      cnpjCpf = cnpjCpf.replace(/^(\d{2})(\d)/, "$1.$2");
      cnpjCpf = cnpjCpf.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      cnpjCpf = cnpjCpf.replace(/\.(\d{3})(\d)/, ".$1/$2");
      cnpjCpf = cnpjCpf.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      cnpjCpf = cnpjCpf.replace(/(\d{3})(\d)/, "$1.$2");
      cnpjCpf = cnpjCpf.replace(/(\d{3})(\d)/, "$1.$2");
      cnpjCpf = cnpjCpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    return cnpjCpf;
  },

  alphabet: function (value) {
    return value.replace(/[^a-zA-Z ]+/g, "");
  },

  cvv: function (value) {
    return value.slice(0, 4);
  },
};
