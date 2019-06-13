const { map, reverse, splitEvery } = require("ramda");

const splitIntoGroups = (groupCount, array) =>
  map(reverse, reverse(splitEvery(array.length / groupCount, reverse(array))));

it("should split array into given number of groups", () => {
  const groups = splitIntoGroups(3, ["a", "b", "c", "d", "e", "f", "g"]);
  expect(groups[0]).toEqual(["a", "b", "c"]);
  expect(groups[1]).toEqual(["d", "e"]);
  expect(groups[2]).toEqual(["f", "g"]);
});

