import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Text from "./Text";

const { all, equal, map, reverse, splitEvery } = require("ramda");

const splitIntoGroups = (groupCount, array) =>
  map(reverse, reverse(splitEvery(array.length / groupCount, reverse(array))));

const Test = ({ children, it }) => (
  <Div centered flex={1}>
    <Text fontFamily="Impact">{"it " + it}</Text>
    <Text fontFamily="Impact">{ children() ? "Pass" : "Fail"}</Text>
  </Div>
);

export default () => (
  <Div centered flex={1}>
    <HomeLink />
    <Test it="should split array into given number of groups">
      {() => {
        const groups = splitIntoGroups(3, ["a", "b", "c", "d", "e", "f", "g"]);
        return all(
          equal(groups[0], ["a", "b", "c"]),
          equal(groups[1], ["d", "e"]),
          equal(groups[2], ["f", "g"])
        );
      }}
    </Test>
  </Div>
);
