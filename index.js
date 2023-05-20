import kleur from "kleur";

const originalInfo = console.info;
const originalWarn = console.warn;
const originalError = console.error;

console.info = (...args) => {
  const blueText = kleur.blue().bold;
  const formattedArgs = args.map((arg) => {
    if (typeof arg === "string") {
      return blueText(arg);
    } else {
      return arg;
    }
  });
  originalInfo.apply(console, formattedArgs);
};

console.warn = (...args) => {
  const yellowText = kleur.yellow().bold;
  const formattedArgs = args.map((arg) => {
    if (typeof arg === "string") {
      return yellowText(arg);
    } else {
      return arg;
    }
  });
  originalWarn.apply(console, formattedArgs);
};

console.error = (...args) => {
  const redText = kleur.red().bold;
  const formattedArgs = args.map((arg) => {
    if (typeof arg === "string") {
      return redText(arg);
    } else {
      return arg;
    }
  });
  originalError.apply(console, formattedArgs);
};

export default console;
