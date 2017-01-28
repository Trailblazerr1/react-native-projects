import React, { Component } from 'react';
import { Button } from 'react-native';
import {connect} from 'react-redux';
import {emailChanged} from '../actions';
import Card from './card';
import CardSection from './cardSection';
import Input from './input';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    secureTextEntry
                    label="Pass"
                    placeholder="pass"
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

export default connect(null, { emailChanged })(LoginForm);
