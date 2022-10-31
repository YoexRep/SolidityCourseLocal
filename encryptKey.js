//Esto es para conectarme a la blockchain
const ethers = require("ethers");

//Para leer archivos de texto
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

  //Con esta funcion puedo encriptar mi clave primaria en caso de que no quiera tenerla en texto plano en mi proyecto
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  );

  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);

  console.log(encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
