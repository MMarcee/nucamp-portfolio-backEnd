import React, { Component } from 'react';
import Constants from 'expo-constants';
import SplashScreen from './SplashScreen';
import Home from './Home';
import ResourcesList from './ResourcesList';
import Contact from './Contact';
import About from './About';
import Bible from './Bible';
import TheGospel from './TheGospel';
import Resources from './Resources';
import Login from './Login';
import { View, Platform, StyleSheet, Text, ScrollView, Image, ImageBackground, Alert, ToastAndroid } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchComments, fetchGospel, fetchPodcasts, fetchBible, fetchParables } from '../redux/ActionCreators';
import NetInfo from '@react-native-community/netinfo';

    const mapDispatchToProps = {
        fetchComments,
        fetchGospel,
        fetchPodcasts,
        fetchBible,
        fetchParables,
    };

const ResourcesNavigator = createStackNavigator(
    {
        Resources: { 
            screen: Resources,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='podcast'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                    onPress={() => navigation.toggleDrawer()}
                />
            })
         },
        ResourcesList: { screen: ResourcesList }
    }, 
    {
        initialRouteName: 'Resources',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#bc8f8f'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
  );

const SplashScreenNavigator = createStackNavigator(
    {
        SplashScreen: { screen: SplashScreen }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#bc8f8f',
                
            },
            headerShown: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
  );

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#bc8f8f'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
  );

const AboutNavigator = createStackNavigator(
  {
      About: { screen: About }
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#bc8f8f'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          },
          headerLeft: <Icon
              name='globe'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
          />
      })
    }
);

const ContactNavigator = createStackNavigator(
  {
      Contact: { screen: Contact }
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          headerStyle: {
              backgroundColor: '#bc8f8f'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
              color: '#fff'
          },
          headerLeft: <Icon
              name='address-card'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
          />
      })
  }
);
const BibleNavigator = createStackNavigator(
    {
        Bible: { screen: Bible }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#bc8f8f'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='book'
                type='fa-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
  );

const TheGospelNavigator = createStackNavigator(
    {
        TheGospel: { screen: TheGospel }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#bc8f8f'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
  );

   const LoginNavigator = createStackNavigator(
    {
         Login: { screen: Login }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#bc8f8f'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);
  
const CustomDrawerContentComponent = props => (
<ImageBackground style={{flex:1}} source={require('./images/bgChristWatermark.png')}>  
  <ScrollView>
     <SafeAreaView
         style={styles.container}
         forceInset={{top: 'always', horizontal: 'never'}}
      >
              <View style={styles.drawerHeader}>
              <View style={{flex: 1}}>
                  <Image
                      source={require('../assets/logo.png')}
                      style={styles.drawerImage}
                  />
              </View>
              <View style={{flex: 2}}>
                  <Text style={styles.drawerHeaderText}>God Matters a Lot!</Text>
              </View>
          </View>
          <DrawerItems {...props} />
     </SafeAreaView> 
  </ScrollView>
  </ImageBackground>
);

const MainNavigator = createDrawerNavigator(
  {
    Home: { 
        screen: HomeNavigator,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Bible: { 
        screen: BibleNavigator,
        navigationOptions: {
            drawerLabel: 'The Holy Bible',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='book'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    TheGospel: { 
        screen: TheGospelNavigator,
        navigationOptions: {
            drawerLabel: 'The Gospel',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='heart'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Resources: { 
        screen: ResourcesNavigator,
        navigationOptions: {
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='lightbulb-o'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    
    About: { 
        screen: AboutNavigator,
        navigationOptions: {
            drawerLabel: 'About Us',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='globe'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Contact: { 
        screen: ContactNavigator,
        navigationOptions: {
            drawerLabel: 'Contact Us',
            drawerIcon: ({tintColor}) => (
                <Icon
                    name='envelope'
                    type='font-awesome'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Login: {
        screen: LoginNavigator,
        navigationOptions: {
           drawerIcon: ({tintColor}) => (
               <Icon
                   name='sign-in'
                   type='font-awesome'
                   size={24}
                   color={tintColor}
               />
            )
        }
    },
    
    SplashScreen: { 
        screen: SplashScreenNavigator,
        navigationOptions: {
            drawerLabel: () => null,
            drawerIcon: () => null,
        }
    },  
    },
    {
    initialRouteName: 'SplashScreen',
    drawerBackgroundColor: '#fff0f5',
    contentComponent: CustomDrawerContentComponent
  }
);


const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {

    // @Redux Section Begins:
componentDidMount() {
    this.props.fetchGospel();
    this.props.fetchBible();
    this.props.fetchComments();
    this.props.fetchParables();
    this.props.fetchPodcasts();
    this.ShowNetInfo();
    
    this.unsubscribeNetInfo = NetInfo.addEventListener(connectionInfo => {
        this.handleConnectivityChange(connectionInfo);
    });
}

async ShowNetInfo(){
    const connectionInfo = await NetInfo.fetch()
                 (Platform.OS === 'ios')
            ? Alert.alert('Initial Network Connectivity Type:', connectionInfo.type)
            : ToastAndroid.show('Initial Network Connectivity Type: ' +
                connectionInfo.type, ToastAndroid.LONG);
};

componentWillUnmount() {
    this.unsubscribeNetInfo();
}

handleConnectivityChange = connectionInfo => {
    let connectionMsg = 'Congrats! You are now connected.';
    switch (connectionInfo.type) {
        case 'none':
            connectionMsg = 'No active network.';
            break;
        case 'unknown':
            connectionMsg = 'No network connection state.';
            break;
        case 'cellular':
            connectionMsg = 'Your are connected via a cellular network.';
            break;
        case 'wifi':
            connectionMsg = 'You are connected via a WiFi network.';
            break;
    }
    (Platform.OS === 'ios')
        ? Alert.alert('Connection change:', connectionMsg)
        : ToastAndroid.show(connectionMsg, ToastAndroid.LONG);
}
// Redux Section End

    render() {
        return (
            <View
              style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}>
                <AppNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  drawerHeader: {
      backgroundColor: '#bc8f8f',
      height: 110,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
  },
  drawerHeaderText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
  },
  drawerImage: {
      margin: 10,
      height: 60,
      width: 60
  },
  stackIcon: {
      marginLeft: 10,
      color: '#fff',
      fontSize: 24
  }
});

export default connect(null, mapDispatchToProps)(Main);
