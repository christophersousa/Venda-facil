import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import {Home} from '../pages/home'
import {Favorites} from '../pages/favorites'
import {StackRoutes} from './stackRoutes'



const Tab = createBottomTabNavigator()
export function Router() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,

                tabBarStyle:{
                    backgroundColor: "#fff",
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({color, size, focused}) =>{
                        if(focused){
                            return <Ionicons name='home' color='#000' size={size}/>
                        }
                        return <Ionicons name='home-outline' color={color} size={size} />
                    }
                }}
                />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({color, size, focused}) =>{
                        if(focused){
                            return <Ionicons name='heart' color='#FF4141' size={size}/>
                        }
                        return <Ionicons name='heart-outline' color={color} size={size} />
                    }
                }}
                />
        </Tab.Navigator>
    )
}