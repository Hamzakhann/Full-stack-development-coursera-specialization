import React , {Component} from'react';
import {View , Platform , Image , StyleSheet , ScrollView , Text } from 'react-native';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import ContactUs from './ContactComponent';
import AboutUs from './AboutComponent';
import {createStackNavigator , createAppContainer ,createDrawerNavigator , createDrawerNavigator, DrawerItems , SafeAreaView } from 'react-navigation';
import {Icon} from 'react-native-elements';

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
    drawerBackgroundColor:'grey',
    contentComponent:CustomDrawerContentComponent
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
export default Main;