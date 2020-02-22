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

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About US '
    }

    render() {
        return (
            <Card title="Our Mission">
            <ScrollView>
              <Text>  We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</Text>
             </ScrollView>
             </Card>
        );
    }

}



          
               
        

       
    

        
export default About;