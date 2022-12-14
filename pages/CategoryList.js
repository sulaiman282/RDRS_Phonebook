import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import React from "react";
import userlist from "../example.json";
import store from "../redux-toolkit/store/store";
import { addAllMembersActions } from "../redux-toolkit/features/addAllUsers/addAllMembersSlice";
export default function CategoryList({ navigation }) {





const gotoMemberlist=(item)=>{

navigation.navigate("Members");
store.dispatch(addAllMembersActions.addAllmembers(item.members));
}


  const RenderItem = ({ item }) => (

    <TouchableOpacity   onPress={()=>gotoMemberlist(item)}>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 5,
          backgroundColor: "#1a0f63",
        }}
      
      >
        <Text style={{ color: "white", fontSize: 30, marginLeft: 5 ,marginRight:5,marginTop:25,marginBottom:25}}>
          {item?.CategoryName}
        </Text>
      </View>
      
    </TouchableOpacity>
  );
 

  return (
<SafeAreaView>

<FlatList
    data={userlist}
    renderItem={({ item }) => <RenderItem item={item} />}
    keyExtractor={item => item.CategoryName}
  />
</SafeAreaView>
  
   
  );
}
