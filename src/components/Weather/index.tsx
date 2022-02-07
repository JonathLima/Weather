import styles from "./style.module.scss";

export const Weather = (props: any) => {
  return (
    <div className={styles.wrapperContainer}>
      <h1>{props.city}</h1>
      <div className={styles.temperature}>
        <p>{props.condition}</p>
        <p>{props.temp}</p>
      </div>
    </div>
  );
};
