import {Axios} from "axios"
import { Constants } from "./enviroments";

const base_url = Constants.SERVER_URL;


export const createEntry = (path, payload, callback) => {
    Axios.post(`${base_url}/${payload}`, payload, {
      headers: { Authorization: `Bearer token` },
    })
      .then((res) => {
        const response = res.data;
        if (callback) return callback(response, null);
      })
      .catch((error) => {
        console.error(error);
        if (callback) return callback(null, error);
      });
  };


export const getEntry = (path, callback) => {
  Axios.post(`${base_url}/${path}`, {
    headers: { Authorization: `Bearer token` },
  })
    .then((res) => {
      const response = res.data;
      if (callback) return callback(response, null);
    })
    .catch((error) => {
      console.error(error);
      if (callback) return callback(null, error);
    });
};