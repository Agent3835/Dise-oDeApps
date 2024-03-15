import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ PlaceholderImageSource, selectedImage }) {
    const imageSource = selectedImage ? {uri:selectedImage}: PlaceholderImageSource
    return (
        <Image style={styles.image} source={imageSource} />
    );
}

const styles = StyleSheet.create({
    image: {
        padding: 5,
        width: 320,
        height: 440,
    },
});
