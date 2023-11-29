import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";

export default function Dynamic() {

    const [data, setData] = useState([]);
    const fetchData = () => {
            fetch('https://api.alphacoders.com/3.0?type=desktop&method=highest_rated')
            .then((response) => response.json())
            .then((data) => {
                setData(data.wallpapers.slice(5, 10));
            })
    }
    useEffect(() => {
        fetchData()
      }, [])

    return (
        <Container className='mt-3 mb-3'>
            <Row>
                {console.log(data)}
                {data.map((wallpaper, k) => (
                    <Col key={k} xs={12} md={4} lg={3}>
                        <Card >
                            <Card.Img src={wallpaper.url_image}/>

                            <Card.Body>
                                <Card.Title>{wallpaper.category}</Card.Title>
                                <Card.Text>{wallpaper.sub_category}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

