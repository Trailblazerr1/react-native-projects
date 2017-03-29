import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Left, Right, Thumbnail, H1, H3, Icon, Button } from 'native-base';
import { Image } from 'react-native';


class App extends Component {

    render() {
    return (
        <Container>
                <Content>
                    <Card >
                        <CardItem style={{ justifyContent: 'space-around' }}>
                                <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png' }} />
                                <Body style={{ paddingLeft: 35 }}>
                                    <H3 style={{ padding: 7 }}>
                                        Sherlock Holmes
                                    </H3>
                                    <Text style={{ padding: 7 }}>
                                        221-B, Baker Street
                                    </Text>
                                </Body>
                        </CardItem>
                    </Card>

                    <Card style={{ backgroundColor: '#82B1FF' }}>
                    <Card style={{ opacity: 0.3 }}>
                        <Image source={{ uri:  }} style={styles.imgBack}>
                        <CardItem  style={{ justifyContent: 'space-between', paddingTop: 1, paddingBottom:1 }}>
                                <Text>
                                    Happy tummy NGO!                                     
                                </Text>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>Pending</Text>
                              </Button>
                        </CardItem>
                        <CardItem content style={{ justifyContent: 'space-between', paddingTop: 1 }}>
                                <Text>
                                    27th March 17                                     
                                </Text>
                                <Text>
                                    5 pm
                                </Text>
                        </CardItem>
                    </Card>

                    <Card >
                        <CardItem  style={{ justifyContent: 'space-between', paddingTop: 1, paddingBottom:1 }}>
                                <Text>
                                    Happy tummy NGO!                                     
                                </Text>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>Pending</Text>
                              </Button>
                        </CardItem>
                        <CardItem content style={{ justifyContent: 'space-between', paddingTop: 1 }}>
                                <Text>
                                    27th March 17                                     
                                </Text>
                                <Text>
                                    5 pm
                                </Text>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem  style={{ justifyContent: 'space-between', paddingTop: 1, paddingBottom:1 }}>
                                <Text>
                                    Happy tummy NGO!                                     
                                </Text>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>Pending</Text>
                              </Button>
                        </CardItem>
                        <CardItem content style={{ justifyContent: 'space-between', paddingTop: 1 }}>
                                <Text>
                                    27th March 17                                     
                                </Text>
                                <Text>
                                    5 pm
                                </Text>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem  style={{ justifyContent: 'space-between', paddingTop: 1, paddingBottom:1 }}>
                                <Text>
                                    Happy tummy NGO!                                     
                                </Text>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>Pending</Text>
                              </Button>
                        </CardItem>
                        <CardItem content style={{ justifyContent: 'space-between', paddingTop: 1 }}>
                                <Text>
                                    27th March 17                                     
                                </Text>
                                <Text>
                                    5 pm
                                </Text>
                        </CardItem>
                    </Card>

                    <Card >
                        <CardItem  style={{ justifyContent: 'space-between', paddingTop: 1, paddingBottom:1 }}>
                                <Text>
                                    Happy tummy NGO!                                     
                                </Text>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>Pending</Text>
                              </Button>
                        </CardItem>
                        <CardItem content style={{ justifyContent: 'space-between', paddingTop: 1 }}>
                                <Text>
                                    27th March 17                                     
                                </Text>
                                <Text>
                                    5 pm
                                </Text>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem  style={{ justifyContent: 'space-between', paddingTop: 1, paddingBottom:1 }}>
                                <Text>
                                    Happy tummy NGO!                                     
                                </Text>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>Pending</Text>
                              </Button>
                        </CardItem>
                        <CardItem content style={{ justifyContent: 'space-between', paddingTop: 1 }}>
                                <Text>
                                    27th March 17                                     
                                </Text>
                                <Text>
                                    5 pm
                                </Text>
                        </CardItem>
                    </Card>
                    </Card>
                </Content>
        </Container>
    );
  }
}

export default App;
