class ViaCepService {
  constructor() {
    this.baseUrl = "https://viacep.com.br";
  }

  async getAddressData(zipCode) {
    try {
      const res = await fetch(`${this.baseUrl}/ws/${zipCode}/json/`);
      return await res.json();
    } catch {
      return console.log("CEP não encontrado");
    }
  }
}

export default ViaCepService;
