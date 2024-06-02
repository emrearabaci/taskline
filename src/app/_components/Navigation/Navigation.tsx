'use client';

/* Next API */
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/* React API */
import { useState } from 'react';

/* Components */
import Button from '@/app/_components/Button/Button';

/* Styles */
import styles from '@/app/_components/Navigation/Navigation.module.scss';

export default function Navigation() {
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const pathName = usePathname();

  const navigationItems = [
    {
      id: 0,
      name: 'Homepage',
      link: '/'
    },
    {
      id: 1,
      name: 'Taskline',
      link: '/taskline'
    }
  ];

  const imageConfigs = {
    width: 24,
    height: 24,
    quality: 80,
    priority: true
  };

  const toggle = () => {
    isDrawerActive ? setIsDrawerActive(false) : setIsDrawerActive(true);
  };

  return (
    <>
      <nav className={styles.main}>
        <Link href="/">
          <h4>TASKLINE</h4>
        </Link>

        <Button
          type={'button'}
          onClick={toggle}
          content={
            <Image
              src={'/icon-list-nested.svg'}
              alt={'image'}
              width={imageConfigs.width}
              height={imageConfigs.height}
              quality={imageConfigs.quality}
              priority={imageConfigs.priority}
            />
          }
        />
      </nav>

      {isDrawerActive && (
        <div className={isDrawerActive ? styles.drawer : ''}>
          <div className={styles.header}>
            <Link onClick={toggle} href="/">
              <h4>TASKLINE</h4>
            </Link>

            <Button
              type={'button'}
              onClick={toggle}
              content={
                <Image
                  src={'/icon-x-lg.svg'}
                  alt={'image'}
                  width={imageConfigs.width}
                  height={imageConfigs.height}
                  quality={imageConfigs.quality}
                  priority={imageConfigs.priority}
                />
              }
            />
          </div>

          <div className={styles.content}>
            {navigationItems.map((item, index: number) => (
              <Link
                key={index}
                className={pathName === item.link ? styles.active : ''}
                onClick={toggle}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
