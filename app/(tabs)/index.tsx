import { Image, StyleSheet, View, TouchableOpacity ,Button} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from "react-native-reanimated";
import SwitchTab from "@/components/SwitchTab";
const tabAnimation = [
  {
    id: 1,
    label: "Tab 1",
  },
  {
    id: 2,
    label: "Tab 2",
  },
];
export default function HomeScreen() {
  const translateX = useSharedValue<number>(0);
  const onChangeTab = (item: any) => {
    translateX.value += 50;
  };
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value) }],
  }));
  const handlePress = () => {
    translateX.value += 50;
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <SwitchTab />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  box: {
    backgroundColor: "red",
    height: 40,
    width: 50,
    zIndex: 1,
    position: "absolute",
    borderRadius: 8,
  },
  box1: {
    height: 50,
    width: 50,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});
