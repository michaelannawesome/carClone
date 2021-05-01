import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const Caritem = () => {
  return (
    <View>
      <View style={styles.carContainer}>
        <ImageBackground
          source={require("../../assets/Images/batmobile-3.jpeg")}
          style={styles.image}
        ></ImageBackground>
        <View style={styles.titles}>
          <Text style={styles.title}>Model Batman</Text>
          <Text style={styles.subtitle}>Starting at $89,995</Text>
        </View>
      </View>
      <StyledButton />
    </View>
  );
};

export default Caritem;
