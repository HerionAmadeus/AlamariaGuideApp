import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const DiceRoller = () => {
  const [diceType, setDiceType] = useState('d6');
  const [diceCount, setDiceCount] = useState('1');
  const [results, setResults] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  const rollDice = () => {
    const min = 1;
    const max = parseInt(diceType.slice(1), 10);
    const count = parseInt(diceCount, 10);
    let total = 0;
    const diceResults = [];

    for (let i = 0; i < count; i++) {
      const result = Math.floor(Math.random() * (max - min + 1)) + min;
      diceResults.push(result);
      total += result;
    }

    setResults(diceResults);
    setTotalResult(total);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sélectionnez le type de dés :</Text>
      <Picker
        style={styles.picker}
        selectedValue={diceType}
        onValueChange={(itemValue) => setDiceType(itemValue)}
      >
        <Picker.Item label="d2" value="d2" />
        <Picker.Item label="d4" value="d4" />
        <Picker.Item label="d6" value="d6" />
        <Picker.Item label="d8" value="d8" />
        <Picker.Item label="d10" value="d10" />
        <Picker.Item label="d12" value="d12" />
        <Picker.Item label="d20" value="d20" />
        <Picker.Item label="d100" value="d100" />
      </Picker>

      <Text style={styles.label}>Sélectionnez le nombre de dés :</Text>
      <Picker
        style={styles.picker}
        selectedValue={diceCount}
        onValueChange={(itemValue) => setDiceCount(itemValue)}
      >
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
        <Picker.Item label="8" value="8" />
        <Picker.Item label="9" value="9" />
        {/* Ajoutez autant d'éléments que nécessaire */}
      </Picker>

      <Button style={styles.button} title="Lancer les dés" onPress={rollDice} />
    


      {diceCount !== '1' && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsLabel}>Résultat de chaque dé :</Text>
          <View style={styles.resultsTable}>
            {results.map((result, index) => (
              <View key={index} style={styles.resultRow}>
                <Text style={styles.resultDiceText}>Dé {index + 1} ({diceType}) : </Text>
                <Text style={styles.resultText}>{result}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
      <Text>{'\n'}</Text>
<View style={styles.totalContainer}>
  <Text style={styles.totalLabel}>Total :</Text>
</View>

<View style={styles.totalContainer}>
  <Text style={styles.totalText}>{totalResult}</Text>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
  },
  totalText: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  resultsContainer: {
    alignItems: 'center',
  },
  resultsLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    marginTop: 32,
  },
  resultsTable: {
    marginTop: 10,
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  resultDiceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 14,
  },
});

export default DiceRoller;