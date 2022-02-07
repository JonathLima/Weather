import { Search } from "./components/Search";
import { Weather } from "./components/Weather";

import styles from "./styles/app.module.scss";

const App = () => {
  return (
    <div className={styles.wrapperContainer}>
      <Search />
      <Weather />
    </div>
  );
};

export default App;
