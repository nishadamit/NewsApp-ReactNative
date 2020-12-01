import React ,{ Component } from 'react';
import { View, Text,FlatList,StyleSheet,Image,TouchableOpacity }from 'react-native';
import { Container, Header, Content, Card, CardItem, Body,Left,Right} from 'native-base';


class RenderListItem extends Component{

    render(){

        const { item ,navigation} = this.props;

        // console.log("navigation",navigation)

        return(
            <TouchableOpacity onPress={() => navigation.navigate('Detail',{itemDetail:item})}  >
             <View style={styles.cardStyle} >
              <Card >
                <CardItem cardBody>
                    <Image source={{uri: `${item.urlToImage}`}} style={{height: 200, width: 200, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text style={styles.textStyle} >{item.title.replace(item.source.name,'')}</Text>
                    </Body>
                 </CardItem>
                <CardItem>
                    <Left>
                      <Text style={styles.sourceNameStyle} >{item.source.name}</Text>
                   </Left>
                   <Right>
                   <Text style={styles.timeTextStyle} >{item.publishedAt.split('T')[0]}</Text>
                  </Right>
                 </CardItem>
             </Card>
            </View>
            </TouchableOpacity>

        )

    }
}

const styles = StyleSheet.create({
    cardStyle:{
        marginHorizontal:10,
        marginVertical:5,
        borderRadius:5,
    },
    textStyle:{
        fontSize:18,
        fontWeight:"bold"
    },
    sourceNameStyle:{
        color:'red'
    },
    timeTextStyle:{
        color:'blue'
    }
})

export default RenderListItem;