import {Col, Container, Row} from "react-bootstrap";
import {shallowEqual, useSelector} from "react-redux";
import {getAirSliderSelector, getKimInfoSelector} from "../../store/selectors";
import {useEffect} from "react";
import AppController from "../../controllers";
import SliderContainer from "../Slider";
import css from './airSlider.module.css';

const AirPodsSlider = () => {

    const getData = useSelector(getAirSliderSelector, shallowEqual);

    useEffect(() => {
        AppController.getAirSliderInfo();
    }, [])

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <div className={css.mainContainer}>
                        <SliderContainer data={getData}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AirPodsSlider;