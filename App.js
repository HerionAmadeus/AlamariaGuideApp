import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiceRoller from './components/DiceRoller';


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Stack.Screen name="Compendium" component={Compendium} /> */}
        {/* <Stack.Screen name="Générateur de fiches" component={CharacterSheetGenerator} /> */}
        <Tab.Screen name="Lanceur de dés" component={DiceRoller} />
        {/* <Stack.Screen name="Profil" component={Profile} /> */}
        {/* <Stack.Screen name="Editer mon profil" component={EditProfile} /> */}
        {/* <Stack.Screen name="Mes fiches" component={MyCharacterSheets} /> */}
        {/* <Stack.Screen name="Musique d'ambiance" component={AmbientMusic} />  */}
      </Tab.Navigator>
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
