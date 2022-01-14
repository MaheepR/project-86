import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class PostCard extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
      return (
         <TouchableOpacity
          style={styles.container}
          onPress={() =>
            this.props.navigation.navigate("PostScreen", {
              post: this.props.post
            })
          }
        >
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
            <View style={styles.cardContainer}>
              <View style={styles.authorContainer}>
                <View style={styles.authorImageContainer}>
                  <Image
                    source={require("../assets/image_1.jpg")}
                    style={styles.profileImage}
                  ></Image>
                </View>
                <View style={styles.authorNameContainer}>
                    <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                </View>
              </View>
              <Image source={require("../assets/image_1.jpg")} style={styles.postImage}></Image>
              <View style={styles.captionContainer}>
                <Text style={styles.captionText}>
                  {this.props.post.caption}
                </Text>
              </View>
              <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                  <Text style={styles.likeText}>12K</Text>
                </View>
              </View>
            </View>
        </View>
        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  cardContainer: {
    margiTop:-20,
    marginBottom:20,
    marginLeft:20,
    marginRight:10,
    backgroundColor:"#231F20",
    borderRadius:200,
    height:undefined,
    padding:10,
  },
  authorContainer:{
    flexDirection:"row"
  },
  authorImageContainer:{
  resizeMode:"center"
  },
 profileImage:{
  resizeMode:"contain",
  width:Dimensions.get('window').width-60,
  height:undefined,
  borderRadius:10
 },
  authorNameContainer:{
   alignItems:"center",
   justifyContent:"center",
  },
  authorNameText:{
    fontSize:18,
    color:"white",
    marginLeft:-50,
    alignItems:"center",
  },
  captionContainer:{
    marginTop:2,
     marginRight:160,
    alignItems:"center",
    color:"white"
  },
  captionText:{
    marginRight:10,
    fontSize:25,
    color:"white"
  },
  actionContainer:{
    marginTop:100,
    justifyContent:"center",
    alignItems:"center"
  },
  likeButton:{
    backgroundColor:"#eb3948",
    borderRadius:30,
    width:160,
    height:40,
    flexDirection:"row",
    marginTop:-120,
  },
  likeText:{
    color:"white",
    fontSize:25,
    marginLeft:25,
    marginTop:-2,
  }
});
