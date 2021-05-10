import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import Loading from './Loading';

class BibleAPI extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoading: true,
          dataSource: []
      }
  }

  static navigationOptions = {
      title: 'The Holy Bible - KJV'
  }

  componentDidMount () {
      return fetch('https://jsonplaceholder.typicode.com/posts', 
      )
      .then ((response) => response.json())
      .then ((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      })
      .catch((error) => {
          console.log(error)
      });
    }
  
  _renderItem = ({item, index}) => {
      return (
          <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.body}</Text>
              
          </View>
      )
  }

  render() {
      let {dataSource, isLoading} = this.state

      if (isLoading) {
          return <Loading />;
      }
      if (this.state.errMess) {
          return (
              <View>
                  <Text>{this.state.errMess}</Text>
              </View>
          )
      } else {
      
          return (
              <ImageBackground style={{flex:1}} source={require('./images/bgChristWatermark.png')}>
              <View style={styles.container}>
                  
                  <FlatList
                      data={dataSource}
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => index.toString()}
                  />
                  
              </View>
              </ImageBackground>
          );
      }
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
},
item: {
  padding: 5,
  borderBottomWidth: 1,
  borderBottomColor: '#bc8f8f'
},
title: {
  fontSize: 16,
  color: '#000',
  fontWeight: 'bold',
  textTransform: 'uppercase',

},
button: {
  padding: 10,
  marginVertical: 15,
  backgroundColor: '#0645AD'
},
buttonText: {
  color: '#fff'
}
});

export default BibleAPI;