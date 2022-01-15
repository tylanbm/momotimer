import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OptionButton = () => {
    return (
        <View>
            <TouchableOpacity>
                <Ionicons name='menu-outline' size={32}/>
            </TouchableOpacity>
        </View>
    )
}

export default OptionButton

const styles = StyleSheet.create({})
