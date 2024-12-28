import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TabRoutes from './tab.routes'
import { Login } from '../pages/Login/login'

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator
            screenOptions={
                {
                    title: ""
                }
            }
        >
            <Stack.Screen
                name='login'
                component={Login}
            />
            
        </Stack.Navigator>
    )
}