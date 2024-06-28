import styles from "./App.module.css";
import { PageLayout } from "./components/PageLayout/PageLayout";


function App() {

  return( 
    <div className={styles.App}>
      <PageLayout></PageLayout>
    </div>
  );
}

export default App
