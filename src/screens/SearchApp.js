import React, { useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
} from "react-native";
import { Foundation } from "@expo/vector-icons";
import * as Location from "expo-location";
import { PreviousSearches } from "../components/PreviousSearches";
import { colors } from "../styles/colors";
import { useNavigation } from "@react-navigation/core";

export const SearchApp = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [enteredInput, setEnteredInput] = useState("");

  const { navigate } = useNavigation();

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!enteredInput);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value) => {
    setIsFilled(!!value);
    setEnteredInput(value);
  };

  //Navegar para a API
  //On Press do que vai pegar o campo preenchido.
  const handleSubmit = () => {
    alert(`${enteredInput}`);
    // if (!!enteredInput) {
    //   //Pagina que vai trazer os dados da api,
    //   navigate("Confirmation");
    // } else {
    //   alert(`Preencha o nome primeiro`);
    // }
  };

  const handleLocation = async () => {
    try {
      // let { status } = await Location.requestForegroundPermissionsAsync();

      // if (status !== "granted") {
      //   alert(`Access to location is needed to run this app!`);
      //   return;
      // }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;
      alert(`Long:${longitude}, Lat:${latitude}`);
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.wrapper}>
            <View style={styles.form}>
              <Text style={styles.title}>Type your location here:</Text>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="here"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={handleSubmit}
              >
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.5}
                onPress={handleLocation}
              >
                <Foundation name="target-two" size={25} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.subTitle}>Previous Searches</Text>
              <PreviousSearches />
              <PreviousSearches />
              <PreviousSearches />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
  wrapper: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 25,
  },
  form: {},
  title: {
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.border_color,
    borderRadius: 10,
    padding: 8,
    marginBottom: 15,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.pinkButton,
    borderRadius: 10,
    paddingVertical: 15,
    width: "40%",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 38,
    marginBottom: 10,
  },
});
