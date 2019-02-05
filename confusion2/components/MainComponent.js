import React , {Component} from'react';
import {View , Platform } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';
import {createStackNavigator , createAppContainer ,createDrawerNavigator } from 'react-navigation';


const MenuNavigator = createStackNavigator({
    Menu: {screen:Menu},
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
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'yellow',
        headerTitleStyle: {
          fontWeight: 'bold',
          marginLeft:'40%'
        },
      },
});

const AboutNavigator = createStackNavigator({
    About: {screen:AboutUs},
},{
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
      },
});

const ContactNavigator = createStackNavigator({
    Contact: {screen:ContactUs},
},{
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
      },
});


const MainNavigator = createDrawerNavigator({
    Home:{
        screen:HomeNavigator,
        defaultNavigationOptions:{
            title:'Home',
            drawerLabel:'Home'
        }
    },
    Menu:{
        screen:MenuNavigator,
        defaultNavigationOptions:{
            title:'Menu',
            drawerLabel:'Menu'
        }      
    },
    ContactUs:{
        screen:ContactNavigator,
        defaultNavigationOptions:{
            title:'Contact Us',
            drawerLabel:'Contact Us'
        }
    },
    AboutUs:{
        screen:AboutNavigator,
        defaultNavigationOptions:{
            title: 'About Us',
            drawerLabel:'About Us'
        }
    }
},{
    drawerBackgroundColor:'grey'
});



const RootStack = createAppContainer(MainNavigator)

class Main extends Component{
  
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


export default Main;