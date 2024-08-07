import { FC, ReactNode } from 'react'

import styles from './button.module.scss'

interface ButtonProps {
  children: ReactNode
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}
