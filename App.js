import 'react-native-gesture-handler'
import { Router } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'

export default function App(){
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

