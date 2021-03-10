import { StyleSheet } from 'react-native';

//the pallete. including this as a pallete will help add a dark mode later.
const pallete = {
    white: '#fff',
    black: "#0B0B0B",
    blue: "#5637DD" //https://www.colorhexa.com/5637dd
    

}


export const Colors = StyleSheet.create({
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: pallete.blue
        },
        headerTintColor: pallete.white,
        headerTitleStyle: {
            color: pallete.white
        }
    },
    container: {
        backgroundColor: pallete.white
    }
})