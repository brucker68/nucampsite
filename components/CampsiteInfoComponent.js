import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList,Modal, Button, StyleSheet } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';
import { FAVORITES } from '../redux/favorites';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comment: state.comments
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    postFavorite: campsiteId => (postFavorite(campsiteId))
};


function RenderCampsite(props) {

        const {campsite} = props;

    if (campsite) {
        return (
           //<View>
            <Card
            featuredTitle={campsite.name}
            image={{uri: baseUrl + campsite.image}}>
            <Text style={{margin: 10}}>
                {campsite.description}
            </Text>
            <View>
            <Icon
                align='center'
                name={props.favorite ? 'heart' : 'heart-o'}
                type='font-awesome'
                color='#f50'
                raised
                reverse
                onPress={() => props.favorite ? 
                    console.log('Already set as a favorite') : props.markFavorite()}
            />
            <Icon
                align='center'
                name={props.favorite ? 'pencil' : 'pencil-o'}
                type='font-awsome'
                color='#5637DD'
                raised
                reverse
                onPress={() => props.ShowModal()}

            />
            </View>
            </Card>
           // </View>
        );
    }
    return <View />;
}

function RenderComments({comments}) {

    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}


class CampsiteInfo extends Component {
    
    //constructor(props) {
        //super(props);
        //this.state = {
            //campsites: CAMPSITES,
            //comments: COMMENTS,
            //favorite: false,
            //ShowModal: false
        //};
    //}


    markFavorite(campsiteId) {
        this.props.postFavorite(campsiteId);
    }

    static navigationOptions = {
        title: 'Campsite Information'
    };

    

        render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        const comments = this.state.comments.filter(comment => comment.campsiteId === campsiteId);
        return (
            <ScrollView>
                <RenderCampsite campsite={campsite}
                    favorite={this.props.favorites.includes(campsiteId)}
                    markFavorite={() => this.markFavorite(campsiteId)}
                />
               <RenderComments comments={comments} />
            </ScrollView>
        );
        
        
        
        };
    }


export default connect(mapStateToProps, mapDispatchToProps)(CampsiteInfo);