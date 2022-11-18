import {GET_AIR_PODS_DATA, GET_AIR_SLIDER_DATA, GET_KIM_DATA, GET_PHONE_DATA} from "../action-types";

export const getPhoneDataAction = (payload) => ({
    type: GET_PHONE_DATA,
    payload
})

export const getAirPodsAction = (payload) => ({
    type: GET_AIR_PODS_DATA,
    payload
})

export const getKimInfoAction = (payload) => ({
    type: GET_KIM_DATA,
    payload
})

export const getAirSliderAction = (payload) => ({
    type: GET_AIR_SLIDER_DATA,
    payload
})