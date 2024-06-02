/* Next API */
import Image from 'next/image';
import Link from 'next/link';

/* Components */
import Button from '@/app/_components/Button/Button';

/* Styles */
import styles from '@/app/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.typingAnimation}>TASKLINE</h1>
        <p>
          This app lists the tasks to be performed by the people in the team.
        </p>

        <p>
          In the list, completed tasks are on the right side and incomplete
          tasks are on the left side.
        </p>

        <p>Each list has a label symbolizing the task to be done.</p>

        <div className={styles.border} />

        <Link href="/taskline" passHref legacyBehavior>
          <Button type={'button'} onClick={null} content={'explore app'} />
        </Link>
      </div>

      <div className={styles.right}>
        <Image
          src={'/taskline-bg.svg'}
          alt={'image'}
          style={{
            width: '100%'
          }}
          width={300}
          height={300}
          quality={80}
          priority={true}
        />
      </div>
    </main>
  );
}
