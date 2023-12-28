import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text
            style={[
              styles.headingText,
              {fontSize: 16, color: '#000', fontWeight: '600'},
            ]}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{uri: 'https://i.morioh.com/210121/df916142.webp'}}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            consequatur voluptatum accusantium eveniet eius distinctio
            laboriosam blanditiis quam? Dicta dolore quasi repellendus amet
            provident excepturi quaerat minima voluptates quos earum.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://morioh.com/a/fa92811b7661/whats-new-in-javascript-es2021-es12',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://morioh.com/a/fa92811b7661/whats-new-in-javascript-es2021-es12',
              )
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
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
    height: 370,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    paddingHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#b3b300',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    height: 200,
    borderRadius: 16,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
