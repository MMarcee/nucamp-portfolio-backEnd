import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Card, CardImage } from 'react-native-material-cards'
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './Loading';

const mapStateToProps = state => {
    return {
        gospel: state.gospel,
        
    };
};

class TheGospel extends Component {

    static navigationOptions = {
        title: 'The Gospel In Essence'
    }

    render() {
        let {container, cardBody, cardHeading1, cardHeading2, card, cardImage} = styles
        const renderGospelItem = ({item}) => {
            return (
                <View style={container}>
                    <TouchableOpacity style={card} 
                    onPress={() => 
                        Alert.alert(
                            'Are you saved?',
                            'Are you confident your soul would be at peace if your were to die today?!?',
                            [
                                {
                                    text: 'Godspeed',
                                    onPress: () => console.log(item.name + 'Not Deleted'),
                                    style: 'cancel'
                                },
                            ],
                            { cancelable: false }
                        )
                    }>
                        <Card>
                                <Text style={cardHeading1}>{item.name}</Text> 
                                <Text style={cardHeading2}>{item.verse}</Text>
                                <Text style={cardBody}>{item.description}</Text>
                            <CardImage style={cardImage} source={{uri: baseUrl + item.image}} />
                                
                        </Card>
                    </TouchableOpacity>
                </View>
             );
        };
        
        if (this.props.gospel.isLoading) {
            return <Loading />;
        }
        if (this.props.gospel.errMess) {
            return (
                <View>
                    <Text>{this.props.gospel.errMess}</Text>
                </View>
            )
        }
        return (
                <FlatList
                    style={container}
                    data={this.props.gospel.gospel}
                    renderItem={renderGospelItem}
                    keyExtractor={item => item.id.toString()}>
                </FlatList>
            );
        }
    }

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    cardHeading1: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
        padding: 5,
    },
    cardHeading2: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 5,
        lineHeight: 10 * 1.5,
    },
    cardBody: {
        fontSize:18,
        padding: 5,
    },
    card: {
        backgroundColor: '#fff',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#bc8f8f',
        marginLeft: '2%',
        width: '96%',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height: 3
    },
    }
});

export default connect(mapStateToProps)(TheGospel);