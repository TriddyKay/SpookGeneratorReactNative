import React, {useState} from 'react'
import {Button, ImageBackground, Text, View} from "react-native"
import {styles} from "../Styles"
import {NavBar} from "./NavBar"
import {MovieQueryService} from "../Services/MovieQueryService"
import {Movie} from "../Domain/Movie"

const backgroundImage = { uri: "https://res.cloudinary.com/dqsacxogt/image/upload/v1633737209/spook/branimir-balogovic-yY66QAbGxq4-unsplash_datwco.jpg"}

export const ShitYaKnickersContainer = () => {
  const [movie, setMovie] = useState<Movie | null>(null)

  const collectMovies = async () => {
    const movies = await MovieQueryService.getMovies()
    const randomMovie = Math.floor(Math.random() * (19 + 1));

    if(movies.length > 0) {
      setMovie(movies[randomMovie])
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundImage}>
        <NavBar/>
        <View style={styles.body}>
          <Button color={'grey'} onPress={collectMovies} title={"Random Spook!"}/>
          <Text style={styles.movieText}>{movie?.title ?? ""}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}
