import React, { Component } from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passChanged } from '../actions'; //third
import Card from './card';
import CardSection from './cardSection';
import Input from './input';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    //after fourth the action can be used as prop - fifth

    onPassChange(text) {
        this.props.passChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        //first
                        value={this.props.email} //ninth
                    />
                </CardSection>

                <CardSection>
                    secureTextEntry
                    label="Pass"
                    placeholder="pass"
                    onChangeText={this.onPassChange.bind(this)}
                    vallue={this.props.password}
                </CardSection>

                <CardSection>
                    <Button
                        title="Login"
                    />
                </CardSection>
            </Card>
            );
    }
}

//this.props.email has the email now
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password                    //auth is the name of reducer
    };                                             //eighth               
};

export default connect(mapStateToProps, { emailChanged, passChanged })(LoginForm); //fourth
