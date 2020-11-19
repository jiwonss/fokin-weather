import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatehrOptions = {
  Thunderstorm: {
    iconName: "weatehr-lightning",
    gradient: ["#ffffff", "#24243e"],
    title: "Thunderstorm",
    subtitle: "Stay home!",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#525252", "#3d72b4"],
    title: "Drizzle",
    subtitle: "It's raining!",
  },
  Rain: {
    iconName: "weather-hail",
    gradient: ["#304352", "#d7d2cc"],
    title: "Rain",
    subtitle: "It's raining!",
  },
  Snow: {
    iconName: "weather-snow-heavy",
    gradient: ["#363795", "#005C97"],
    title: "Snow",
    subtitle: "It's snowing!",
  },
  Atmosphere: {
    iconName: "",
    gradient: ["#fc00ff", "#00dbde"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#5614B0", "#DBD65C"],
    title: "Clear",
    subtitle: "It's sunny! Go outside!",
  },
  Clouds: {
    iconName: "weather-cloud",
    gradient: ["#2c3e50", "#3498db"],
    title: "Cloud",
    subtitle: "It's cloudy day",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatehrOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={86}
          name={weatehrOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatehrOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatehrOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 38,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
