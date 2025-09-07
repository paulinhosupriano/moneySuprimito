import { globalStyles } from "@/styles/globalStyles";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";

export default function AddTransitions() {
  return (
    <SafeAreaView>
      <ScrollView style={globalStyles.content}>
        <View>
          <Text style={globalStyles.inputLabel}>Descrição</Text>
          <TextInput style={globalStyles.input} />
        </View>

        <View>
          <Text style={globalStyles.inputLabel}>Descrição</Text>
          <TextInput style={globalStyles.input} />
        </View>

        <View>
          <Text style={globalStyles.inputLabel}>Descrição</Text>
          <TextInput style={globalStyles.input} />
        </View>

        <View>
          <Text style={globalStyles.inputLabel}>Descrição</Text>
          <TextInput style={globalStyles.input} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
