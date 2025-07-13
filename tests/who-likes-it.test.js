import likes from "../functions/who-likes-it";

describe("Counts names in an array and returns an appropriate message", () => {
  test("empty array returns 'no one likes this'", () => {
    expect(likes([])).toBe("no one likes this");
  });

  test("array with one name Peter returns Peter likes this", () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
  });

  test("array [Jacob, Alex] returns Jacob and Alex like this", () => {
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  });
  test("array [Max, John, Mark] returns Max, John and Mark like this", () => {
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });

  test("array ['Alex', 'Jacob', 'Mark', 'Max'] returns 'Alex, Jacob and 2 others like this'", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe(
      "Alex, Jacob and 2 others like this"
    );
  });
});
