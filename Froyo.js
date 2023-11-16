const input = prompt("List your chosen flavors", "strawberry,banana,coffee");

const allFlavors = input.split(",");

console.log(allFlavors);

let flavors = {
  vanilla: 0,
  strawberry: 0,
  coffee: 0,
  banana: 0,
  chocolate: 0,
  cherry: 0,
};

function countFlavors() {
  for (const flavor of allFlavors) {
    console.log(flavors[flavor]);
    flavors[flavor] = flavors[flavor] + 1;
  }
  console.table(flavors);
  return flavors;
}

flavors = countFlavors();
