import React, {useState} from 'react';
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import Container from "react-bootstrap/Container";
import styles from './LoginBox.module.css';
import Button from "react-bootstrap/Button";
import {Redirect} from 'react-router-dom'

interface ILoginBox {
    onLogin: Function
}

const LoginBox :React.FC<ILoginBox> =({onLogin})=>{

    const [isValid, setIsValid] = useState(false);

    const handleSubmit = (event :any)=>{
        event.preventDefault();
        onLogin(true);
        setIsValid(true);
    };
    return(
            isValid?
                <Redirect to={'/userDashboard'}/> :
                <Container className={styles.loginBox}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>


    )

};

export  default  LoginBox;