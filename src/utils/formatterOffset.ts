export function formatterOffset(decimal = 0) {
  const hours = Math.floor(decimal);

  const minutes = String(decimal).split(".")[1] ?? "0";

  const hoursFormatteds = String(hours).padStart(2, "0");

  const minFormatteds = minutes.padEnd(2, "0");

  return `${hoursFormatteds}:${minFormatteds}`;
}
