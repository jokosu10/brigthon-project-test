class Vehicle {
  constructor(nama, kapasitas_mesin, roda) {
    this.nama = nama;
    this.kapasitas_mesin = kapasitas_mesin;
    this.roda = roda;
  }

  describe() {
    return `${this.nama} mempunyai kapasitas ${this.kapasitas_mesin} dan roda ${this.roda}`;
  }

  describeCapitalString() {
    return `${this.nama.toString().toUpperCase()} MEMPUNYAI KAPASITAS ${this.kapasitas_mesin
      .toString()
      .toUpperCase()} DAN RODA ${this.roda.toString().toUpperCase()}`;
  }
}

let myVehicle = new Vehicle('Mobil', 3000, 4);
console.log(myVehicle.describe());
console.log(myVehicle.describeCapitalString());

class Car extends Vehicle {
  constructor(nama, kapasitas_mesin, roda, merk, tahun_pembuatan, nomor_rangka) {
    super(nama, kapasitas_mesin, roda);
    this.merk = merk;
    this.tahun_pembuatan = tahun_pembuatan;
    this.nomor_rangka = nomor_rangka;
  }

  describe() {
    return `${super.describe()} dan merk ${this.merk} dan tahun pembuatan ${this.tahun_pembuatan} dan nomor rangka ${
      this.nomor_rangka
    }`;
  }

  describeCapitalString() {
    return `${super.describeCapitalString()} DAN MERK ${this.merk
      .toString()
      .toUpperCase()} DAN TAHUN PEMBUATAN ${this.tahun_pembuatan
      .toString()
      .toUpperCase()} DAN NOMOR RANGKA ${this.nomor_rangka.toString().toUpperCase()}`;
  }
}

let myCar = new Car('Jazz', 3000, 4, 'Honda', 2020, 123456);
console.log(myCar.describe());
console.log(myCar.describeCapitalString());
