import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
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
    <View>
      <Text>Sélectionnez le type de dés :</Text>
      <Picker
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

      <Text>Sélectionnez le nombre de dés :</Text>
      <Picker
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

      <Button title="Lancer les dés" onPress={rollDice} />

      {results.length > 1 && (
        <View>
          <Text>Résultat de chaque dé :</Text>
          {results.map((result, index) => (
            <Text key={index}>Dé {index + 1} : {result}</Text>
          ))}
        </View>
      )}

      <Text>Total : {totalResult}</Text>
    </View>
  );
};

export default DiceRoller;