export function capitalizeFirstLetter(string) {
  return string.trim().charAt(0).toUpperCase() + string.trim().slice(1);
}

console.log(capitalizeFirstLetter("  hello"));
