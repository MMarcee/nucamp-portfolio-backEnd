import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';


class Contact extends Component {
       
      static navigationOptions = {
          title: 'Contact Us'
      };

      sendMail() {
        MailComposer.composeAsync({
            recipients: ['mm@faithbase.org'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        });
    }
       
render() {
    return (
        <ImageBackground style={{flex:1}} source={require('./images/bgChristWatermark.png')}>
            <ScrollView>
                <Card title='Contact Information' wrapperStyle={{margin: 10}}>
                    <Text style={styles.textStyle}>Marcelle M.</Text>
                    <Text style={styles.textStyle}>Email: mm@faithbase.org</Text>
                    <Button
                        title="Send Email"
                        buttonStyle={{backgroundColor: '#bc8f8f', margin: 40}}
                        icon={<Icon
                        name='envelope-o'
                        type='font-awesome'
                        color='#fff'
                        iconStyle={{marginRight: 10}}
                        />}
                        onPress={() => this.sendMail()}
                        />
                </Card>
            </ScrollView>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingTop: 20
    },
    textStyle: {
        fontSize: 18,
    },
});

export default Contact;

