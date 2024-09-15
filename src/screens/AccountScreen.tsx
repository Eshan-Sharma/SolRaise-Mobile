import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthorization } from "../utils/useAuthorization";
import { StyleSheet, View } from "react-native";

export default function AccountScreen() {
  const { selectedAccount } = useAuthorization();

  return (
    <>
      <SafeAreaView style={styles.screenContainer}></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    height: "100%",
    padding: 16,
    flex: 1,
  },
  scrollContainer: {
    height: "100%",
  },
  buttonGroup: {
    flexDirection: "column",
    paddingVertical: 4,
  },
});
