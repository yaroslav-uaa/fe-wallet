import styles from './Switch.module.css';

export default function Switch({ isChecked =false, onSwitch }) {
  console.log(isChecked)
  return (
    <div className={styles.switch_box}>
      <div>
        <div>
          <input
            type="checkbox"
            id="income"
            className={styles.switch}
            checked={isChecked}
            onClick={onSwitch}
          />
          <label for="income" className={styles.switch_for}></label>
        </div>
      </div>
    </div>
  );
}
