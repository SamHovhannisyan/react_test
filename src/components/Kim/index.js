import css from './kim.module.css';
import {Col, Row} from "react-bootstrap";
import Button from "../Button";
import Container from "react-bootstrap/Container";
import {shallowEqual, useSelector} from "react-redux";
import {getKimInfoSelector, getPhoneDataSelector} from "../../store/selectors";
import {useEffect} from "react";
import AppController from "../../controllers";

const Kim = () => {

    const getData = useSelector(getKimInfoSelector, shallowEqual);

    useEffect(() => {
        AppController.getKimInfo();
    }, [])

    return (
        <div style={{paddingBottom: '100px'}}>
            <div style={{
                backgroundImage: `url(${getData[0]?.img})`,
                width: '100%',
                height: '877px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                <Container>
                    <Row>
                        <Col xs={4}>
                            <div className={css.mainContainer}>
                                {
                                    getData.map((item) => {
                                        return (
                                            <div key={item.id} className={css.infoContainer}>
                                                <h1>{item.title}</h1>
                                                <h4>{item.text}</h4>
                                                <h5>${item.price}</h5>
                                                <Button title='Button' color='#BF896F' bgColor='white' />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Kim;