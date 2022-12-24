/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
  TextInput
} from 'react-native';

const Home = ({ navigation }) => {
  const renderCategoryItems = ({item}) => {
    return (
      <View
        style={[
          styles.categoriesItemWrapper,
          {
            backgroundColor: item.selected ? colors.primary : colors.white,
            marginLeft: item.id == 1 ? 0 : 20,
          },
        ]}>
        <Image source={item.image} style={styles.categoriesImage} />
        <Text style={styles.categoriesText}>{item.title}</Text>
        <View
          style={[
            styles.categoriesIconWrapper,
            {backgroundColor: item.selected ? colors.white : colors.secondary},
          ]}>
          <Feather
            size={8}
            name="chevron-right"
            style={[
              styles.chevronIcon,
              {color: item.selected ? colors.black : colors.white},
            ]}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          {/* navigation bar */}
          <View style={styles.nav}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather
              name="menu"
              size={16}
              color={colors.textDark}
              style={styles.menuIcon}
            />
          </View>
        </SafeAreaView>

        {/* title wrapper */}
        <View style={styles.titleWraper}>
          <Text style={styles.subTitle}>Food</Text>
          <Text style={styles.mainTitle}>Delivery</Text>
        </View>

        {/* search Wrapper */}

        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <TextInput style={styles.searchText}  placeholder="Search..."/>
          </View>
        </View>
        {/* catagories wrapper */}

        <View style={styles.catagorieshWrapper}>
          <Text style={styles.catagoryTitle}>Catagories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={CategoriesData}
              renderItem={renderCategoryItems}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* popular wrapper */}

        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          {popularData.map(item => (
            <TouchableOpacity key={item.id}  onPress={() => navigation.navigate('Details', {
              itemId: item.id,
             
            })}>
              <View style={styles.popularContainer}>
                <View style={styles.mainContainer}>
                  <View style={styles.popularMainTitleWrapper}>
                    <MaterialCommunityIcons
                      name="crown"
                      size={12}
                      color={colors.primary}
                    />
                    <Text style={styles.popularMainTitle}>top of the week</Text>
                  </View>
                  <View style={styles.popularSubTitleWrapper}>
                    <Text style={styles.popularSubTitle}>Primavera Pizza</Text>
                    <Text style={styles.popularTitlesWeight}>
                      weight {item.weight}
                    </Text>
                  </View>
                  <View style={styles.ratingWrapper}>
                    <View style={styles.addItemWrapper}>
                      <Feather name="plus" size={10} color={colors.textDark} />
                    </View>
                    <View style={styles.rattingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={colors.textDark}
                      />
                      <Text style={styles.rattingText}>{item.rating}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularImageWrapper}>
                  <Image source={item.image} style={styles.popularImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingLeft: 20,
    paddingRight: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
  },

  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  menuIcon: {
    height: 24,
    width: 24,
    color: colors.textDark,
  },

  titleWraper: {
    paddingTop: 30,
  },

  subTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: colors.textDark,
  },

  mainTitle: {
    fontSize: 32,
    marginTop: 5,
    fontFamily: 'Montserrat-Bold',
    color: colors.textDark,
  },

  searchWrapper: {
    // backgroundColor: 'red',
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },

  search: {
    // flex : 1

    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
    flex: 1,
  },
  searchText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },

  catagorieshWrapper: {
    paddingTop: 30,
  },
  catagoryTitle: {
    fontSize: 16,

    fontFamily: 'Montserrat-Bold',
    color: colors.black,
  },

  categoriesListWrapper: {
    // backgroundColor:'red',
    marginTop: 15,
  },

  categoriesItemWrapper: {
    paddingTop: 24,
    paddingLeft: 22,
    paddingRight: 23,
    backgroundColor: colors.primary,
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  categoriesImage: {
    height: 60,
    width: 60,
  },
  categoriesText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: colors.textDark,
  },

  categoriesIconWrapper: {
    backgroundColor: colors.white,
    height: 26,
    width: 26,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  chevronIcon: {
    color: colors.black,
  },

  popularWrapper: {
    marginTop: 20,
  },

  popularTitle: {
    fontSize: 16,

    fontFamily: 'Montserrat-Bold',
    color: colors.black,
  },
  popularContainer: {
    marginTop: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
    paddingLeft: 22,
    backgroundColor: colors.white,
    borderRadius: 25,
    marginBottom: 20,
  },

  mainContainer: {},

  popularMainTitleWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  popularMainTitle: {
    fontSize: 14,

    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
    marginLeft: 10,
  },

  popularSubTitleWrapper: {
    marginTop: 20,
    alignItems: 'flex-start',
  },

  popularSubTitle: {
    fontSize: 14,

    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
  },
  popularTitlesWeight: {
    fontSize: 12,

    fontFamily: 'Montserrat-Medium',
    color: colors.textLight,
    marginTop: 5
  },

  popularImageWrapper: {
    marginLeft: 40,
  },
  popularImage: {
    height: 125,
    width: 210,
    resizeMode: 'contain',
  },
  ratingWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  addItemWrapper: {
    width: 90,
    height: 53,
    backgroundColor: colors.primary,
    borderTopEndRadius: 26.5,
    borderBottomStartRadius: 26.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rattingWrapper: {
    marginLeft: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rattingText: {
    marginLeft: 5,
    fontSize: 12,

    fontFamily: 'Montserrat-SemiBold',
    color: colors.black,
  },
});



export default Home;
