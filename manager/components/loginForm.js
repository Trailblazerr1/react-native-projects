import React, { Component } from 'react';
import { Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passChanged, loginUser } from '../actions'; //third
import Card from './card';
import CardSection from './cardSection';
import Input, Spinner from './input';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    //after fourth the action can be used as prop - fifth

    onPassChange(text) {
        this.props.passChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
                    <Button
                        onPress={this.onButtonPress.bind(this)}
                        title="Login"
                    />
            );
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

                <Text style={styles.errortStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton}
                </CardSection>
            </Card>
            );
    }
}

const styles = {
    errortStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};


//this.props.email has the email now
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading                    //auth is the name of reducer
    };                                             //eighth               
};

export default connect(mapStateToProps, { emailChanged, passChanged, loginUser, })(LoginForm); 
//fourth

