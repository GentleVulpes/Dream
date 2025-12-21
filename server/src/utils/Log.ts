const fs = require("fs");
export class Log {
  static writeError(message: string, error: Error) {
    fs.appendFileSync(
      __dirname + "/../logs/errors.txt",
      `${message} ${error.message} - ocurred on ${new Date().toString()}\n`
    );
    console.error(message);
  }

  static writeInformation(message: string) {
    fs.appendFileSync(
      __dirname + "/../logs/informations.txt",
      `${message} - ocurred on ${new Date().toString()}\n`
    );
  }
}

