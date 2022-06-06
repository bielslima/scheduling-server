import crypto from "crypto";

export class CryptoHandler {
  static async hash(password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const salt = crypto.randomBytes(8).toString("hex");

      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(salt + ":" + derivedKey.toString("hex"));
      });
    });
  }

//   static async verify(password: string, hash: string) {
//     return new Promise((resolve, reject) => {
//       const [salt, key] = hash.split(":");
//       crypto.scrypt(password, salt, 64, (err, derivedKey) => {
//         if (err) reject(err);
//         resolve(key == derivedKey.toString("hex"));
//       });
//     });
//   }
}
