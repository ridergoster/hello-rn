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

export default class HomeScreen extends Component {

  back = () => {
    this.props.navigation.goBack()
  }

  navigate = () => {
    this.props.navigation.navigate('Details')
  }

  push = () => {
    this.props.navigation.push('Details')
  }

  gotoCat = () => {
    this.props.navigation.navigate('Cat')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to HOME</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          title="Go back"
          onPress={this.back}
        />
        <Button
          title="Navigate Details"
          onPress={this.navigate}
        />
        <Button
          title="Push Details"
          onPress={this.push}
        />
        <Button
          title="Go to Cat"
          onPress={this.gotoCat}
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
