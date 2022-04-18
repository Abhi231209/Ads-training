

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useRequest from '../../use-Request';

const NewTask = (props) => {
  const tosubmit=useRequest()
  const enterTaskHandler = async (taskText) => {
    const createtask=(data)=>{
      const generatedId = data.name; 
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
    }
    tosubmit.fetchTasks({url:'https://movies-list-4cd19-default-rtdb.firebaseio.com/task.json',
      method: 'POST',
      body: { text: taskText },
      headers: {
        'Content-Type': 'application/json',
      },
    },createtask.bind())
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={tosubmit.isLoading} />
      {tosubmit.error && <p>{tosubmit.error}</p>}
    </Section>
  );
};

export default NewTask;
