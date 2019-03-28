import React from "react"
import { View, Text } from "react-native"
import {
  //createBottomTabNavigator
  createStackNavigator,
  createAppContainer,
 } from "react-navigation"

import HomeScreen from './screens/Home'
import DetailsScreen from './screens/Details'
import CatScreen from './screens/Cat'
import MapScreen from './screens/Map'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  },
  Cat: {
    screen: CatScreen
  },
  Map: {
    screen: MapScreen
  }
}, {
  initialRouteName: "Home",
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
