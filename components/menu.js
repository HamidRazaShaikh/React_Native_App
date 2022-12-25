import React, {useState} from 'react';
import {View, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {Button, Menu, Provider} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';

const MenuPaper = () => {
  const [visible, setVisible] = useState(false);

  const closeMenu = () => setVisible(false);
  const openMenu = v => setVisible(true);
  return (
    <Provider>
      <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={{left: -100, position: 'absolute', zIndex: 100}}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <Feather
                name="menu"
                size={25}
                color={colors.textDark}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          }>
          <Menu.Item
            onPress={() => {
              Alert.alert('Action : ', 'Print');
              closeMenu();
            }}
            title="Orders"
          />
          <Menu.Item
            onPress={() => {
              Alert.alert('Action : ', 'Forward');
              closeMenu();
            }}
            title="Products"
          />
          <Menu.Item
            onPress={() => {
              Alert.alert('Action : ', 'Backward');
              closeMenu();
            }}
            title="Contact"
          />
          <Menu.Item
            onPress={() => {
              Alert.alert('Action :', 'Save');
              closeMenu();
            }}
            title="Reviews"
          />
        </Menu>
      </View>
    </Provider>
  );
};

const MenuIcon = () => {
  return (
    <View style={{zIndex: 100}}>
      <MenuPaper />
    </View>
  );
};

export default MenuIcon;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 200,
  },
  menuIcon: {
    height: 24,
    width: 24,
    color: colors.textDark,
  },
});
