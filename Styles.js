import { StyleSheet } from "react-native";

// generalized design
export const Styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'white',
        padding: 15
    },
    button_groupFlex:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 7.5,
        justifyContent: 'center'
    },
    button_normal:{
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        margin: 2.5
    },
    text_normal_center:{
        fontSize: 15,
        color: 'gray'
    },
    button_text:{
        fontSize: 15,
        color: 'black'
    },
    buttonBStart: {
        padding: 10,
        borderWidth: 0,
        backgroundColor: '#00BAFF',
        borderRadius: 5,
        margin: 2.5,
    },
    text_white: {
        color: 'white',
        fontSize: 18,
        textAlign:'center'
    },
    text_blue: {
        color: '#00BAFF',
        fontSize: 18,
        textAlign:'center'
    },
    BSview:{ 
        flex: 1, 
        alignItems: 'stretch', 
        justifyContent: 'center', 
        paddingTop: 10,
        paddingBottom: 10, 
        marginHorizontal: 10,
        marginBottom: -50,
    },
    BSlider:{
        width: '120%', 
        height: 40,
    }

});