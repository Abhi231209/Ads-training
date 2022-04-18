import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import "./MainFileForCustomHook.css";
import useRequest from "./use-Request";

function MainFileForCustomHook() {
  const [tasks, setTasks] = useState([]);

 
  const afteusehook = useRequest();

  useEffect(() => {
    const fordata = (data) => {
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    afteusehook.fetchTasks({url: "https://movies-list-4cd19-default-rtdb.firebaseio.com/task.json"},fordata);
  }, [afteusehook.fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={afteusehook.isLoading}
        error={afteusehook.error}
        onFetch={afteusehook.fetchTasks}
      />
    </React.Fragment>
  );
}

export default MainFileForCustomHook;
