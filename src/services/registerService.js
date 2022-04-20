
class Register_user {

  constructor() {
    this.registers = [];
    this.generate();
  }
  generate() {

    this.registers.push({
      id: String,
      name: String,
      apellido: String,
      correo: String,
      contrasena: String,
      re_contrasena: String
    });
  }
  async create(data) {
    const newRegister = {
      id: string.uuid(),
      ...data,
    }
    this.registers.push(newRegister);
    return newRegister;
  }
  async update(id, changes) {
    const index = this.Products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const product = this.Products[index];
    this.Products[index] = {
      ...product,
      ...changes
    };
  }
}

module.exports = Register_user;

