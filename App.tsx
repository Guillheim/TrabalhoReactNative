import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Foundation from "@expo/vector-icons/Foundation";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.centralButton}>
        <TouchableOpacity style={styles.centralIcon}>
          <FontAwesome5 name="dice-d20" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.laranja, styles.topLeft]}
        >
          <FontAwesome name="magic" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.azul, styles.top]}>
          <Ionicons name="newspaper-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.vermelho, styles.topRight]}
        >
          <FontAwesome6 name="people-group" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.amarelo, styles.bottomLeft]}
        >
          <MaterialCommunityIcons name="sword-cross" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.roxo, styles.bottom]}>
          <FontAwesome5 name="wolf-pack-battalion" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.verde, styles.bottomRight]}
        >
          <Foundation name="mountains" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
  centralButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  centralIcon: {
    backgroundColor: "black",
    borderWidth: 4,
    borderColor: "white",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  laranja: {
    backgroundColor: "coral",
  },
  azul: {
    backgroundColor: "deepskyblue",
  },
  vermelho: {
    backgroundColor: "red",
  },
  amarelo: {
    backgroundColor: "goldenrod",
  },
  roxo: {
    backgroundColor: "blueviolet",
  },
  verde: {
    backgroundColor: "forestgreen",
  },

  topLeft: {
    top: -50,
    left: -80,
  },
  top: {
    top: -100,
  },
  topRight: {
    top: -50,
    right: -80,
  },
  bottomLeft: {
    bottom: -50,
    left: -80,
  },
  bottom: {
    bottom: -100,
  },
  bottomRight: {
    bottom: -50,
    right: -80,
  },
});
