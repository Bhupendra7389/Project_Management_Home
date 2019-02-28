export function listTask(history) {
  return {
    type: "LISTTASK",
    history
  };
}
export function editTask(editTask) {
  return {
    type: "EDITTASK",
    editTask
  };
}
export function deleteTask(id) {
  return { type: "DELETETASK", id };
}
export function getTaskById(id) {
  return { type: "GETTASKBYID", id };
}
export function comment(comment) {
  return { type: "COMMENT", comment };
}
