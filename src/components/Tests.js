import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Text from "./Text";

const { all, equal, map, reverse, splitEvery } = require("ramda");

const splitIntoGroups = (groupCount, array) =>
  map(reverse, reverse(splitEvery(array.length / groupCount, reverse(array))));

it("should split array into given number of groups", () => {
  const groups = splitIntoGroups(3, ["a", "b", "c", "d", "e", "f", "g"]);
  expect(groups[0]).toEqual(["a", "b", "c"]);
  expect(groups[1]).toEqual(["d", "e"]);
  expect(groups[2]).toEqual(["f", "g"]);
});

const Test = ({ children, it }) => (
  <Div centered flex={1}>
    A Test
  </Div>
);

export default () => (
  <Div centered flex={1}>
    <HomeLink />
    <Text fontFamily="Impact">No Tests</Text>
    <Test it="should split array into given number of groups">
        {() => {
  const groups = splitIntoGroups(3, ["a", "b", "c", "d", "e", "f", "g"]);
          all(
            equal(groups[0], ["a", "b", "c"]),
  equal(groups[1], ["d", "e"]),
  equal(groups[2], ["f", "g"]))
        }
        }
    </Test>
  </Div>
);
