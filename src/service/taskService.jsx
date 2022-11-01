import url from "../constants";
import axios from "axios";

export const getAllTasksReq = () => axios.get(`${url}/tasks`);

export const addTaskReq = (textInput) => axios.post(`${url}/tasks`, {
  text: textInput,
});

export const updateTaskReq = (_id, text) => axios.patch(`${url}/tasks/${_id}/text`, {
  text: text,
});

export const deleteTaskReq = (_id) => axios.delete(`${url}/tasks/${_id}`);

export const deleteAllTasksReq = () => axios.delete(`${url}/tasks`);

export const completeTaskReq = (_id, isCheck) => axios.patch(`${url}/tasks/${_id}/is-check`, {
  isCheck: !isCheck,
});
