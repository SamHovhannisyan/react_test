import {GET_AIR_PODS_DATA, GET_AIR_SLIDER_DATA, GET_KIM_DATA, GET_PHONE_DATA} from "../action-types";

const initialState = {
    phoneData: [],
    airPods: [],
    kimInfo: [],
    sliderInfo: []
}

const fakeDataReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_PHONE_DATA:
            return {
                ...state,
                phoneData: action.payload,
            }
        case GET_AIR_PODS_DATA:
            return {
                ...state,
                airPods: action.payload,
            }
        case GET_KIM_DATA:
            return {
                ...state,
                kimInfo: action.payload,
            }
        case GET_AIR_SLIDER_DATA:
            return {
                ...state,
                sliderInfo: action.payload,
            }
    }
    return state
}

export default fakeDataReducer;