class ViaCepService {
  constructor() {
    this.baseUrl = "https://viacep.com.br";
  }

  async getAddressData(zipCode) {
    this.disabledFields = [];
    try {
      const res = await fetch(`${this.baseUrl}/ws/${zipCode}/json/`);
      const data = await res.json();

      return data;
    } catch {
      return console.log("CEP não encontrado");
    }
  }
}

export default ViaCepService;
