import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Title } from 'react-native-paper'

function Header({titleText}) {
    return (
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.container}>
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    headerContainer: {
        backgroundColor: '#242424',
    },
    headertitle: {
        color: '#fff'
    }
})

export default Header;