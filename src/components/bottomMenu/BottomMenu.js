import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//import component
import {BottomMenuItem} from './BottomMenuItem';


export const BottomMenu = ({state, descriptors, navigation}) => {

  const totalWidth = Dimensions.get('window').width;
  const inset = useSafeAreaInsets();

  return (
    <View style={{paddingBottom:inset.bottom/1.5, backgroundColor: 'white'}}>
    <View style={[style.tabContainer, {width: totalWidth, height: 55}]}>
      <View style={{flexDirection: 'row'}}>
      
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.icon;

          const title = options.title;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              activeOpacity={0.5}
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}
              key={index}>
              <BottomMenuItem
                title={title}
                iconName={label.toString()}
                isCurrent={isFocused}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
    </View>
  );
};

const style = StyleSheet.create({
  tabContainer: {
    //height: 55,
    shadowOffset: {
     width: 0,
     height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.0,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    elevation: 0,
    marginTop: -20,
  },
});

export default BottomMenu;
