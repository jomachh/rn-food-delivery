import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export const WaveContainer = ({ children }) => {
  return (
    <View style={{ height: "57%" }}>
      <Svg
        height="50%"
        width="100%"
        viewBox="0 0 1440 320"
        style={{ position: "absolute", top: -150, zIndex: 500 }}
      >
        <Path
          fill="#fff"
          d="M0,128L80,154.7C160,181,320,235,480,234.7C640,235,800,181,960,170.7C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </Svg>
      <View style={{ zIndex: 600 }}>{children}</View>
    </View>
  );
};
