import { colors } from "@/constants/color";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function LayoutTabs() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.primaryContrast,
        headerTitleAlign: "center",
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          backgroundColor: colors.background,
        },

        tabBarButton: (props) => (
          <TouchableOpacity {...props} activeOpacity={0.8} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Transações",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="attach-money" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add-transition"
        options={{
          tabBarLabel: "",
          title: "Adicionar Transações",
          tabBarIcon: () => (
            <View style={styles.addButton}>
              <MaterialIcons
                name="add"
                size={40}
                color={colors.primaryContrast}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="summary"
        options={{
          title: "Resumo",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="pie-chart" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
  },
});
