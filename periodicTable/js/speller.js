export default {
  check,
  lookup,
};

var elements;

await loadPeriodicTable();

// ****************************

async function loadPeriodicTable() {
  elements = await (await fetch("periodic-table.json")).json();
}

function check(inputWord) {
  // TODO: determine if `inputWord` can be spelled
  // with periodic table symbols; return array with
  // them if so (empty array otherwise)
  console.log("checking");
  if (inputWord.length === 0) return [];

  for (element char of inputWord) {
	
  }
  return [];
}

function lookup(elementSymbol) {
  // TODO: return the element entry based on specified
  // symbol (case-insensitive)

  for (let element of elements) {
    if (element.symbol.toLowerCase() === elementSymbol) {
      return element;
    }
  }

  return {};
}
