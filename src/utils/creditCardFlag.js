import visaIcon from "../assets/visa-icon.png";
import hipercardIcon from "../assets/hipercard-icon.png";
import amexIcon from "../assets/amex-icon.png";
import eloIcon from "../assets/elo-icon.png";
import dinersIcon from "../assets/diners-icon.png";
import mastercardIcon from "../assets/mastercard-icon.png";

export default function (value) {
  if (value.match(/^4[0-9]{15}$/)) {
    return {
      alt: "visa",
      icon: visaIcon,
    };
  }

  if (value.match(/^(?:5[1-5][0-9]{14})$/)) {
    return {
      alt: "mastercard",
      icon: mastercardIcon,
      big: true,
    };
  }

  if (value.match(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/)) {
    return {
      alt: "diners",
      icon: dinersIcon,
      big: true,
    };
  }

  if (value.match(/^3[47][0-9]{13}$/)) {
    return {
      alt: "amex",
      icon: amexIcon,
      big: true,
    };
  }

  if (value.match(/^606282|^3841(?:[0|4|6]{1})0/)) {
    return {
      alt: "hipercard",
      icon: hipercardIcon,
      big: true,
    };
  }

  if (
    value.match(
      /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/
    )
  ) {
    return {
      alt: "elo",
      icon: eloIcon,
    };
  }

  return null;
}
