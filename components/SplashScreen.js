import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

function SplashScreen({navigation}) {
    setTimeout(() => {
        navigation.navigate('Home');
    }, 10000);

            return (
                <ImageBackground style={{flex:1}} source={require('./images/bgChristWatermark.png')}>
                        <Animatable.View 
                            style={styles.animatedView}
                            animation='zoomIn'
                            duration={10000}
                            delay={1000}>
                                <View style={styles.imageView}>
                                    <Image  source={require('./images/jesusOrig.png')}></Image>
                                </View>
                                <View style={styles.view2}></View> 
                        </Animatable.View>
                </ImageBackground>
            );
        }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    animatedView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SplashScreen;

