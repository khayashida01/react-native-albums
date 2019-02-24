/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

type Props = {};
class App extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

AppRegistry.registerComponent('albums', () => App);
