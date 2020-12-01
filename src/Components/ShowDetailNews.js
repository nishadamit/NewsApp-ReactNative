import React ,{ Component } from 'react';
import { View, Text,FlatList,StyleSheet,Image,TouchableOpacity,SafeAreaView,ScrollView,Button ,Share}from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Left,Right} from 'native-base';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";


class ShowdetailNews extends Component{


    share = (url) =>{
        Share.share({
            message: url,
          })
          .then(result => console.log(result))
          .catch(errorMsg => console.log(errorMsg));
    }

    render(){

        const { item } = this.props

        return(
            <SafeAreaView style={styles.cardStyle} >
                <ScrollView>
                <Card style={styles.cardStyle} >
                <CardItem>
                    <Body>
                    <Text style={styles.textStyle} >{item.title.replace(item.source.name,'')}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: `${item.urlToImage}`}} style={{height: 200, width: 200, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={styles.textStyleDescription} >{item.description}</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={styles.textStyleDescription} >{item.content}</Text>
                    </Body>
                </CardItem>
                 {item.author ? <CardItem>
                    <Body>
                    <Text style={styles.textStyleDescription} >Author Name</Text>
                    <Text style={styles.textStyleDescription} >{item.author}</Text>
                    </Body>
                   </CardItem>:<Text>' '</Text>}
                <CardItem>
                    <Left>
                        <Text style={styles.sourceNameStyle} >{item.source.name}</Text>
                    </Left>
                    <Right>
                    <Text style={styles.timeTextStyle} >{item.publishedAt.split('T')[0]}</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Button
                      title="Share"
                      onPress={() =>this.share(item.url)}
                    />
                </CardItem>

            </Card>
            </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    cardStyle:{
        marginHorizontal:5,
        marginTop:10
    },
    textStyle:{
        fontSize:25,
        fontWeight:"bold"
    },
    sourceNameStyle:{
        color:'red'
    },
    timeTextStyle:{
        color:'blue'
    },
    textStyleDescription:{
        fontSize:20,
    }
})


export default ShowdetailNews;
