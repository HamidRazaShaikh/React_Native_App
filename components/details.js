import * as React from 'react';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoriesData from '../assets/data/catagoriesData';
import popularData from '../assets/data/popularData';

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
} from 'react-native';

const Details = ({route, navigation}) => {
  const {itemId} = route.params;

  const item = popularData.filter(item => item.id === itemId)[0];
  // console.log(item)

  const renderIngredientItems = ({item}) => {
    return (
      <View
        style={
          item.id == 1
            ? styles.ingredientItemWrapper
            : styles.ingredientItemWrapperM
        }>
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
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
          <Text style={styles.mainTitle}>{item?.title}</Text>
          <Text style={styles.price}>$ {item?.price}</Text>
        </View>

        {/* Discription */}

        <View style={styles.discriptionWrapper}>
          <View style={styles.discription}>
            {/* size */}
            <View>
              <Text style={styles.properties}>Size</Text>
              <Text style={styles.value}>
                {item.sizeName} {item.sizeNumber}
              </Text>
            </View>
            {/* crust */}
            <View>
              <Text style={styles.properties}>crust</Text>
              <Text style={styles.value}>{item.crust}</Text>
            </View>
            {/* delivery time */}
            <View>
              <Text style={styles.properties}>Delivery in</Text>
              <Text style={styles.value}>{item.deliveryTime} min</Text>
            </View>
          </View>
          <View style={styles.image}>
            <Image source={item?.image} />
          </View>
        </View>
        {/* ingredients */}
        <View style={styles.ingredientWrapper}>
          <Text style={styles.ingredientTitle}>ingredients</Text>
          <View style={styles.ingredientListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientItems}
              keyExtractor={item => item.id}
              horizontal={true}
              style={styles.ingredientList}
            />
          </View>
        </View>
        {/* button container */}
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Order' , {item: item})}
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
              Place an order
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
    fontSize: 32,

    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
    width: '50%',
  },

  price: {
    fontSize: 32,
    marginTop: 20,

    fontFamily: 'Montserrat-SemiBold',
    color: colors.price,
    width: '50%',
  },

  discriptionWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discription: {},

  properties: {
    fontSize: 14,
    marginBottom: 5,

    fontFamily: 'Montserrat-medium',
    color: colors.textLight,
  },

  value: {
    fontSize: 16,
    marginBottom: 20,

    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },

  image: {
    marginLeft: 37,
    height: 176,
    width: 296,
  },

  ingredientWrapper: {
    marginTop: 30,
    // backgroundColor: colors.primary,
    paddingBottom: 10,
  },

  ingredientTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: colors.black,
  },

  ingredientItemWrapper: {
    marginTop: 19,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 10,
  },
  ingredientItemWrapperM: {
    marginTop: 19,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 10,
  },

  ingredientImage: {
    height: 80,
    width: 80,
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

export default Details;
