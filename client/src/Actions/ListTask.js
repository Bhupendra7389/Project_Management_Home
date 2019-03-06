export function listTask(project_Id) {
  return {
    type: "LISTTASK",
    project_Id
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
export function taskStatus(TaskStatus) {
  return {
    type: "TASKSTATUS",
    TaskStatus
  };
}
