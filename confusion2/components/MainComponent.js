import React , {Component} from'react';
import {View , Platform } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
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
    }
},{
    drawerBackgroundColor:'#D1C4E9'
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