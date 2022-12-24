import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Alert,
} from 'react-native';

import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OderPage = ({navigation, route}) => {
  const [name, onChangeName] = React.useState('');
  const [phone, onChangePhone] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [Qty, setQty] = React.useState(0);

  const {item} = route.params;

  const amount = Number((Qty * item.price).toFixed(3));

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!name) {
    ToastAndroid.show('Name is required.', ToastAndroid.SHORT);
  } else if (!phone) {
    ToastAndroid.show('Phone is required.', ToastAndroid.SHORT);
  } else if (!address) {
    ToastAndroid.show('Adress is required.', ToastAndroid.SHORT);
  }

  //   console.log(item.price)
  const addQty = () => {
    setQty(prev => prev + 1);
  };

  const subQty = () => {
    if (Qty >= 1) {
      setQty(prev => prev - 1);
    }
  };

  const createTwoButtonAlert = () => {
    if (name !== '' && phone !== '' && Qty > 0) {
      return Alert.alert(
        `Oder placed for ${name}`,

        `Title : ${item.title} 
        
        Quantity : ${Qty}
        
        Amount : $ ${amount}
            `,

        [
          {
            text: 'Ok',
            onPress: () => console.log('ok Pressed'),
            style: 'ok',
          },
        ],
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          {/* Navbar */}
          <View style={styles.navWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.backButton}>
                <Feather
                  size={12}
                  name="chevron-left"
                  style={styles.chevronIcon}
                  color={colors.white}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.ratting}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* titles */}

        <View style={styles.titleWrapper}>
          <Text style={styles.mainTitle}>Customer details </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Enter your name"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePhone}
            value={phone}
            placeholder="Enter your phone number"
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Enter your address"
          />
        </View>

        {/* order Qty */}
        <View style={styles.bookingContainer}>
          <Text style={styles.mainTitle}>Quantity and price details </Text>
          <View style={styles.qtyContainer}>
            {/* image */}
            <View style={styles.imageContainer}>
              <Image source={item?.image} style={styles.image} />
              <Text
                style={{
                  marginTop: -5,
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 18,
                  color: colors.black,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 18,
                  color: colors.black,
                }}>
                $ {item.price}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.qtyTitle}>Quantity</Text>
              <View style={styles.qtyButtons}>
                <TouchableOpacity style={styles.addButton} onPress={addQty}>
                  <Text style={styles.mainTitle}>+</Text>
                </TouchableOpacity>
                <Text style={styles.qty}>{Qty}</Text>
                <TouchableOpacity style={styles.subButton} onPress={subQty}>
                  <Text style={styles.mainTitle}>-</Text>
                </TouchableOpacity>
              </View>
              <Text style={[styles.qtyTitle, {marginTop: 10}]}>Amount</Text>
              <Text style={[styles.mainTitle, {marginTop: 10}]}>
                $ {amount}
              </Text>
            </View>
          </View>
        </View>

        {/* button container */}
        <View style={styles.button}>
          <TouchableOpacity
            onPress={createTwoButtonAlert}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 14,
                color: colors.black,
              }}>
              Submit your order
            </Text>
            <Feather
              size={14}
              name="chevron-right"
              style={{marginLeft: 10}}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.background,
  },

  navWrapper: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  backButton: {
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.textLight,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chevronIcon: {
    color: colors.black,
  },
  ratting: {
    height: 40,
    width: 40,
    backgroundColor: colors.primary,

    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleWrapper: {
    marginTop: 30,
  },

  mainTitle: {
    fontSize: 22,

    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },

  inputWrapper: {
    borderBottomColor: colors.primary,
    paddingBottom: 10,

    borderBottomWidth: 2,
    borderTopColor: colors.primary,
    paddingTop: 10,

    borderTopWidth: 2,
    // backgroundColor : 'red'
  },

  input: {
    marginBottom: 5,
    marginTop: 5,
    borderWidth: 1,
    padding: 15,
    borderColor: colors.textLight,
    borderRadius: 5,
  },

  bookingContainer: {
    marginTop: 10,
  },

  qtyContainer: {
    borderTopWidth: 2,
    borderTopColor: colors.primary,

    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  imageContainer: {
    width: '40%',

    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    resizeMode: 'contain',
    height: 150,
    width: 180,
  },

  priceContainer: {
    width: '60%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  qtyTitle: {
    fontSize: 15,

    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },

  qtyButtons: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  qty: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 22,

    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },

  subButton: {
    backgroundColor: colors.textLight,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: colors.primary,
    paddingTop: 23,
    paddingBottom: 23,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    borderRadius: 50,
  },
});

export default OderPage;
