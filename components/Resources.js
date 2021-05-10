import React, { Component } from 'react';
import { Text, View, FlatList, Linking } from 'react-native';
import { Tile } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './Loading';


const mapStateToProps = state => {
    return {
        podcasts: state.podcasts,
        
    };
};

class Resources extends Component {

    static navigationOptions = {
        title: 'Podcasts'
    }

    render() {
        const renderResourcesItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    caption={item.description}
                    featured

                    onPress={() => {
                        Linking.openURL(item.url.toString())
                        .catch(err => {
                            console.error("Failed opening page because: ", err)
                            alert('Failed to open page')
                        })}}
                    imageSrc={{uri: baseUrl + item.image}}
                />
            );
        };
        
        if (this.props.podcasts.isLoading) {
            return <Loading />;
        }
        if (this.props.podcasts.errMess) {
            return (
                <View>
                    <Text>{this.props.podcasts.errMess}</Text>
                </View>
            )
        }
        return (
            <FlatList
                data={this.props.podcasts.podcasts}
                renderItem={renderResourcesItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Resources);
"https://podcasts.apple.com/us/podcast/daily-radio-program-charles-stanley-in-touch-ministries/id117752146"