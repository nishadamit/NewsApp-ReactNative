import React,{ Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import ShowdetailNews from '../Components/ShowDetailNews';

class DetailNewsScreen extends Component{
    

       
    render(){

        const data = this.props.route.params.itemDetail

        return(
            <ShowdetailNews item={data} />
        )
    }
}

const styles = StyleSheet.create({})

export default DetailNewsScreen