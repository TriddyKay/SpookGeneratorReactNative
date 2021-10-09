import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1
  },
  navbarText: {
    color: "red",
    marginTop: 35,
    borderStyle: "dashed",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  body: {
    flex: 1,
    marginTop: 40,
    alignItems: "center"
  },
  movieText: {
    color: "red",
    padding: 10,
    marginTop: 20,
    borderStyle: "dashed",
    backgroundColor: "#000000c0"
  },
  movieImage: {
    flex: 1,
    marginTop: 10,
    resizeMode: 'contain',
    height: 110,
    width: 200,
  }
});
