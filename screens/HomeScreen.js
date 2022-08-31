import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from "react-native";
import LiquidProgress from "react-native-liquid-progress";
import Svg, { Path } from "react-native-svg";

export default function Home() {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <View style={styles.container}>
      <LiquidProgress
        backgroundColor={"#ffffff"}
        frontWaveColor={"#f26541"}
        backWaveColor={"#edb33c"}
        fill={value}
        size={300}
      >
        <Animated.View style={styles.row}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={40}
            style={{ marginBottom: 10 }}
            viewBox="0 0 24 24"
            fill="none"
            stroke={(value * 100).toFixed(2) <= 60 ? "#f26541" : "white"}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-droplet"
          >
            <Path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
          </Svg>
          <Text
            style={{
              color: (value * 100).toFixed(2) <= 45 ? "#f26541" : "white",
              fontSize: 43,
            }}
          >
            {(value * 100).toFixed(2)}%
          </Text>
        </Animated.View>
      </LiquidProgress>
      <View style={styles.buttonLayer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setValue(Math.random())}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f7f1",
    alignItems: "center",
    justifyContent: "center",
  },
  row: { alignItems: "center", marginLeft: 30 },
  buttonLayer: { flex: 0.5, flexDirection: "row" },
  button: {
    width: 140,
    height: 50,
    backgroundColor: "#f26541",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 30,
  },
  buttonText: { fontSize: 15, color: "white" },
  title: { fontSize: 40, flex: 0.5, color: "gray" },
});
