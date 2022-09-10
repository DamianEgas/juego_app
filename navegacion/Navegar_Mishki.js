import React from "react";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import {  Image } from "react-native";

//const Drawer = createDrawerNavigator();


const Tab = createBottomTabNavigator();

import Juego from "../componentes/juego"

import Info from "../componentes/info"
function MyTabs() {
    return (
      <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Info}  options={{
        tabBarIcon: () => (<Image source={require("../componentes/fotos/home.png")} style={{width: 24, height: 24}} />)
        }} />
        <Tab.Screen name="Juego" component={Juego} options={{
        tabBarIcon: () => (<Image source={require("../componentes/fotos/juego.png")} style={{width: 24, height: 24}} />)
        }} />
      </Tab.Navigator>
      </NavigationContainer>
    );
  }

export default MyTabs