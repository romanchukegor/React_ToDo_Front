import axios from "axios";
import { url } from "constants";

export const getAllTasksService = () => axios.get(`${url}`);

export const addTaskService = (text) =>
  axios.post(`${url}`, {
    text,
  });

export const updateTaskService = (_id, text) =>
  axios.patch(`${url}/${_id}/text`, {
    text,
  });

export const deleteTaskService = (_id) => axios.delete(`${url}/${_id}`);

export const deleteAllTasksService = () => axios.delete(`${url}`);

export const completeTaskService = (_id, isCheck) =>
  axios.patch(`${url}/${_id}/is-check`, {
    isCheck
  });
