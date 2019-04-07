import React , {Component} from'react';
import { View, Platform, Text, ScrollView, Image, StyleSheet, NetInfo, ToastAndroid } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';
import {createStackNavigator , createAppContainer ,createDrawerNavigator , DrawerItems , SafeAreaView } from 'react-navigation';
import {Icon} from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import Reservation from './ReservationComponent';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
  })


const MenuNavigator = createStackNavigator({
    Menu: {screen:Menu,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Icon name="menu" size={24} 
                                color= 'white'
                             onPress={ () => navigation.toggleDrawer() } />          
          })  
    },
    Dishdetail : {screen:Dishdetail}
},{
    initialRouteName:'Menu',
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
});


const HomeNavigator = createStackNavigator({
    Home: {screen:Home},
},{
    defaultNavigationOptions: ({navigation})=>({
        headerStyle: {
          backgroundColor: '#512DA8',
        },
        headerTintColor: 'yellow',
        headerTitleStyle: {
            color:'#fff'
        },

        headerLeft: <Icon name="menu" size={24} 
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />    

        })
});

const AboutNavigator = createStackNavigator({
    About: {screen:AboutUs},
},{
    defaultNavigationOptions: ({navigation})=> ({
        headerStyle: {
          backgroundColor: '#512DA8',
        },
        headerTitleStyle:{
            color:"#fff"
        },
        headerTintColor: '#fff',

        headerLeft: <Icon name="menu" size={24} 
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />    
      })
});
const LoginNavigator = createStackNavigator({
  Login: Login
}, {
navigationOptions: ({ navigation }) => ({
  headerStyle: {
      backgroundColor: "#512DA8"
  },
  headerTitleStyle: {
      color: "#fff"            
  },
  title: 'Login',
  headerTintColor: "#fff",
  headerLeft: <Icon name="menu" size={24}
    iconStyle={{ color: 'white' }} 
    onPress={ () => navigation.toggleDrawer() } />    
})
});

const ContactNavigator = createStackNavigator({
    Contact: {screen:ContactUs},
},{
    defaultNavigationOptions: ({navigation})=> ({
        headerStyle: {
          backgroundColor: '#512DA8',
        },
        headerTitleStyle:{
            color:"#fff"
        },
        headerTintColor: '#fff',
        headerLeft: <Icon name="menu" size={24} 
        color= 'white'
        onPress={ () => navigation.toggleDrawer() } />    
      })
});

const ReservationNavigator = createStackNavigator({
    Reservation: { screen: Reservation }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        iconStyle={{ color: 'white' }} 
        onPress={ () => navigation.navigate('DrawerToggle') } />    
    })
  })

  const FavoritesNavigator = createStackNavigator({
    Favorites: { screen: Favorites }
  }, {

    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"            
      },
      headerTintColor: "#fff",
      headerLeft: <Icon name="menu" size={24}
        iconStyle={{ color: 'white' }} 
        onPress={ () => navigation.navigate('DrawerToggle') } />    
    })
  })
  

const CustomDrawerContentComponent = (props)=>(
    <ScrollView>
        <SafeAreaView style={StyleSheet.container} forceInset={{top:'always' , horizontal:'never'}} >
        <View style={StyleSheet.drawerHeader} >
            <View style={{flex:1}} >
            <Image 
            source={require('./images/logo.png')} 
            style={StyleSheet.drawerImage}
            />
            </View>
            <View style={{flex:2}} >
                <Text style={styles.drawerHeaderText} >Ristorante Con Fusion</Text>
            </View>
        </View>
        <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator({
  Login: 
  { screen: LoginNavigator,
    navigationOptions: {
      title: 'Login',
      drawerLabel: 'Login',
      drawerIcon: ({ tintColor, focused }) => (
        <Icon
          name='sign-in'
          type='font-awesome'            
          size={24}
          iconStyle={{ color: tintColor }}
        />
      ),
    }
  },
    Home:{
        screen:HomeNavigator,
        navigationOptions:{
            title:'Home',
            drawerLabel:'Home',
            drawerIcon:({tintColor})=>(
                <Icon
                name='home'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
            )
        }
    },
    Menu:{
        screen:MenuNavigator,
        navigationOptions:{
            title:'Menu',
            drawerLabel:'Menu',
            drawerIcon:({tintColor})=>(
                <Icon
                name='list'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
            )
        }      
    },
    
    ContactUs:{
        screen:ContactNavigator,
        navigationOptions:{
            title:'Contact Us',
            drawerLabel:'Contact Us',
            drawerIcon:({tintColor})=>(
                <Icon
                name='address-card'
                type='font-awesome'
                size={22}
                color={tintColor}
                />
            )
        }
    },
    Favorites:
    { screen: FavoritesNavigator,
      navigationOptions: {
        title: 'My Favorites',
        drawerLabel: 'My Favorites',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='heart'
            type='font-awesome'            
            size={24}
            iconStyle={{ color: tintColor }}
          />
        ),
      }
    },
    
    Reservation:
    { screen: ReservationNavigator,
      navigationOptions: {
        title: 'Reserve Table',
        drawerLabel: 'Reserve Table',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='cutlery'
            type='font-awesome'            
            size={24}
            iconStyle={{ color: tintColor }}
          />
        ),
      }
    },
    AboutUs:{
        screen:AboutNavigator,
        navigationOptions:{
            title: 'About Us',
            drawerLabel:'About Us',
            drawerIcon:({tintColor})=>(
                <Icon
                name='info-circle'
                type='font-awesome'
                size={24}
                color={tintColor}
                />
            )
        }
    }
},{
  initialRouteName: 'Home',
  drawerBackgroundColor: '#D1C4E9',
  contentComponent: CustomDrawerContentComponent
});



const RootStack = createAppContainer(MainNavigator)

class Main extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
      this.props.fetchDishes();
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders();
  
      NetInfo.getConnectionInfo()
          .then((connectionInfo) => {
              ToastAndroid.show('Initial Network Connectivity Type: '
                  + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType,
                  ToastAndroid.LONG)
          });
  
      NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {
      NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
    }

    handleConnectivityChange = (connectionInfo) => {
      switch (connectionInfo.type) {
        case 'none':
          ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
          break;
        case 'wifi':
          ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
          break;
        case 'cellular':
          ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LONG);
          break;
        case 'unknown':
          ToastAndroid.show('You now have unknown connection!', ToastAndroid.LONG);
          break;
        default:
          break;
      }
    }
    render(){
        return(

        <View style={{flex:1 , paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}} >
        {/* <Menu dishes={this.state.dishes} onPress={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <RootStack/> 
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    drawerHeader:{
        backgroundColor:'#512DA8',
        height:140,
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        flexDirection:'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
      },
      drawerImage: {
        margin: 10,
        width: 80,
        height: 60
      }
});
export default connect(mapStateToProps, mapDispatchToProps)(Main);