import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

export default function MovieCard({ movie }) {
  return (
    <View style={styles.card}>
      <View style={styles.posterContainer}>
        <Image source={{uri:movie.poster}} style={[styles.poster, styles.shadow3]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '50%',
    height: 200,
    padding: 20,
    marginBottom: 20,
  },
  posterContainer: {
    height: 200,
    width: 125,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.66,
    shadowRadius: 6.68,
    elevation: 10,
  },
  poster: {
    flex: 1,
  },
});