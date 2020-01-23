import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'

import "./tab.scss";

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className="tabing-section">
                <Container>
                <Nav
                    activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                    >
                    <Nav.Item>
                        <Nav.Link href="/home" className="selected">Page 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Page 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Page 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Page 4</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Container>
            </section>
         );
    }
}
 
export default Tabs;