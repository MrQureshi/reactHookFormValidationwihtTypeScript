// Input.js

import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function Input(props: any) {
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={[styles.input,
                // props.error && { borderColor: "red" }, 
                {
                    borderColor: props.value === '' ? 'gray' : props.error ? "red" : "gray"
                },
                props.style]}
                {...props}
            />
            {props.errorText && (
                <Text style={styles.errorText}>{props.errorText}</Text>
            )}
        </View>
    );
}

const styles: any = {
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        borderColor: "gray",
        borderRadius: 5,
        borderWidth: 2,
        height: 40,
        width: "100%"
    },
    errorText: {
        color: "red"
    }
};