import classnames from 'classnames'

import styles from './styles.module.scss'

type CompanyValuesProps = {
  valuesList: string[]
  className?: string
}

function CompanyValues({ valuesList, className }: CompanyValuesProps) {
  return (
    <ul className={classnames(styles['company-values-container'], className)}>
      {valuesList.map((value) => (
        <li key={value} className={styles['list-item']}>
          {value}
        </li>
      ))}
    </ul>
  )
}

export default CompanyValues
