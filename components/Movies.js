import 'react-native-gesture-handler'; // must stay at the top
import React from 'react'
import MovieCard from './MovieCard'
import { ScrollView, StyleSheet, View, TouchableHighlight } from 'react-native';

export default function Movies({ navigation, movies }) {
  return (
    <ScrollView>
      <View style={styles.scrollViewContent}>
        { movies && movies.map((movie) => (
          <TouchableHighlight key={movie.id} onPress={() => navigation.navigate('MovieId', { movie })}>
            <MovieCard movie={movie} />
          </TouchableHighlight>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 100,
  },
});
