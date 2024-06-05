/* Fake Data */
import data from '../../../public/data.json';

/* Components */
import TaskCard from '@/app/_components/TaskCard/TaskCard';

/* Styles */
import styles from '@/app/taskline/page.module.scss';

export default function TaskLine() {
  const taskList = data.sort((a, b) => a.date - b.date);

  return (
    <div className={styles.main}>
      {taskList.map((item, index) => (
        <TaskCard
          key={index}
          id={taskList[index].id}
          date={taskList[index].date}
          person={taskList[index].person}
          description={taskList[index].description}
          labels={taskList[index].labels}
          status={taskList[index].status}
        />
      ))}
    </div>
  );
}
