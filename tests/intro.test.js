import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if is greater", () => {
    // Arrange
    const a = 2;
    const b = 1;

    // Act
    const result = max(a, b);

    // Assert
    expect(result).toBe(2);
  });
});
