import React, {Component} from 'react'
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export default class DetailsScreen extends Component {

  back = () => {
    this.props.navigation.goBack()
  }

  navigate = () => {
    this.props.navigation.navigate("Home")
  }

  push = () => {
    this.props.navigation.push("Home")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to DETAILS</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Go back"
          onPress={this.back}
        />
        <Button
          title="Navigate Home"
          onPress={this.navigate}
        />
        <Button
          title="Push Home"
          onPress={this.push}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
