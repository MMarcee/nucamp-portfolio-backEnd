import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, CheckBox, Button, Icon } from 'react-native-elements';


const Profile = () => {
    
        return (
            <View style={styles.container}>
                <View>
                    <Image 
                        style={{width:150, height:150, borderRadius:75, marginTop:-100}}
                        source={{uri:"https://images.unsplash.com/photo-1617030524843-35ced0e4aaf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"}}
                    />
                </View>
                <View>
                    <Title>Name</Title>
                    <Text>About</Text>
                </View>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bc8f8f',
        
    },
    text: {
        color:'#fff',
    }

});

export default Profile;