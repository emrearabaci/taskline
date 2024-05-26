interface TaskCardProps {
  id: number;
  date: number;
  person: string;
  description: string;
  labels: any;
  status: string;
}

/* Next API */
import Link from 'next/link';
import Image from 'next/image';

/* Components */
import Label from '@/app/_components/Label/Label';

/* Styles */
import styles from '@/app/_components/TaskCard/TaskCard.module.scss';

export default function TaskCard({
  id,
  date,
  person,
  description,
  labels,
  status
}: TaskCardProps) {
  const imageConfigs = {
    width: 34,
    height: 34,
    quality: 80,
    priority: true
  };

  const getTaskStatus = (status: String) => {
    if (status === 'completed') {
      return [styles.completed, styles.iconLeft];
    } else if (status === 'in queue') {
      return [styles.inQueue, styles.iconRight];
    } else if (status === 'in progress') {
      return [styles.inProgress, styles.iconRight];
    } else if (status === 'not processed') {
      return [styles.notProcessed, styles.iconRight];
    } else {
      return [''];
    }
  };

  const getLabelStatus = (status: String) => {
    if (status === 'bug') {
      return [styles.bug];
    } else if (status === 'build') {
      return [styles.build];
    } else if (status === 'development') {
      return [styles.development];
    } else {
      return [''];
    }
  };

  return (
    <div className={styles.main}>
      <div className={`${styles.card} ${getTaskStatus(status)[0]}`}>
        <Link href={'/'}>
          <Image
            src={'/icon-search.svg'}
            alt={'image'}
            width={imageConfigs.width}
            height={imageConfigs.height}
            quality={imageConfigs.quality}
            priority={imageConfigs.priority}
          />
        </Link>
        <p className={styles.date}>
          {new Date(date * 1000).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
          })}
        </p>
        <p className={styles.time}>
          {new Date(date * 1000).toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
        <p className={styles.status}>{status}</p>
        {labels.map((item: any, index: any) => (
          <div key={index} className={styles.label}>
            <Label customClass={getLabelStatus(item)} content={item} />
          </div>
        ))}
        <p className={styles.person}>{person}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
