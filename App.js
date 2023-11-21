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
import { FontAwesome } from "@expo/vector-icons";

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
      <View style={styles.contentContainer}>
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
        <View style={styles.ratingArea}>
          <View style={styles.ratingBox}>
            <FontAwesome name="star" size={22} color="#E6B91E" />
            <View style={styles.scoreSubInfos}>
              <Text style={styles.scoreBigText}>8.6/10</Text>
              <Text style={styles.scoreSmalText}>1.1M</Text>
            </View>
          </View>
          <View style={styles.ratingBox}>
            <FontAwesome name="star-o" size={22} color="white" />
            <Text style={styles.scoreMediumText}>RATE THIS</Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={[styles.scoreBigText, styles.metaScore]}>74</Text>
            <View style={styles.scoreSubInfos}>
              <Text style={styles.scoreMediumText}>Metascore</Text>
              <Text style={styles.scoreSmalText}>46 critics reviews</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.castHeader}>
          <Text style={styles.castTitle}>Top Billed Cast</Text>
          <TouchableOpacity
            onPress={() => {
              console.log("Pressed touchable opacity");
            }}
            activeOpacity={0.8}
          >
            <Text style={[styles.seeAllBtn]}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={styles.castScrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.castCard}>
            <Image
              source={require("./assets/matthew.jpg")}
              style={styles.castPicture}
            />
            <View style={styles.castNameAndCharacter}>
              <Text style={styles.castName} numberOfLines={1}>
                Matthew McConnaughey
              </Text>
              <Text style={styles.castCharacter}>Cooper</Text>
            </View>
          </View>
          <View style={styles.castCard}>
            <Image
              source={require("./assets/anne.jpg")}
              style={styles.castPicture}
            />
            <View style={styles.castNameAndCharacter}>
              <Text style={styles.castName} numberOfLines={1}>
                Anne Hattaway
              </Text>
              <Text style={styles.castCharacter}>Brand</Text>
            </View>
          </View>
          <View style={styles.castCard}>
            <Image
              source={require("./assets/jessica.jpg")}
              style={styles.castPicture}
            />
            <View style={styles.castNameAndCharacter}>
              <Text style={styles.castName} numberOfLines={1}>
                Jessica Chastaing
              </Text>
              <Text style={styles.castCharacter}>Cooper</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.staffItem}>
          <Text style={styles.staffRole}>Director</Text>
          <Text style={styles.staffName}>Christopher Nolan</Text>
        </View>
        <View style={styles.staffItem}>
          <Text style={styles.staffRole}>Writers</Text>
          <Text style={styles.staffName}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#191919",
    // borderColor: "purple",
    // borderWidth: 4,
  },
  header: {
    backgroundColor: "#393939",
    // justifyContent: "center",
    minHeight: 50,
    alignItems: "flex-start",
    // borderColor: "purple",
    // borderWidth: 4,
  },
  logImdb: {
    height: 30,
    width: 60,
    resizeMode: "contain",
    // // alignItems: "stretch",
    // borderColor: "blue",
    // borderWidth: 4,
    margin: 10,
  },
  contentContainer: {
    backgroundColor: "#212121",
    padding: 10,
    marginBottom: 15,
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
  ratingArea: {
    flexDirection: "row",
    // borderColor: "blue",
    // borderWidth: 4,
  },
  ratingBox: {
    flex: 1,
    // borderColor: "red",
    // borderWidth: 4,
    justifyContent: "flex-start",
    alignItems: "center",
    height: 75,
    paddingTop: 15,
    gap: 5,
  },
  scoreSubInfos: {
    justifyContent: "center",
    alignItems: "center",
  },
  scoreBigText: {
    fontSize: 15,
    color: "white",
  },
  scoreMediumText: {
    fontSize: 13,
    color: "white",
  },
  scoreSmalText: {
    fontSize: 10,
    color: "lightgray",
  },
  metaScore: {
    backgroundColor: "#61C750",
  },
  castHeader: {
    marginTop: 5,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  castTitle: {
    fontSize: 20,
    color: "white",
  },
  seeAllBtn: {
    color: "#0277BD",
  },
  castScrollView: {
    gap: 15,
  },
  castCard: {
    backgroundColor: "#2A2A2A",
    width: 135,
    marginRight: 15,
    // justifyContent: "flex-start",
    // borderWidth: 4,
    // borderColor: "blue",
  },
  castPicture: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    // borderWidth: 4,
    // borderColor: "red",
    // justifyContent: "flex-start",
  },
  castNameAndCharacter: {
    padding: 10,
    gap: 5,
  },
  castName: {
    color: "white",
    fontSize: 12,
  },
  castCharacter: {
    color: "lightgray",
    fontSize: 10,
  },
  staffItem: {
    paddingTop: 20,
    gap: 5,
  },
  staffRole: {
    color: "white",
    fontSize: 14,
    // fontWeight: "bold",
  },
  staffName: {
    color: "lightgray",
    fontSize: 11,
  },
});
