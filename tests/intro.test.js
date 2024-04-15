import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if is greater", () => {
    expect(max(2, 1)).toBe(2);
  });
});
