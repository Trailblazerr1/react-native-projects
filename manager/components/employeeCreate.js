import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { Card, CardSection, Input } from ' /components';


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                <Input
                    label="Name"
                    placeholder="Janet"  
                />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                    />
                </CardSection>


                <CardSection>
                    <Button 
                        title="create"
                    />
                </CardSection>

            </Card>
            );
    }
}

export default EmployeeCreate;
