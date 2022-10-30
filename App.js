import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const image1 = require('./images/wall.png');
const image2 = require('./images/petra.png');
const image3 = require('./images/redeemer.png');
const image4 = require('./images/machu.png');
const image5 = require('./images/chichen.png');
const image6 = require('./images/colosseum.png');
const image7 = require('./images/taj.png');

const timeline = [
  { title: 'Great Wall of China', image: image1 },
  { title: 'Petra', image: image2 },
  { title: 'The Redeemer', image: image3 },
  { title: 'Machu Picchu', image: image4 },
  { title: 'Chichen Itza', image: image5 },
  { title: 'Colosseum', image: image6 },
  { title: 'Taj Mahal', image: image7 },
];

export default class App extends Component {
  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer
          post={selected}
          position={position}
          onClose={this.closeViewer}
        />
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Seven Wonders of the World</Text>
        <ScrollView style={styles.content}>
          {
            timeline.map((post, index) =>
            <PostContainer key={index} post={post}
            onPress={this.showImage} />
            )
          }
        </ScrollView>
        {this.renderViewer()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});
