import React, { Component } from 'react'

import {
  StyleSheet,
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native'

export default class CatImage extends Component {
  render() {
    return (
      <View style={styles.container}>
      {
        this.props.url ?
        (
          <Image
            resizeMode="contain"
            style={{
              aspectRatio: 1,
            }}
            source={{uri: this.props.url}}
          />
        ) : (
          <Text style={{
            alignSelf: 'center'
          }}>
            NO CAT :'(
          </Text>
        )
      }
      {
        this.props.loading ?
          (
            <Text style={{
              alignSelf: 'center'
            }}>
              LOADING
            </Text>
          ) : null
      }
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
})
