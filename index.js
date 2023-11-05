import kleur from "kleur";

const originalInfo = console.info;
const originalWarn = console.warn;
const originalError = console.error;
const originalLog = console.log;

function getInitiator(e) {
  let initiator = "unknown place";
  if (typeof e.stack === "string") {
    let isFirst = true;
    for (const line of e.stack.split("\n")) {
      const matches = line.match(/^\s+at\s+(.*)/);
      if (matches) {
        if (!isFirst) {
          // first line - current function
          // second line - caller (what we are looking for)
          if (matches[1].split("(").length === 1) {
            // inside loop or something
            initiator = matches[1].split("(")[0];
          } else if (matches[1].split("(").length === 2) {
            // not inside loop
            initiator = matches[1].split("(")[1];
          } else {
            initiator = "something went wrong";
          }
          // remove long path info, split at last /
          initiator = initiator.split("/")[initiator.split("/").length - 1];
          return initiator;
        }
        isFirst = false;
      }
    }
  }
}

console.log = (...args) => {
  // https://stackoverflow.com/questions/45395369/how-to-get-console-log-line-numbers-shown-in-nodejs
  const e = new Error();
  const initiator = getInitiator(e);

  const formattedArgs = args.map((arg) => {
    if (typeof arg === "string") {
      return arg;
    } else {
      return arg;
    }
  });
  formattedArgs.push(kleur.italic(`(${initiator}`));
  originalLog.apply(console, formattedArgs);
};

console.info = (...args) => {
  // https://stackoverflow.com/questions/45395369/how-to-get-console-log-line-numbers-shown-in-nodejs
  const e = new Error();
  const initiator = getInitiator(e);

  const blueText = kleur.blue().bold;
  const formattedArgs = args.map((arg) => {
    if (typeof arg === "string") {
      return blueText(arg);
    } else {
      return arg;
    }
  });
  formattedArgs.push(kleur.italic(`(${initiator}`));
  originalInfo.apply(console, formattedArgs);
};

console.warn = (...args) => {
  // https://stackoverflow.com/questions/45395369/how-to-get-console-log-line-numbers-shown-in-nodejs
  const e = new Error();
  const initiator = getInitiator(e);

  const yellowText = kleur.yellow().bold;
  const formattedArgs = args.map((arg) => {
    if (typeof arg === "string") {
      return yellowText(arg);
    } else {
      return arg;
    }
  });
  formattedArgs.push(kleur.italic(`(${initiator}`));
  originalWarn.apply(console, formattedArgs);
};

console.error = (...args) => {
  // https://stackoverflow.com/questions/45395369/how-to-get-console-log-line-numbers-shown-in-nodejs
  const e = new Error();
  const initiator = getInitiator(e);

  const redText = kleur.red().bold;
  const formattedArgs = args.map((arg) => {
    if (typeof arg === "string") {
      return redText(arg);
    } else {
      return arg;
    }
  });
  formattedArgs.push(kleur.italic(`(${initiator}`));
  originalError.apply(console, formattedArgs);
};

export default console;
