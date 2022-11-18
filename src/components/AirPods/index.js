import css from './airPods.module.css';
import {Col, Row} from "react-bootstrap";
import Button from "../Button";
import Container from "react-bootstrap/Container";
import {shallowEqual, useSelector} from "react-redux";
import {getAirPodsSelector, getPhoneDataSelector} from "../../store/selectors";
import {useEffect, useState} from "react";
import AppController from "../../controllers";
import AirPodsBlack from '../../assets/airPodsBlack.png'
import {Colors} from "../../utils/fakeData";

const AirPods = () => {

    const getData = useSelector(getAirPodsSelector, shallowEqual);

    const [image, setImage] = useState(AirPodsBlack)

    useEffect(() => {
        AppController.getAirPodsInfo();
    }, [image])

    return (
        <div className={css.mainContainer}>
            <Container>
                <Row>
                    <Col xs={5}>
                        <div className={css.airPodsContainer}>
                            <h3>Choose your Beats</h3>
                            <div className={css.imageContainer}>
                                <img src={image} alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={7}>
                        {
                            getData.map((item) => {
                                return (
                                    <div key={item.id} className={css.airPodsInfoContainer}>
                                        <div className={css.airInfo}>
                                            <h3>{item.title}</h3>
                                            <h4>${item.price}</h4>
                                            <div className={css.listInfo}>
                                                <ul>
                                                    <li>{item.textOne}</li>
                                                    <li>{item.textTwo}</li>
                                                    <li>{item.textThree}</li>
                                                    <li>{item.textFor}</li>
                                                    <li>{item.textFive}</li>
                                                    <li>{item.textSix}</li>
                                                </ul>
                                            </div>
                                            <div className={css.airColors}>
                                                <h3>4 colors</h3>
                                                <div>
                                                    {Colors.map((item) =>{
                                                        return <button style={{
                                                            color: item.color,
                                                            background: item.color,
                                                            borderRadius: '50%',
                                                            width: '25px',
                                                            height: '25px',
                                                            margin: '0 5px',
                                                            border: 'none'
                                                        }} onClick={() => setImage(item.img)}/>
                                                    })}
                                                </div>
                                            </div>
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

export default AirPods;