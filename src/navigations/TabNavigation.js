//Import React
import React from "react";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useSafeArea } from "react-native-safe-area-context";
import { View } from "react-native";


//Import BottomMenu
import BottomMenu  from "../components/bottomMenu/BottomMenu";

//Import Components 
import Scanner from '../pages/Scanner';
import ListPromo from '../pages/ListPromo';
import ListPromoUser from '../pages/ListPromoUser';


export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    // <View style={{ flex: 1, position: "relative"}}>
      <Tab.Navigator
        tabBar={(props) => <BottomMenu {...props} />}
      >
        <Tab.Screen name="format-list-bulleted" component={ListPromo} />
        <Tab.Screen name="fullscreen" component={Scanner} />
        <Tab.Screen name="person" component={ListPromoUser} />
        
      </Tab.Navigator>
    //   {/* {useSafeArea().bottom > 0 && (
    //     <View
    //       style={{
    //         height: useSafeArea().bottom - 5,
    //         backgroundColor: "white",
    //       }}
    //     />
    //   )} */}
    // </View>
  );
};