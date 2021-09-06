import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer ' + 'NvHsmLPdi7HHFL8l-JE8MrrIZw1SBsVSLVTgucPcv4VxBEsoP9O0z3EGNGPgNYJWY27OHeGz6LwMQOxDqGu5i0q0t62P-hTX7zkK8EJ_fuj9gK4gbOoBVGE9hdA1YXYx'
    }
});
