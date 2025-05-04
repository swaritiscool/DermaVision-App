import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const QuestionsIntro = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 30,
          flex: 1,
          paddingHorizontal: 30,
        }}
      >
        <Image
          source={require("../assets/QuestionsIntroRevamp.png")}
          style={{ width: 304 }}
        />
        <Text style={styles.Header}>
          Let's get started! We'll ask a few questions and detect whether you
          have a disease or not
        </Text>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate("GQuestions")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Start Survey</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.small}>
          We do not collect or store any of your data. We do not wish to take
          away any of your privacy!
        </Text>
      </View>
    </View>
  );
};

export default QuestionsIntro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fbfbfb",
  },
  Header: {
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 25,
    lineHeight: 33,
    marginTop: 30,
    fontWeight: "700",
  },
  buttonWrapper: {
    marginVertical: 25,
    backgroundColor: "#0773da",
    borderRadius: 73,
    paddingHorizontal: 25,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {},
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  small: {
    fontSize: 15,
    fontWeight: "300",
    color: "#0773da",
    textAlign: "center",
  },
});
