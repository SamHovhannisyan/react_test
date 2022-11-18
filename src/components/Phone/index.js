import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Button from "../Button";
import {shallowEqual, useSelector} from "react-redux";
import {getPhoneDataSelector} from "../../store/selectors";
import {useEffect} from "react";
import AppController from "../../controllers";
import css from './phone.module.css';

const Phone = () => {

    const getData = useSelector(getPhoneDataSelector, shallowEqual);

    useEffect(() => {
        AppController.getPhoneDataFake();
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={4}>
                        <div className={css.mainTextContainer}>
                            {
                                getData.map((item) => {
                                    return (
                                        <div key={item.id} className={css.textContainer}>
                                            <h1>{item.title}</h1>
                                            <p>{item.text}</p>
                                            <Button
                                                title={"Button"}
                                                color="#FFF"
                                                bgColor="linear-gradient(90deg, #95F9C3 2.35%, #73C9AC 18.63%, #509995 39.99%, #2E687D 67.45%, #0B3866 100%)"
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col xs={8}>
                        {
                            getData.map((item) => {
                                return (
                                    <div key={item.id} className={css.imgContainer}>
                                        <img className={css.phoneImg} src={item.imgPhone} alt=""/>
                                        <div className={css.imgHeadphones}>
                                            <img src={item.imgHeadphones} alt=""/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Phone;