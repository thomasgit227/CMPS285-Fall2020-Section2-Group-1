import React, { useState, useEffect, useMemo } from 'react';
import './home_page.css';
import {
    Button,
    ButtonGroup,
    ListGroup,
    ListGroupItem,
  } from 'reactstrap';
import {
    Link,
} from 'react-router-dom';


export default function Leadership() {

    const [order, setOrder] = useState("descending");

    useEffect(() => {
        console.log(order)
    })

    return (
            <div>

                <h4 className = 'leaderboard_heading'>
                    Leaderboard
                </h4>

                <ListGroup className = 'leaderboard'>

                    <ListGroupItem>
                        <Link to={ "/properties/myproperty/" + 1}>
                            property 1
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/myproperty/2/">
                            property 2
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/myproperty/3/">
                            property 3
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/myproperty/4/">
                            property 4
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/myproperty/5/">
                            property 5
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/myproperty/6/">
                            property 6
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/">
                            . . . 
                        </Link>
                    </ListGroupItem>

                </ListGroup>

                <ButtonGroup className = "orderbuttons">
                    <Button onClick = {() => setOrder("ascending")}> ▲ </Button>
                    <Button onClick = {() => setOrder("descending")}> ▼ </Button>
                </ButtonGroup>
            </div>
    );

}