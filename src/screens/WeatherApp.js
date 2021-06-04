import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "../../apiKey";
import { WeatherInfo } from "../components/WeatherInfo";
import { UnitsPicker } from "../components/UnitsPicker";
import { RealoadIcon } from "../components/ReloadIcon";
import { colors } from "../styles/colors";
import { WeatherDetails } from "../components/WeatherDetails";

const { spinner } = colors;

const key = WEATHER_API_KEY;
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`;

export const WeatherApp = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  //na Doc do weather ela fla q se vc passar o units no header ele aceita e ja convert o valor automatico.

  const [unitsSystem, setUnitsSystem] = useState("metric");

  useEffect(() => {
    load();
  }, [unitsSystem]);

  const load = async () => {
    setCurrentWeather(null);
    setErrorMessage(null);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage(`Acess to location is needed to run this app!`);
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      //alert(`latitude: ${latitude}, longitude: ${longitude}`); //Ta funcionando

      const weatherUrl = `${baseUrl}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${key}`;

      const response = await fetch(weatherUrl);
      const result = await response.json();

      if (response.ok) {
        setCurrentWeather(result);
      } else {
        //Throw new Error(``) ?????
        setErrorMessage(result.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  if (currentWeather) {
    //const {main:{temp}} = currentWeather
    //const { main } = currentWeather;

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <UnitsPicker
            unitsSystem={unitsSystem}
            setUnitsSystem={setUnitsSystem}
          />
          <RealoadIcon load={load} />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
        <WeatherDetails currentWeather={currentWeather} />
      </View>
    );
  } else if (errorMessage) {
    return (
      <View style={styles.container}>
        <Text>Ola</Text>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* FCK LOADER ta Ligado, um FCK LOADER*/}
        <ActivityIndicator size="large" color={spinner} />
        <StatusBar style="auto" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
    flex: 1,
  },
});
