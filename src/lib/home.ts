export function dailyPick<T>(items: T[], date: Date, offset = 0): T | undefined {
  if (!items.length) return undefined;
  const day = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000);
  const index = ((day + offset) % items.length + items.length) % items.length;
  return items[index];
}

export function pickAnniversary<T>(items: T[], date: Date, getDate: (item: T) => string | undefined, offset = 0) {
  const datedItems = items.filter((item) => /^\d{4}-\d{2}-\d{2}/.test(getDate(item) ?? ""));
  const monthDay = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  const exactItems = datedItems.filter((item) => getDate(item)?.slice(5, 10) === monthDay);
  const sameMonthItems = datedItems.filter((item) => getDate(item)?.slice(5, 7) === monthDay.slice(0, 2));
  const pool = exactItems.length ? exactItems : sameMonthItems.length ? sameMonthItems : datedItems;
  return {
    item: dailyPick(pool, date, offset),
    exact: exactItems.length > 0
  };
}

export function yearOf(value?: string) {
  const year = Number.parseInt(value?.slice(0, 4) ?? "", 10);
  return Number.isFinite(year) ? year : undefined;
}
