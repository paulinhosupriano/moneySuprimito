import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "../constants/color";

export default function RootLayout() {
  return (
    <>
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.primary} style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      </SafeAreaProvider>
    </>
  );
}
