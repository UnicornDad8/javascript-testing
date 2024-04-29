import { vi, it, expect, describe } from "vitest";
import { getExchangeRate } from "../src/libs/currency";
import { getPriceInCurrency } from "../src/mocking";

vi.mock("../src/libs/currency");

describe("getPriceInCurrency", () => {
  it("should return price in target currency", () => {
    vi.mocked(getExchangeRate).mockReturnValue(1.5);

    const price = getPriceInCurrency(10, "AUD");

    expect(price).toBe(15);
  });
});
