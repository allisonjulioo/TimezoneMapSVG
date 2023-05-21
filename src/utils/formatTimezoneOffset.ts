export function formatTimezoneOffset(timezoneOffset: number) {
  const formatter = { timeZone: "UTC" };

  if (!timezoneOffset) return new Date().toLocaleString("pt-BR", formatter);

  const currentUTC = new Date();

  const localTime = new Date(currentUTC.getTime() + timezoneOffset * 3600000);

  return localTime.toLocaleString("pt-BR", formatter);
}
