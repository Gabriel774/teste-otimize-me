export default function form(props) {
  return [
    {
      id: "number",
      label: "Número do cartão",
      placeholder: "Digite somente os números",
      mask: "creditCard",
      type: "TextInput",
      size: "extra-big",
    },
    {
      id: "owner",
      label: "Titular do cartão",
      placeholder: "Digite o nome impresso no cartão",
      mask: "alphabet",
      type: "TextInput",
      size: "extra-big",
    },
    {
      id: "cpf_cnpj",
      label: "CPF/CNPJ do Titular",
      placeholder: "Digite somente os números",
      mask: "cpfCnpj",
      type: "TextInput",
      size: "extra-big",
    },
    {
      id: "month",
      label: "Validade",
      placeholder: "Mês",
      type: "SelectInput",
      options: props.months,
      size: "small",
    },
    {
      id: "year",
      placeholder: "Ano",
      type: "SelectInput",
      options: props.years,
      size: "small",
    },
    {
      id: "CVV",
      label: "CVV",
      placeholder: "CVV",
      mask: "cvv",
      type: "TextInput",
      size: "small",
    },
    {
      id: "installments",
      label: "Número de parcelas",
      placeholder: "Selecione o número de parcelas",
      type: "SelectInput",
      size: "extra-big",
    },
  ];
}
