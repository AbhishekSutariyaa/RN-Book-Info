import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from './Theme';
import {ADD_TO_FAV, REMOVE_FROM_FAV} from '../redux/FavReducer';

const BookDetails = ({route}) => {
  const {data} = route.params;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);
  const addItemToCart = (item) => dispatch({type: ADD_TO_FAV, payload: item});
  const removeItemFromCart = (item) =>
    dispatch({
      type: REMOVE_FROM_FAV,
      payload: item,
    });

  const isDataInCart = cartItems.some((item) => item == data);

  const renderBook = (item, index) => {
    const data = item.split(':');
    return (
      <View style={styles.detailItemcontainer}>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
          {data[0]} :{' '}
        </Text>
        <Text style={{textAlign: 'center'}}>{data[1]}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.mobileImage}
        source={{url: data.image}}
        resizeMode="contain"
      />
      <View style={styles.titleView}>
        <Text numberOfLines={1} style={{fontWeight: 'bold', fontSize: 20}}>
          {data.model}
        </Text>
        <Text
          numberOfLines={1}
          style={{fontWeight: 'bold', color: 'green', fontSize: 20}}>
          {data.price}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          alignSelf: 'center',
          padding: 10,
          borderRadius: 20,
          marginTop:20
        }}
        onPress={() =>
          !isDataInCart ? addItemToCart(data) : removeItemFromCart(data)
        }>
        <Text style={{fontWeight: 'bold'}}>
          {!isDataInCart ? 'Add to Collection' : 'Remove from Collection'}
        </Text>
      </TouchableOpacity>
      <View style={{borderBottomWidth: 1, marginTop: 10}}></View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data.detail}
        renderItem={({item, index}) => renderBook(item, index)}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
  },
  mobileImage: {width: '100%', height: '30%'},
  titleView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    marginTop: 20,
  },
  detailItemcontainer: {
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
  },
};

export default BookDetails;
