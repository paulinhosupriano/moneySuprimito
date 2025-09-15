import { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/Button/Index";
import { globalStyles } from "../../styles/globalStyles";

export default function AddTransitions() {
  const initialForm = {
    description: "Descrição ",
    value: 0,
    date: new Date(),
    category: "Renda",
  };

  const [form, setForm] = useState(initialForm);

  const addTransition = () => {
    Alert.alert("Adicionar");
  };

  const handleCurrencyChange = (text) => {
    const formattedValue = text.replace(/\D/g, "");
    const numberValue = formattedValue ? parseFloat(formattedValue) / 100 : 0;

    setForm({ ...form, value: numberValue });
  };

  const handleDateCurrent = (event, selected) => {
    Alert.alert("click")
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
              value={form.value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              onChangeText={handleCurrencyChange}
              keyboardType="numeric"
            />
          </View>

          {/* Data */}
          <View>
            <Text style={globalStyles.inputLabel}>Data</Text>

            <TouchableOpacity 
              onPress={handleDateCurrent}
            >
              <TextInput
                style={globalStyles.input}
                value={form.date}
                onChangeText={(date) => {
                  setForm({ ...form, date: date });
                }}
                editable={false}
              />
            </TouchableOpacity>
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
