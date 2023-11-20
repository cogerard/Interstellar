import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/lereacteur-apollo/image/upload/v1684153265/apollo/lereacteur/React%20Native/logo-imdb_tj4n8g.png",
          }}
          style={styles.logImdb}
        />
      </View>
      <View style={styles.topContent}>
        <Text style={styles.title}>Interstellar</Text>
        <Text style={styles.infos}>
          2014 PG-13 2h49min Adventure, Drama, Sci-Fi
        </Text>
        <View style={styles.imgDescWaitlist}>
          <Image source={require("./assets/film.jpg")} style={styles.imgFilm} />
          <View style={styles.descWaitlist}>
            <Text style={styles.description}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.{" "}
            </Text>
            <TouchableOpacity
              style={[styles.waitlistBtn]}
              onPress={() => {
                console.log("Pressed touchable opacity");
              }}
              activeOpacity={0.8}
            >
              <Text style={styles.waitlistBtnText}>+ ADD TO WAITLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#191919",
    minHeight: "100%",
  },
  header: {
    backgroundColor: "#393939",
    justifyContent: "center",
    minHeight: 50,
    // borderColor: "purple",
    // borderWidth: 4,
  },
  logImdb: {
    height: 30,
    width: "20%",
    resizeMode: "contain",
    // alignItems: "stretch",
    // borderColor: "blue",
    // borderWidth: 4,
  },
  topContent: {
    backgroundColor: "#212121",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 28,
  },
  infos: {
    color: "lightgray",
    fontSize: 12,
    marginTop: 10,
    marginBottom: 20,
  },
  imgDescWaitlist: {
    flexDirection: "row",
    gap: 15,
  },
  imgFilm: {
    height: 135,
    width: "25%",
    // flex: 1,
    resizeMode: "contain",
    // borderColor: "blue",
    // borderWidth: 4,
  },
  descWaitlist: {
    width: "70%",
    // marginRight: 15,
    // borderColor: "blue",
    // borderWidth: 4,
    gap: 10,
  },
  description: {
    color: "white",
  },
  waitlistBtn: {
    width: "100%",
    padding: 8,
    backgroundColor: "#0277BD",
    borderRadius: 3,
    alignItems: "center",
  },
  waitlistBtnText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
