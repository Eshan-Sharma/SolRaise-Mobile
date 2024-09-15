import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const Section: React.FC<{
  children?: ReactNode;
  description?: string;
  title?: string;
}> = ({ children, description, title }) => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      {title ? (
        <Text style={styles.titleText} variant="headlineMedium">
          {title}
        </Text>
      ) : null}
      {description ? <Text variant="bodyMedium">{description}</Text> : null}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
  },
  sectionContainer: {
    marginTop: 18,
  },
  childrenContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
});
