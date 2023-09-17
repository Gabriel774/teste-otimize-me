import * as yup from "yup";

export default function (context) {
  return yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    phone: yup
      .string()
      .length(15, "Telefone inválido")
      .required("Campo obrigatório"),
    zipCode: yup
      .string()
      .length(9, "CEP inválido")
      .required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
    addressNumber: yup
      .string()
      .test("check-required", "Campo obrigatório", () => {
        if (
          context.state.user.addressNumber.length < 1 &&
          !context.state.user.numberDisabled
        )
          return false;
        return true;
      }),
    addressComplement: yup.string(),
    district: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
  });
}
