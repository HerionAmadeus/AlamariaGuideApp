import React, { useState } from 'react';
import { View, Text, Linking, TouchableOpacity, StyleSheet,  Button  } from 'react-native';

const Compendium = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  const links = [
    { title: 'Alamaria', url: 'https://docs.google.com/document/d/1I6FyiJ6GCNBbg5FdnYegwWJhqpyw95Rlo4wnP7yvTTo/edit?usp=sharing' },
    { title: 'Guide du joueur débutant', url: 'https://www.blog.leroliste.com/pratiquer/7-conseils-pour-debuter-dans-le-jdr' },
    { title: 'Guide du MJ débutant', url: 'https://www.lebonmj.com/le-guide-ultime-du-maitre-du-jeu-debutant/' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compendium</Text>
      {links.map((link, index) => (
        <TouchableOpacity key={index} onPress={() => openLink(link.url)}>
          <View style={styles.button}>
            <Button title={link.title} onPress={() => openLink(link.url)} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});

export default Compendium;