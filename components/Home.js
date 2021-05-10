import React, { Component } from 'react';
import { ScrollView, Text, View, ImageBackground, StyleSheet, Button, Modal } from 'react-native';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import { useFonts } from 'expo-font';
import { connect } from 'react-redux';
import Loading from './Loading';



const mapStateToProps = state => {
    return {
        parables: state.parables,
        
    };
};

function ModalFont() {
    const [loaded ] = useFonts({
      bahnschrift: require('../assets/bahnschrift.ttf'), //https://docs.expo.io/versions/v40.0.0/sdk/font/
      });
    if (!loaded) {
      return null;
    }
  }

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
          expanded: true, 
          show: true
        }
    }

    static navigationOptions = {
        title: 'Home'
    }
    
    render() {
        
        if (this.props.parables.isLoading) {
            return <Loading />;
        }
        if (this.props.parables.errMess) {
            return (
                <View>
                    <Text>{this.props.parables.errMess}</Text>
                </View>
            )
        }

        return (
            <ImageBackground style={{flex:1}} source={require('./images/bgChristWatermark.png')}>
                <ScrollView>
{/** @ Modal starts */}
                    <Button 
                        title="Parables of Jesus" 
                        color='#663399'
                        onPress={() => {
                        this.setState({show:true})}} 
                    />
                    <Modal
                        transparent={true}
                        visible={this.state.show}
                        >
                        <View style={{backgroundColor:"#bc8f8faa", flex:0.5}}>
                            <View 
                            style={{
                                backgroundColor:"#fff", 
                                margin:50,padding:40,
                                borderRadius: 10,
                                flex: 1,}}
                            >
                            <Text style={[{ModalFont}, {fontSize:16}, {textAlign: 'center'}, {lineHeight: 25}]}>If you consider yourself an elite in this physical world;</Text>
                            <Text style={[{ModalFont}, {fontSize:16}, {textAlign: 'center'}, {lineHeight: 25}]}>wouldn't you want to be one in the spiritual one as well?</Text>
                            <Text style={[{ModalFont}, {fontSize:16}, {textAlign: 'center'}, {lineHeight: 25}, {paddingBottom: 10}]}>There, your condition will be ETERNAL!</Text>
                            <Button 
                                title="Learn More" 
                                fontWeight="bold"
                                color='#663399'
                                onPress={() => {
                                this.setState({show:false})}} 
                            />    
                            </View>
                        </View>
                    </Modal>
{/** @ Modal ends */}
                    {this.props.parables.parables.map(({name, verse, description}) => {
                        return (  
                            <View>
                                <Text style={styles.heading1}>    
                                    <Text 
                                        onPress={()=>this.setState(
                                            {expanded: !this.state.expanded})}>{name}
                                    </Text> 
                                </Text>  
                                <Collapse 
                                    isExpanded={this.state.expanded} 
                                    onToggle={(isExpanded)=>this.setState(
                                        {expanded: isExpanded})}
                                    >
                                    <CollapseHeader>
                                    </CollapseHeader>
                                    <CollapseBody>
                                        <Text style={styles.heading2}>{verse}</Text>
                                        <Text style={styles.body}>{description}</Text>
                                    </CollapseBody>
                                </Collapse>
                            </View>
                        );
                    })}    
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
    },
    cardContainer: {
        flexGrow: 1,
    },
    card: {
        flex: 1,
        alignItems: 'baseline',
        justifyContent: 'space-around',
    },
    heading1: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#bc8f8f',
        borderBottomColor: '#663399',
        borderBottomWidth: 1,
        alignItems: "center",
        textTransform: 'uppercase',
        padding: 8,
       
    },
    heading2: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    body: {
        fontSize: 16,
        lineHeight: 15 * 1.5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        
    },
    // button: {
    //     borderRadius: 0,
    //     paddingVertical: 20,
    //     paddingHorizontal: 10,
    //     backgroundColor: '#bc8f8f',
    // },
    // buttonText: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     textTransform: 'uppercase',
    //     fontSize: 30,
    //     textAlign: 'center'

    // }

});

export default connect(mapStateToProps)(Home);
