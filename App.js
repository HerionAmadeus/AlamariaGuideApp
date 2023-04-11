import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Navigation Example</Text>
        <Button title="Aller à Compendium" onPress={() => Stack.navigate('Compendium')} />
        <Button title="Aller à Character Sheet Generator" onPress={() => Stack.navigate('Générateur de fiches')} />
        <Button title="Aller à Dice Roller" onPress={() => Stack.navigate('Lanceur de dés')} />
        <Button title="Aller à Profile" onPress={() => Stack.navigate('Profil')} />
        <Button title="Aller à Profile" onPress={() => Stack.navigate('Editer mon profil')} />
        <Button title="Aller aux fiches" onPress={() => Stack.navigate('Mes fiches')} />
        <Button title="Aller aux playlists" onPress={() => Stack.navigate("Musique d'ambiance")} />
      </View>
      <Stack.Navigator>
        <Stack.Screen name="Compendium" component={Compendium} />
        <Stack.Screen name="Générateur de fiches" component={CharacterSheetGenerator} />
        <Stack.Screen name="Lanceur de dés" component={DiceRoller} />
        <Stack.Screen name="Profil" component={Profile} />
        <Stack.Screen name="Editer mon profil" component={EditProfile} />
        <Stack.Screen name="Mes fiches" component={MyCharacterSheets} />
        <Stack.Screen name="Musique d'ambiance" component={AmbientMusic} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
