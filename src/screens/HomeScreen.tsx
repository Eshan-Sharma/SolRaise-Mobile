import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { Section } from "../Section";
import { useAuthorization } from "../utils/useAuthorization";
import { AccountDetailFeature } from "../components/account/account-detail-feature";
import { SignInFeature } from "../components/sign-in/sign-in-feature";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
  const { selectedAccount } = useAuthorization();

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text
        style={{ fontWeight: "bold", marginBottom: 12 }}
        variant="displaySmall"
      >
        SolRaise
      </Text>
      {selectedAccount ? (
        <AccountDetailFeature />
      ) : (
        <>
          <SignInFeature />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    padding: 16,
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "column",
    paddingVertical: 4,
  },
});
