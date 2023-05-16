import kleur from "kleur";

const originalInfo = console.info;
const originalWarn = console.warn;
const originalError = console.error;

console.info = (...args) => {
	const blueText = kleur.blue().bold;
	originalInfo.call(console, blueText(...args));
};

console.warn = (...args) => {
	const yellowText = kleur.yellow().bold;
	originalWarn.call(console, yellowText(...args));
};

console.error = (...args) => {
	const redText = kleur.red().bold;
	originalError.call(console, redText(...args));
};

export default console;