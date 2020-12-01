import React ,{ Component } from 'react';
import { View, Text,FlatList,StyleSheet,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body} from 'native-base';

import RenderListItem from '../../Components/RenderListItem';

import axios from 'axios';

class TechnologyNews extends Component{

    state={
        news:[]
    }

    componentDidMount(){
              axios.get('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ad48c28f85534d79961613343be3ed26')
                    .then((response) =>{
                        const list = response.data
                        this.setState({news:list.articles})
                    })
    }

    render(props){
   
        const { news }  = this.state;
        const { navigation } = this.props
        // console.log("navigation",this.props)
 
        return(
            <View>
                    {/* <Text>This is tabone</Text> */}
                    <FlatList
                        keyExtractor={(item) =>item.url}
                        data={news}
                        renderItem={({item,index}) =><RenderListItem item={item} navigation={navigation} />}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default TechnologyNews;
