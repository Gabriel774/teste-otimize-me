import * as yup from "yup";

export default function () {
  return yup.object().shape({
    number: yup.string().required("Campo obrigatório"),
    owner: yup.string().required("Campo obrigatório"),
    month: yup.string().required("Obrigatório"),
    year: yup.string().required("Obrigatório"),
    cvv: yup.string().required("Obrigatório"),
  });
}
