import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}>
                <Text
                    style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'Contact US'
    }

    render() {
        return (         
            <Card title= 'Contact Informaton'> 
                

            <ScrollView> 


                     <Text> 1 Nucamp Way </Text>
                     <Text> Seattle, WA 98001 </Text>
                     <Text> U.S.A. </Text>

                     <Text> Phone: 1-206-555-1234 </Text>
                     <Text> Email: campsites@nucamp.co </Text>
           </ScrollView>
           </Card>
    
        );
    }
}

export default Contact;