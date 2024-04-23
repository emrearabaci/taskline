interface Button {
  type: 'button' | 'submit' | 'reset';
  onClick: any;
  content: any;
}

/* Styles */
import styles from '@/app/_components/Button/Button.module.scss';

export default function Button({ type, onClick, content }: Button) {
  return (
    <button className={styles.main} type={type} onClick={onClick}>
      {content}
    </button>
  );
}
