import 'react-native-gesture-handler'; // must stay at the top
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function MovieId({ route, navigation }) {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>

        <View style={styles.heroContainer}>
          <View style={styles.posterContainer}>
            <Image source={{uri:movie.poster}} style={[styles.poster, styles.shadow3]} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title} >{movie.title}</Text>

            { movie.actors_abridged && movie.actors_abridged.map((actor) => (
              <Text key={actor.name} style={styles.actor} >{actor.name}</Text>
            ))}
          </View>
        </View>

        <Text style={styles.plot} >{movie.plot}</Text>

        { movie.showtimes && movie.showtimes.map((showtime) => (
          <View key={showtime.cinema.id}>
            <Text style={styles.cinema} >{showtime.cinema.name}</Text>

            { showtime.schedule && showtime.schedule.map((schedule) => (
              <Text key={schedule.time} style={styles.schedule}>{schedule.time}</Text>
            ))}
          </View>
        ))}

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#0e1824',
    height: '100%',
  },
  container: {
    padding: 20,
  },
  heroContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  posterContainer: {
    height: 200,
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
    height: 200,
    width: 125,
  },
  textContainer: {
    maxWidth: 200,
    margin: 20,
    marginTop: 0,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  actor: {
    color: '#f5f5f5',
    fontSize: 18,
    lineHeight: 30,
  },
  plot: {
    color: '#f5f5f5',
    fontSize: 18,
    paddingVertical: 20,
  },
  cinema: {
    color: '#f5f5f5',
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  schedule: {
    color: '#e1e1e1',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  button:{
    backgroundColor: '#1f2c3c',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 6,
    marginVertical: 20,
  },
  buttonText: {
    color: '#e1e1e1',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
