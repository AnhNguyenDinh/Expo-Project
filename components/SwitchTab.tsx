import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
const tabAnimation = [
  {
    id: 0,
    label: "Đầu tư P2P",
  },
  {
    id: 1,
    label: "Đầu tư nhóm",
  },
  {
    id: 2,
    label: "Sàn chuyển nhượng",
  },
  {
    id: 3,
    label: "Quản lý nội bộ",
  },
];
export default function SwitchTab() {
  const translateX = useSharedValue<number>(0);
  const [label, setLabel] = useState(tabAnimation[0].label);

  // highlight-start
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateX.value, {
          mass: 0.5,
          damping: 100,
        }),
      },
    ],
  }));
  // highlight-end

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]}>
        <Text
          style={{
            textAlign: "center",
            lineHeight: 50,
            zIndex: 1000,
            color: "#fff",
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      </Animated.View>
      {/* <Button onPress={handlePress} title="Click me" />

        <Button
          onPress={() => {
            translateX.value = 0;
          }}
          title="Click me"
        />
        <Button
          onPress={() => {
            translateX.value = 50;
          }}
          title="Click me"
        /> */}

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          columnGap: 12,
        }}
        horizontal={true}
      >
        {tabAnimation.map((item) => (
          <TouchableOpacity
            style={{
              width: 150,
              height: 50,
              backgroundColor: "#F2F2F2",
              zIndex: 0,
              borderRadius: 8,
            }}
            key={item.id}
            onPress={() => {
              translateX.value = withTiming(
                item.id === 0 ? item.id : item.id * 150 + 12 * item.id,
                { duration: 100 },
                () => {
                  runOnJS(setLabel)(item.label);
                }
              );
            }}
          >
            <Text
              style={{ textAlign: "center", lineHeight: 50, color: "#646464" }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    columnGap: 12,
  },
  box: {
    width: 150,
    height: 50,
    backgroundColor: "#FF4142",
    // borderRadius: 20,
    // marginVertical: 50,
    position: "absolute",
    zIndex: 5,
    borderRadius: 8,
  },
});
