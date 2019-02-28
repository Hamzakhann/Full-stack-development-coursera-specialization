import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet,  Modal, Button } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite } from '../redux/ActionCreators';
import { postComment } from '../redux/ActionCreators';


const mapStateToProps = state => {
        return {
            dishes: state.dishes,
            comments: state.comments,
            favorites: state.favorites
        }
}

const mapDispatchToProps = dispatch => ({
        postFavorite: (dishId) => dispatch(postFavorite(dishId)),
        postComment: (dish_number, rating, author, comment_string) => dispatch(postComment(dish_number, rating, author, comment_string))
});

function RenderDish(props) {
        const dish = props.dish

        if (dish != null) {
                return (
                    <Card
                        featuredTitle={dish.name}
                        image={{ uri: baseUrl + dish.image }}
                        >
                        <Text style={{margin: 10}}>
                            {dish.description}
                        </Text>
                        <Icon
                            raised
                            style={{flex:1}}
                            reverse
                            name={ props.favorite ? 'heart' : 'heart-o' }
                            type='font-awesome'
                            color='#f50'
                            onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                            />
                        <Icon
                            raised
                            reverse
                            style={{flex:2}}
                            name={'pencil'}
                            type='font-awesome'
                            color='#512DA8'
                            onPress={() => props.toggleMyModal()}
                            />

                    </Card>
                );
        }
        else {
                return(<View></View>)
        }
}

function RenderComments(props) {
        const comments = props.comments;

        const renderCommentItem= ({ item, index }) => {
                return(
                    <View key={index} style={{margin: 10}}>
                        <Text style={{fontSize: 14}}>{item.comment}</Text>
                        <Text style={{fontSize: 12}}>{item.rating}</Text>
                        <Text style={{fontSize: 12}}>{'--' + item.author + ', ' + item.date}</Text>
                    </View>
                )
        }

        return(
                <Card title="Comments">
                    <FlatList
                        data={comments}
                        renderItem={renderCommentItem}
                        keyExtractor={item => item.id.toString()}
                        />
                </Card>
        )
}
class Dishdetail extends Component {
        constructor(props) {
                super(props);
                this.state = {
                            rating_number: '',
                            comment: '',
                            author: '',
                            showModal: false,
                            dish_number: this.props.navigation.getParam('dishId', '')
                        }
                this.ratingCompleted = this.ratingCompleted.bind(this)
                this.handleComment = this.handleComment.bind(this)
                }
        markFavorite(dishId) {
                this.props.postFavorite(dishId);
        }
        resetForm() {
                this.setState({
                        rating_number: '',
                        comment: '',
                        author: '',
                });
        }
        handleComment() {
                this.props.postComment(this.state.dish_number, this.state.rating_number, this.state.author, this.state.comment);
                this.toggleModal();
        }

        ratingCompleted(rating) {
                console.log(rating)
                this.setState({ rating_number: rating });
        }
        toggleModal() {
                this.setState({ showModal: !this.state.showModal })
        }
        static navigationOptions = {
                title: 'Dish Details'
        };
        
        render() {
            const dishId = this.props.navigation.getParam('dishId', '' )
            return(
                <ScrollView> 
                    <RenderDish dish={this.props.dishes.dishes[+dishId]}
                        favorite={this.props.favorites.some(el => el === dishId)}
                        onPress={() => this.markFavorite(dishId)}
                        toggleMyModal={() => this.toggleModal()}
                        />
                    <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId)} />
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.state.showModal}
                        onRequestClose={() => this.toggleModal()}
                        >
                        <View style={styles.modal}>
                            <Rating
                                showRating
                                ratingCount={5}
                                fractions={0}
                                onFinishRating={this.ratingCompleted}
                            />
                            <Input
                                value={this.state.author}
                                onChangeText={(author) => this.setState({author})}
                                placeholder=' Author'
                                leftIcon={{ type:'font-awesome', name:'user' }}
                                
                            />
                            <Input
                                value={this.state.comment}
                                onChangeText={(comment) => this.setState({comment})}
                                placeholder=' Comment'
                                leftIcon={{ type:'font-awesome', name:'comment'  }}
                           />
                            <Button
                               onPress={() => {this.handleComment(); this.toggleModal(); this.resetForm;}} 
                                color="purple"
                                title="Submit"
                            />
                            <Button
                                onPress={() => {this.toggleModal(); this.resetForm;}}
                                    color="#512DA8"
                                    title="Cancel"
                                />
                        </View>

                    </Modal>
                </ScrollView> 
            );

}}
const styles = StyleSheet.create({
    formRow: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            flexDirection: 'row',
            margin: 20
    },
    formLabel: {
            fontSize: 18,
            flex: 2
    },
    formItem: {
            flex: 1
    },
    modal: {
            justifyContent: 'center',
            margin: 20
    },
    modalTitle: {
                fontSize: 24,
                fontWeight: 'bold',
                backgroundColor: '#512DA8',
                textAlign: 'center',
                color: 'white',
                marginBottom: 20
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);