import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {CATEGORY} from '../../Data/Data';
import {COLORS} from './Theme';

const BookCategory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{flexGrow: 1}}
        data={CATEGORY}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('CategoryDetails', {itemId: item.id})
              }
              style={styles.categoryContainer}>
              <Image style={styles.iconMobile} source={item.imageName} />
              <Text style={styles.title}>{item.title}</Text>
              <Image
                style={styles.iconArrow}
                source={require('../../assets/right-arrow.png')}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 10,
  },
  categoryContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 250,
    backgroundColor: COLORS.categorycolor,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  iconMobile: {
    height: 55,
    width: 55,
  },
  iconArrow: {
    height: 15,
    width: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color:"#ffffff"
  },
};

export default BookCategory;
