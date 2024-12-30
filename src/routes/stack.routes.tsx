import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Signup } from '../screens/Signup/Signup'
import Login from '../screens/Login/Login'
import Home from '../screens/Home/Home'
import { PropsStackRoutes } from './interfaces'

const Stack = createNativeStackNavigator<PropsStackRoutes>()

export default function StackRoutes(){
    return(
        <Stack.Navigator
            screenOptions={
                {
                    title: "",
                    headerShown: false
                }
            }
        >
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
            <Stack.Screen name='Home' component={Home}/>                    
            
        </Stack.Navigator>
    )
}