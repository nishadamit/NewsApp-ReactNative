import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Title, Left, Body, Right } from 'native-base';
import { View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';
import GeneralNews from './Tabs/GeneralNews';
import HealthNews from './Tabs/HealthNews';
import SportsNews from './Tabs/SportsNews';
import TechnologyNews from './Tabs/TechnologyNews';

class TabScreens extends Component {

  render() {

    const { navigation } = this.props

    return (
      <Container>
        <Header hasTabs >
        <Left/>
          <Body>
            <Title>Daily News</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab 
            heading="General"
            activeTabStyle={{backgroundColor:'#7986CB'}}
          >
            <GeneralNews
                navigation={navigation}
            />
          </Tab>
          <Tab 
            heading="Health"
            activeTabStyle={{backgroundColor:'#7986CB'}}
            >
            <HealthNews
               navigation={navigation}
            />
          </Tab>
          <Tab heading="Sports"
            activeTabStyle={{backgroundColor:'#7986CB'}}
          >
            <SportsNews
               navigation={navigation}
            />
          </Tab>
          <Tab heading="Technology"
            activeTabStyle={{backgroundColor:'#7986CB'}}
          >
            <TechnologyNews
               navigation={navigation}
            />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default TabScreens;