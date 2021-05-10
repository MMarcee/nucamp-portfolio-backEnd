import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-elements';

class About extends Component {
       
      static navigationOptions = {
          title: 'About Us'
      };

render() {
    return (
        <ImageBackground style={{flex:1}} source={require('./images/bgChristWatermark.png')}>
            <ScrollView>
                <Card style={styles.cardBody} wrapperStyle={{margin: 20}, {backgroundColor: '#bc8f8faa'}}>
                    <Text style={styles.body}>The Great Commission</Text>
                    <Text style={styles.body}>is our MISSION !</Text>
                    <Text style={styles.body}>Matthew 28:16-20</Text>

                </Card>
            </ScrollView>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    cardBody: {
        backgroundColor: '#bc8f8faa',
        
    },
    
    body: {
        alignSelf: 'center',
        fontSize:25,
        padding: 5,
    },
    
});
export default About;