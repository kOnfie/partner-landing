import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button/Button'

import Input from '../../ui/Input/Input'
import { PasswordInput } from './PasswordInput'

import personIcon from '../../../assets/img/personIcon.svg'

import styles from './registerForm.module.scss'

export const RegisterForm: FC = () => {
  return (
    <>
      <form className={styles.form}>
        <div className={styles.form_input}>
          <img src={personIcon} alt="user's email" />
          <Input type="email" placeholder="Email" />
        </div>

        <div className={styles.form_input}>
          <PasswordInput />
        </div>

        <div className={styles.form_checkbox}>
          <Input type="checkbox" placeholder="checkbox" />
          <span className={styles['form_checkbox-span']}></span>

          <label htmlFor="checkbox">
            <p>
              Я даю <span>згоду</span> на обробку власних данних
            </p>
          </label>
        </div>

        <div className={styles.form_tabs}>
          <Button>Зареєструватись</Button>
          <Link to="/authentication?mode=signup">Увійти</Link>
        </div>
      </form>
    </>
  )
}
