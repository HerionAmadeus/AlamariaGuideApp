import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiceRoller from './components/DiceRoller';
import Compendium from './components/Compendium';


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Compendium" component={Compendium} />
        {/* <Tab.Screen name="Générateur de fiches" component={CharacterSheetGenerator} /> */}
        <Tab.Screen name="Lanceur de dés" component={DiceRoller} />
        {/* <Tab.Screen name="Profil" component={Profile} /> */}
        {/* <Tab.Screen name="Editer mon profil" component={EditProfile} /> */}
        {/* <Tab.Screen name="Mes fiches" component={MyCharacterSheets} /> */}
        {/* <Tab.Screen name="Musique d'ambiance" component={AmbientMusic} />  */}
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
