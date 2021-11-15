import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onSubmit}) => {
    return <View style = {style.backgroundStyle}>
        <Feather name="search" style= {style.iconStyle}/>
        <TextInput 
        style= {style.inputStyle} 
        placeholder="Search"
        value ={term}
        onChangeText = {onTermChange}
        autoCorrect= {false}
        autoCapitalize= "none"
        onEndEditing={onSubmit}
        />
    </View>
};

const style = StyleSheet.create({
    backgroundStyle: {
        marginTop:15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 25,
        marginLeft: 10
    },
    iconStyle:{
        fontSize: 40,
        textAlign: 'center'
    }
});

export default SearchBar;