import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native'

import CatImage from '../../components/CatImage'

export default class CatScreen extends Component {

  state = {
    url: null,
    loading: false,
  }

  gimeCat = () => {
    fetch('https://api.thecatapi.com/v1/images/search?format=json')
      .then((response) => response.json())
      .then(([body]) => {
        this.setState({
          url: body.url
        })
      })
      .catch(error => console.log(error.message))
      .then(() => this.setState({
          loading: false
      }))

    this.setState({
      loading: true
    })
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TouchableHighlight
          style={styles.button}
          onPress={this.gimeCat}
        >
          <Text>GIME CAT</Text>
        </TouchableHighlight>
        <CatImage
          url={this.state.url}
          loading={this.state.loading}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 10,
    padding: 10,
  }
})
