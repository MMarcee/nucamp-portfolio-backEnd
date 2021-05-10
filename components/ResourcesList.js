import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Modal, Button, StyleSheet, Alert, PanResponder, Share } from 'react-native';
import { Card, Rating, Icon, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';
import { postComment } from '../redux/ActionCreators'; 
import * as Animatable from 'react-native-animatable';

const mapStateToProps = (state) => {
    return {
        podcasts: state.podcasts,
        comments: state.comments,
        favorites: state.favorites,
    };
};

const mapDispatchToProps = {
    postFavorite: (podcastId) => postFavorite(podcastId),    
    postComment:(podcastId, rating, author, text) => 
        postComment(podcastId, rating, author, text)
};

function RenderPodcast(props) {

    const {podcast} = props;

    const view = React.createRef();

    const recognizeDrag = ({dx}) => (dx < -200) ? true : false;

    const recognizeComment = ({dx}) => (dx > 200) ? true : false;
    
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            view.current.rubberBand(1000)
            .then((endState) => console.log(endState.finished ? 'finished' : 'canceled')
            );
        },
        onPanResponderEnd: (e, gestureState) => {
            console.log('pan responder end', gestureState);
            if (recognizeDrag(gestureState)) {
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you wish to add ' + podcast.name + ' to favorites?',
                    [
                        {
                            text: 'Cancel',
                            style: 'cancel',
                            onPress: () => console.log('Cancel Pressed')
                        },
                        {
                            text: 'OK',
                            onPress: () => props.favorite ?
                                console.log('Already set as a favorite') : 
                                props.markFavorite()
                        },
                    ],

                    { cancelable: false }
                );

            } else if (recognizeComment(gestureState)){
                props.onShowModal();
            }
            return true;
        },
    });
//

const sharePodcast = (title, message, url) => {
    Share.share({
        title: title,
        message: `${title}: ${message} ${url}`,
        url: url
    },{
        dialogTitle: 'Share ' + title
    });
};

    if (podcast) {
        return (
            <Animatable.View 
                animation='fadeInDown' 
                duration={2000} 
                delay={1000}
                ref={view}
                {...panResponder.panHandlers}>
                <Card
                    featuredTitle={podcast.name}
                    image={{uri: baseUrl + podcast.image}}>
                    <Text style={{margin: 10}}>{podcast.description}</Text>
                    <View style={styles.cardRow}> 
                        <Icon
                            name={props.favorite ? "heart" : "heart-o"}
                            type="font-awesome"
                            color="#f50"
                            raised
                            reverse
                            onPress={() => props.favorite ? 
                                console.log("Already set as a favorite") : props.markFavorite()}
                        />
                        <Icon
                            name={props.favorite ? "pencil" : "pencil"} 
                            type="font-awesome"
                            color="#5637DD"
                            raised
                            reverse
                            onPress={() => props.onShowModal()} 
                        />
                        <Icon
                            name={'share'}
                            type='font-awesome'
                            color='#5637DD'
                            raised
                            reverse
                            onPress={() => sharePodcast(podcast.name, podcast.description, baseUrl + podcast.image)} 
                        />
                    </View>
                </Card>
            </Animatable.View>
        );
    }
    return <View />;
}

function RenderComments({ comments }) {

    const renderCommentItem = ({item}) => {
        return(
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.text}</Text>
                <Rating 
                    startingValue={item.rating}
                    style={{ fontSize: 12, alignItems: "flex-start", paddingVertical: "5%" }}
                    imageSize={10}
                    readonly
                /> 
                <Text 
                    style={{ fontSize: 12 }}>
                        {`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Animatable.View animation='fadeInUp' duration={2000} delay={1000}>
            <Card title="Comments">
                <FlatList
                    data={comments}
                    renderItem={renderCommentItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        </Animatable.View>
    );
}

class PodcastInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
           showModal: false,
            rating: 5,
            author: "",
            text: ""
        };
    }
    
    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }
    
    handleComment(podcastId,rating, author, text) {
        this.props.postComment(
            podcastId, 
            rating, 
            author, 
            text
        );
     }

    resetForm() {
    this.setState({
      showModal: false,
      rating: 5,
      author: "",
      text: ""
    });  }

    markFavorite(podcastId) {
        this.props.postFavorite(podcastId);
    }

    static navigationOptions = {
        title: "Podcast Information",
    };

    render() {
        const podcastId = this.props.navigation.getParam("podcastId");
        const podcast = this.props.podcasts.podcasts.filter(podcast => podcast.id === podcastId)[0];
        const comments = this.props.comments.comments.filter((comment) => comment.podcastId === podcastId);
        
        return (
            <ScrollView>
                <RenderPodcast 
                    podcast={podcast} 
                    favorite={this.props.favorites.includes(podcastId)}
                    markFavorite={() => this.markFavorite(podcastId)}
                    onShowModal={() => this.toggleModal()}
                />
                <RenderComments comments={comments} />
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                    //style={styles.modal}
                >
                    <View style={styles.modal}> 
                        <Rating 
                            showRating //fractions="{1}"
                            startingValue={this.state.rating}
                            imageSize={40}
                            onFinishRating={(rating) => this.setState({ rating: rating })}
                            style={{ paddingVertical: 10 }}
                        /> 
                        <Input
                            placeholder="Author"
                            leftIcon={{ type: "font-awesome", name: "user-o" }}
                            leftIconContainerStyle={{ paddingRight: 10 }}
                            onChangeText={(author) => this.setState({author: author})}
                            value={this.state.author}
                        />
                        <Input 
                            placeholder="Comment"
                            leftIcon={{ type: "font-awesome", name: "comment-o" }}
                            leftIconContainerStyle={{ paddingRight: 10 }}
                            onChangeText={(text) => this.setState({text: text})}
                            value={this.state.text}
                        />

                    <View style={{ margin: 10 }}>
                        <Button
                            title="Submit"
                            color="#5637DD"
                            onPress={() => {
                                this.handleComment(podcastId, this.state.rating, this.state.author, this.state.text
                            );
                            this.resetForm();
                            }}
                            
                        />
                    </View>
                        <View style={{ margin: 10 }}> 
                            <Button
                                onPress={() => {
                                this.toggleModal();
                                this.resetForm();
                                }}
                                color="#808080"
                                title="Cancel"
                            />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        margin: 20
    },
    modal: { 
        justifyContent: "center",
        margin: 20
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PodcastInfo);
