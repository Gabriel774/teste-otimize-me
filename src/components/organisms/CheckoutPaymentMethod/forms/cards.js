import clockIcon from "../../../../assets/clock-icon.png";
import qrCodeIcon from "../../../../assets/qr-code-icon.png";
import shieldIcon from "../../../../assets/shield-icon.png";
import calendarIcon from "../../../../assets/calendar-icon.png";
import mailIcon from "../../../../assets/mail-icon.png";

const pixCards = [
  {
    img: clockIcon,
    title: "Rápida aprovação",
    description: "Pagamento em segundos, sem complicação.",
  },
  {
    img: qrCodeIcon,
    title: "Facilidade na finalização",
    description:
      "Basta escanear, com o aplicativo do seu banco, o QRCode que iremos gerar para sua compra.",
  },
  {
    img: shieldIcon,
    title: "Maior segurança",
    description:
      "O PIX foi desenvolvido pelo Banco Central para facilitar suas compras e é 100% seguro.",
  },
  {
    img: calendarIcon,
    title: "Tranquilidade na renovação",
    description:
      "A cada renovação da assinatura enviaremos um código PIX. Assim, você fica sempre em dia sem se preocupar.",
  },
];

const ticketCards = [
  {
    img: clockIcon,
    description:
      "Boletos levam até 3 dias úteis para serem compensados e então terem os produtos liberados.",
  },
  {
    img: mailIcon,
    description:
      "Depois do pagamento, fique atento ao seu e-mail para receber os dados de acesso ao produto (verifique também a caixa de SPAM)",
  },
  {
    img: calendarIcon,
    description:
      "A cada renovação da assinatura enviaremos um novo boleto para que você possa pagar. Assim, você fica sempre em dia sem se preocupar.",
  },
];

export { pixCards, ticketCards };
