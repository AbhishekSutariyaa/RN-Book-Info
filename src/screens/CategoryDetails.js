import React from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {DEVICEDETAIL} from '../../Data/Data';
import {COLORS} from '../screens/Theme';

const CategoryDetails = ({navigation, route}) => {
  const {itemId} = route.params;
  const data = DEVICEDETAIL.filter((item) => item.id == itemId);

  return (
    <View style={styles.container}>
      <FlatList
        // numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('BookDetails', {data: item})}
              style={styles.listContainer}>
              <Image
                resizeMode={'contain'}
                style={{width: '90%', height: '80%'}}
                source={{url: item.image}}
              />
              <Text numberOfLines={2} style={styles.modelTxt}>
                {item.model}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    borderColor: COLORS.categorycolor,
    borderWidth: 3,
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
  modelTxt: {marginTop: 10, fontWeight: 'bold', fontSize: 16},
};

export default CategoryDetails;
