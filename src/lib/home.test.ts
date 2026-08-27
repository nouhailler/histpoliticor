import { describe, expect, it } from "vitest";
import { dailyPick, pickAnniversary, yearOf } from "./home";

describe("accueil dynamique", () => {
  it("conserve la même sélection pendant une journée", () => {
    const items = ["a", "b", "c"];
    expect(dailyPick(items, new Date(2026, 7, 27))).toBe(dailyPick(items, new Date(2026, 7, 27, 23, 59)));
  });

  it("privilégie un anniversaire au jour exact", () => {
    const result = pickAnniversary(
      [{ date: "1936-08-27", title: "exact" }, { date: "1958-08-10", title: "mois" }],
      new Date(2026, 7, 27),
      (item) => item.date
    );
    expect(result.exact).toBe(true);
    expect(result.item?.title).toBe("exact");
  });

  it("extrait seulement une année valide", () => {
    expect(yearOf("1958-10-04")).toBe(1958);
    expect(yearOf()).toBeUndefined();
  });
});
