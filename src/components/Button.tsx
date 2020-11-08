// Button.js

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button({ label, ...props }: { label: any }) {
    return (
        <TouchableOpacity activeOpacity={0.8} {...props} style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    );
}


const styles: any = {
    button: {
        with: '100%',
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        height: 40

    },
    buttonLabel: {
        color: "white",
    }
};
