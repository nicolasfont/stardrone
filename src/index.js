import hash from "object-hash";
import React, { createContext, useContext, useState } from "react";
import { render } from "react-dom";
import ExperimentInSpace from './components/ExperimentInSpace';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [base, setBase] = useState("");
  const seed = "0";
  const hue = parseInt(hash(seed + base), 16) % 360;
  const hue2 = (hue + 36) % 360;
  const saturation = `${80}%`;
  const lightness = `${60}%`;
  const color = `linear-gradient(hsl(${hue}, ${saturation}, ${lightness}),hsl(${hue2}, ${saturation}, ${lightness}))`;
  return (
    <ColorContext.Provider value={{ base, setBase, color }}>
      {children}
    </ColorContext.Provider>
  );
};

const useColor = () => useContext(ColorContext);

const DivContext = createContext();

const Div = ({ noBorder, centered, children, flex, style }) => {
  const { color } = useColor();
  const count = useContext(DivContext) || 0;
  const colored = count % 2 === 0;
  return (
    <div
      style={{
        alignItems: centered && "center",
        background: colored ? color : "white",
        border: !noBorder && "solid 4px",
        borderColor: !noBorder && "black",
        borderRadius: 4,
        color: colored ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        flex,
        justifyContent: centered && "center",
        margin: 4,
        padding: 4,
        textAlign: centered && "center",
        transition: "background-color 1000ms, color 1000ms",
        ...style
      }}
    >
      <DivContext.Provider value={count + 1}>{children}</DivContext.Provider>
    </div>
  );
};

const ColoringTextarea = ({ children, ...otherProps }) => {
  const { setBase } = useColor();

  return (
    <Div>
      <textarea
        autoFocus
        style={{
          fontSize: 24,
          fontWeight: 500,
          border: "none",
          outline: "none",
          resize: "none",
          width: "100%"
        }}
        onChange={e => {
          setBase(e.target.value);
        }}
        {...otherProps}
      />
    </Div>
  );
};

const Body = ({ children }) => {
  const { color } = useColor();
  const [firstColor] = useState(color);
  document.body.style.background = color;
  if (color !== firstColor) {
    document.body.style.transition = "background-color 1000ms, color 1000ms";
  }
  document.body.style.margin = 0;
  return (
    <Div noBorder flex={1} style={{ maxWidth: 760, margin: "auto" }}>
      {children}
    </Div>
  );
};

const 稿タ = () => {
  const { color } = useColor();
  return (
    <Div noBorder style={{ background: undefined, color: "white" }}>
      <Text small>
        稿タテモ同稚ゆばラぴ辞57日イ日能でぞあめ奈67応ヤキニロ戦聞けくぞに働助速高テホ本街性構く。居きゅご害覧図ウネノケ条体れル環62各実5索シヘチ稿電ンぞえ面月イタヘハ携祐定メ今無実トエ整挙ぶじべぎ勤三めのッ。産ぞんトぼ用見係スぞ市医きふクゆ井徳キ団発ょぎり場陸義ヱコオモ首児びなイ参約ほをまぶ告生ッ幸限でっル必子ぎ治推可リヨキツ円必へのクき面講ミホ覧一モナハ州和退冤冶ずづれ。
      </Text>
    </Div>
  );
};

const Text = ({ children, uppercase, small, style }) => (
  <span
    style={{
      fontSize: small ? 16 : 24,
      fontWeight: 500,
      fontFamily: "Helvetica, helvetica, arial, sans-serif",
      textTransform: uppercase && "uppercase",
      ...style
    }}
  >
    {children}
  </span>
);

render(<ExperimentInSpace />, document.getElementById("app"));
