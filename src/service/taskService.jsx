import axios from "axios";
import { url } from "constants";

export const getAllTasksService = () => axios.get(`${url}/tasks`);

export const addTaskService = (text) =>
  axios.post(`${url}/tasks`, {
    text,
  });

export const updateTaskService = (_id, text) =>
  axios.patch(`${url}/tasks/${_id}/text`, {
    text,
  });

export const deleteTaskService = (_id) => axios.delete(`${url}/tasks/${_id}`);

export const deleteAllTasksService = () => axios.delete(`${url}/tasks`);

export const completeTaskService = (_id, isCheck) =>
  axios.patch(`${url}/tasks/${_id}/is-check`, {
    isCheck
  });
