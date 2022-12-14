import React, { useState, useEffect } from "react";

import store from "../redux-toolkit/store/store";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  Linking
} from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";
const App = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { AllUser } = store.getState();
  const [search, setSearch] = useState("");
  const [mname, setmname] = useState("");
  const [mDesignation, setMDesignation] = useState("");
  const [mphone, setMphone] = useState("");
  const [mmail, setMmail] = useState("");

  const [filteredDataSource, setFilteredDataSource] = useState(AllUser.data);
  const [masterDataSource, setMasterDataSource] = useState(AllUser.data);
  console.log("filteredDataSource", filteredDataSource);
  console.log("masterDataSource", masterDataSource);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => getItem(item)} key={item.id}>
        <View style={styles2.container}>
          <View style={{ width: "25%", marginRight: "10%" }}>
            <Image
              source={{
                uri: item.url,
              }}
              style={{ width: 100, height: 100 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ width: "65%" }}>
            <Text style={styles2.text1}>Name: {item.name}</Text>
            <Text style={styles2.text2}>Designation: {item.Designation}</Text>
            <Text style={styles2.text2}>Mobile: {item.Mobile}</Text>
            <Text style={styles2.text2}>Email: {item.Email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = async (item) => {
    setMmail(item?.Email);
    setMphone(item?.Mobile);
    setmname(item?.name);
    setMDesignation(item?.Designation);

    setModalVisible(true);
  };




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search names"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={({ item }) => <ItemView item={item} />}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{mname}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <IconButton
                icon="gmail"
                iconColor="red"
                size={40}
                onPress={()=>Linking.openURL(`mailto:${mmail}`)}
              />

              <IconButton
                icon="phone"
                iconColor="green"
                size={40}
                onPress={()=>{Linking.openURL(`tel:${mphone}`);}}
              />
              <IconButton
                icon="message"
                iconColor="blue"
                size={40}
                onPress={()=>Linking.openURL(`sms:${mphone}`)}
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "blue",
    backgroundColor: "#FFFFFF",
  },
  centeredView: {
    backgroundColor: "rgba(18, 10, 97, 0.35)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 40,
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default App;

const styles2 = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    border: "10px solid red",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderWidth: 1,
    borderColor: "#0320fc",
    backgroundColor: "#1a0f63",
    borderRadius: 5,
    padding: 5,
  },

  text1: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
  text2: {
    color: "white",
    fontSize: 16,
  },
});
