import store from '../store/store';
import {getAirPodsAction, getAirSliderAction, getKimInfoAction, getPhoneDataAction} from "../store/actions";
import {AirPodsData, AirsPodsSlider, KimInfo, PhoneData} from "../utils/fakeData";

const AppController = {};

AppController.getPhoneDataFake = async () => {
    store.dispatch(getPhoneDataAction(PhoneData));
}

AppController.getAirPodsInfo = async () => {
    store.dispatch(getAirPodsAction(AirPodsData));
}

AppController.getKimInfo = async () => {
    store.dispatch(getKimInfoAction(KimInfo));
}

AppController.getAirSliderInfo = async () => {
    store.dispatch(getAirSliderAction(AirsPodsSlider));
}

export default AppController;