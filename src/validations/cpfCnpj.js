import * as yup from "yup";

export default function () {
  return yup.object().shape({
    cpf_cnpj: yup
      .string()
      .test("check-size", "CPF/CNPJ inválido", (value) => {
        if (
          value.replace(/\D/g, "").length === 11 ||
          value.replace(/\D/g, "").length === 14
        )
          return true;
        return false;
      })
      .required("Campo obrigatório"),
  });
}
