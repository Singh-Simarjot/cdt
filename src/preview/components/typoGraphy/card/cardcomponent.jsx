import React, { Component } from 'react';
import {Card, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom'
class CardComponent extends Component {
    state = { 
      
     }
    render() { 
        // const {data} = this.props;
        // console.log(data);
        return ( 
            <React.Fragment>
                <h3 className="mt-5 mb-3">Resources</h3>
                <Row>
                    <Col lg={8} className="d-flex card-box-feature">
                        {this.props.data.map(tag => 
                            <Link to={tag.hreflink} target="_blank">
                                <Card key={tag}> 
                                    <Card.Body >
                                            <Card.Text>
                                            {tag.title}
                                            </Card.Text>   
                                        <i className={tag.iconpackage}></i>
                                        <i className={tag.iconlink}></i>   
                                    </Card.Body>
                                    
                                </Card>
                            </Link>    
                        )}  
                    </Col>    
                </Row>     
            </React.Fragment>
         );
    }
}
 
export default CardComponent;