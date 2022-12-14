import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { TextInput } from "react-native-paper";
export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const function1 = () => {
    
    navigation.navigate("Categories", { name: "Categories" });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image style={styles.image} source={require("../assets/logo.png")} />
        </View>

        <View>
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.inputtext}
          />
        </View>
        <View style={{ marginTop: 16 }}>
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.inputtext}
          />
        </View>
        <TouchableOpacity onPress={function1}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 25,
              backgroundColor: "red",
            }}
          >
            <Text style={styles.customBtnText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    backgroundColor: "#1a0f63",
    alignItems: "center",
    justifyContent: "center",
  },
  inputtext: {
    width: 350,
  },
  customBtnText: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
    margin: 5,
  },
  image: {
    marginBottom: 40,
  },
});
