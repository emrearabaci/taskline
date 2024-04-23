interface LabelProps {
  content: any;
  customClass: any;
}

/* Styles */
import styles from '@/app/_components/Label/Label.module.scss';

export default function Label({ content, customClass }: LabelProps) {
  return <span className={`${styles.main} ${customClass}`}>{content}</span>;
}
