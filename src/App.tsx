import { useForm } from "react-hook-form";

import { CodeEditor } from "./design-system/components";

import styles from "./design-system/styles/app.module.scss";

export interface IFormData {
  code: string;
}

function App() {
  const { control, handleSubmit } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    chrome.tabs.query(
      { active: true, currentWindow: true },
      function (_tabs: any) {
        chrome.tabs.executeScript({ code: data.code });
      }
    );
  };

  return (
    <>
      <main className={styles["injector-spider-main"]}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CodeEditor control={control} />
          <button className={styles["injector-spider-button"]} type="submit">
            Execute script in Browser
          </button>
        </form>
        <footer>
          <p className={styles["injector-spider-text-footer"]}>
            Injector Spider v1.0.0 - Made by Barba
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
