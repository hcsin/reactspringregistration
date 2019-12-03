import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import Registration from './Registration';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="link"><Link to="/users">Welcome Haxagon!</Link></Button>
                    <div>
                    <form action="/add" method="GET">
                        <div>
                            <input type="text" name="name" placeholder="username"/>
                        </div>
                            <div>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                        <input type="submit" value="Submit"/>
                    </form>
                    </div>
                    <div>
                        <Button color="success" tag={Link} to="/Registration">Registration</Button>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;