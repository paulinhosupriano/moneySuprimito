import Button from "@/components/Button/Index";
import { globalStyles } from "@/styles/globalStyles";
import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AddTransitions() {
  const initialForm = {
    description: "Descrição ",
    value: 1,
    date: "01/01/2000",
    category: "Renda",
  };

  const [form, setForm] = useState(initialForm);

  const addTransition = () => {
    Alert.alert("Adicionar");
  };

  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView style={globalStyles.content}>
        <View style={styles.form}>
          {/* Descrição */}
          <View>
            <Text style={globalStyles.inputLabel}>Descrição</Text>
            <TextInput
              style={globalStyles.input}
              value={form.description}
              onChangeText={(text) => {
                setForm({ ...form, description: text });
              }}
            />
          </View>

          {/* Valor */}
          <View>
            <Text style={globalStyles.inputLabel}>Valor</Text>
            <TextInput
              style={globalStyles.input}
              value={form.value}
              onChangeText={(text) => {
                setForm({ ...form, value: text });
              }}
              keyboardType="numeric"
            />
          </View>

          {/* Data */}
          <View>
            <Text style={globalStyles.inputLabel}>Data</Text>
            <TextInput
              style={globalStyles.input}
              value={form.date}
              onChangeText={(date) => {
                setForm({ ...form, date: date });
              }}
            />
          </View>

          {/* Categoria */}
          <View>
            <Text style={globalStyles.inputLabel}>Categoria</Text>
            <TextInput
              style={globalStyles.input}
              value={form.category}
              onChangeText={(category) => {
                setForm({ ...form, category: category });
              }}
            />
          </View>
        </View>

        <Button onPress={addTransition}>Adicionar</Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 12,
    marginBottom: 40,
    marginTop: 10,
  },
});
