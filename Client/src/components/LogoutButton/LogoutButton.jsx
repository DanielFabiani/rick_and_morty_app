import styles from "./LogoutButton.module.css";

const LogoutButton = (props) => {

  return (
    <div>
      <button className={styles.logoutButton} onClick={props}>Logout</button>
    </div>
  )
}

export default LogoutButton;