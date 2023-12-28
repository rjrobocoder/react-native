import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/000/225/472/original/vector-beautiful-landscape-illustration.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>M.V.72</Text>
          <Text style={styles.cardLabel}>City of Nature, Malkangiri</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam
            deleniti possimus, dolores quis vero veritatis placeat eum provident
            neque.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 320,
    // height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  cardElevated: {
    backgroundColor: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    color: '#ffffff',
    padding: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#ffffff',
  },
  cardLabel: {
    color: '#ffffff',
    fontSize: 14,
  },
  cardDescription: {
    color: '#758283',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#ffffff',
    marginBottom: 4,
  },
});
