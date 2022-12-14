import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "./pages/CategoryList";
import MemberList from "./pages/MemberList"
import Login from "./pages/Login";
export default function App() {
  const Stack = createNativeStackNavigator();

  const LoginScreen = ({ navigation }) => {
    return <Login navigation={navigation} />;
  };
  const CategoryListScreen = ({ navigation }) => {
    return <CategoryList navigation={navigation} />;
  };
  const MemberListScreen = ({ navigation }) => {
    return <MemberList navigation={navigation} />;
  };

  const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{
            title: "Log In",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoryListScreen}
          options={{
            title: "Category List",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name="Members"
          component={MemberListScreen}
          options={{
            title: "Members List",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
