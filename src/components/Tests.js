import { all, equals, map, pipe, reverse, splitEvery } from "ramda";
import React from "react";
import Div from "./Div";
import HomeLink from "./HomeLink";
import Text from "./Text";

const splitIntoGroups = (groupCount, array) =>
  map(reverse, reverse(splitEvery(array.length / groupCount, reverse(array))));

const Test = ({ children, name }) => (
  <Div centered>
    <Text fontFamily="Impact" color={children ? "green" : "red"}>
      {name}
    </Text>
  </Div>
);

const Test2 = ({ children, test }) => (
  <Div centered>
    <Text fontFamily="Impact" color={test ? "green" : "red"}>
      {children}
    </Text>
  </Div>
);

export default () => (
  <Div centered flex={1}>

    <HomeLink />

    <Div centered>
      <Text>Hola Qué Tal</Text>
    </Div>

    <Test2 test={true}>True is green</Test2>

    <Test2 test={false}>False is red</Test2>

    <Test2 test={
      pipe(
        splitIntoGroups(3, ["a", "b", "c", "d", "e", "f", "g"]),
        groups =>
          all(
            equals(groups[0], ["a", "b", "c"]),
            equals(groups[1], ["d", "e"]),
            equals(groups[2], ["f", "g"])
          )
      )}>
      splitIntoGroups should split array into given number of groups
    </Test2>

<Test name="splitIntoGroups should split array into given number of groups">
      {pipe(
        splitIntoGroups(3, ["a", "b", "c", "d", "e", "f", "g"]),
        groups =>
          all(
            equals(groups[0], ["a", "b", "c"]),
            equals(groups[1], ["d", "e"]),
            equals(groups[2], ["f", "g"])
          )
      )}
    </Test>

  </Div>
);
