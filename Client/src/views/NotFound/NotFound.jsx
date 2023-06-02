import styles from '../NotFound/NotFound.module.css';
import { NavLink } from 'react-router-dom';

const NotFound = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>

        <div className={styles.imgWrapper}>
          <span>44</span>
        </div>

        <p>The page you are trying to search<br/> has been  moved to another dimension.</p>

        <button>
          <NavLink to="/home" className={styles.link}>GET ME HOME!</NavLink>
        </button>
      </div>
    </div>
  )
}

export default NotFound;