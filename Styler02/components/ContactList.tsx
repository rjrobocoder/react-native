import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      firstName: 'Terry',
      lastName: 'Medhurst',
      email: 'atuny0@sohu.com',
      image: 'https://robohash.org/hicveldicta.png',
    },
    {
      id: 2,
      firstName: 'Sheldon',
      lastName: 'Quigley',
      email: 'hbingley1@plala.or.jp',
      image: 'https://robohash.org/doloremquesintcorrupti.png',
    },
    {
      id: 3,
      firstName: 'Terrill',
      lastName: 'Hills',
      email: 'rshawe2@51.la',
      image: 'https://robohash.org/consequunturautconsequatur.png',
    },
    {
      id: 4,
      firstName: 'Miles',
      lastName: 'Cummerata',
      email: 'yraigatt3@nature.com',
      image: 'https://robohash.org/facilisdignissimosdolore.png',
    },
    {
      id: 5,
      firstName: 'Mavis',
      lastName: 'Schultz',
      email: 'kmeus4@upenn.edu',
      image: 'https://robohash.org/adverovelit.png',
    },
    {
      id: 6,
      firstName: 'Alison',
      lastName: 'Reichert',
      email: 'jtreleven5@nhs.uk',
      image: 'https://robohash.org/laboriosamfacilisrem.png',
    },
    {
      id: 7,
      firstName: 'Oleta',
      lastName: 'Abbott',
      email: 'dpettegre6@columbia.edu',
      image: 'https://robohash.org/cupiditatererumquos.png',
    },
    {
      id: 8,
      firstName: 'Ewell',
      lastName: 'Mueller',
      email: 'ggude7@chron.com',
      image: 'https://robohash.org/quiaharumsapiente.png',
    },
    {
      id: 9,
      firstName: 'Demetrius',
      lastName: 'Corkery',
      email: 'nloiterton8@aol.com',
      image: 'https://robohash.org/excepturiiuremolestiae.png',
    },
    {
      id: 10,
      firstName: 'Eleanora',
      lastName: 'Price',
      email: 'umcgourty9@jalbum.net',
      image: 'https://robohash.org/aliquamcumqueiure.png',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {/* contacts?.map(() => ()) --> this no need a return keyword,  contacts?.map(() => {}) --> this needs a return keyword*/}
        {contacts?.map(({id, firstName, lastName, email, image}, index) => (
          <View key={index} style={styles.userCard}>
            <View>
              <Image source={{uri: image}} style={styles.userImage} />
            </View>
            <View>
              <Text style={styles.userName}>
                {firstName} {lastName}
              </Text>
              <Text style={styles.userEmail}>{email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
    marginBottom: 14,
    backgroundColor: '#8d3daf',
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#ace6a1',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userEmail: {
    fontSize: 12,
  },
});
