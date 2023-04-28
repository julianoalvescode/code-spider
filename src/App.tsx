import { useForm } from "react-hook-form";

import { CodeEditor } from "./design-system/components";

import styles from "./design-system/styles/app.module.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { saveAs } from "file-saver";

export interface IFormData {
  code: string;
}

function App() {
  const { control, handleSubmit } = useForm<IFormData>();

  const onSubmit = (_data: IFormData) => {
    try {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.scripting.executeScript(
          {
            target: { tabId: tabs[0].id as number },
            files: ["arquivo.js"],
          },
          () => {
            console.log("Script executado com sucesso!");
          }
        );
      });
      toast.success("Script executed in Browser!");
    } catch (_error) {
      toast.error("Error executing script in Browser!");
    }
  };

  return (
    <>
      <main className={styles["injector-spider-main"]}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <form
          className={styles["injector-spider-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <CodeEditor control={control} />
          <div className={styles["inject-spider-actions"]}>
            <button className={styles["injector-spider-button"]} type="submit">
              Execute script in Browser
            </button>
          </div>
        </form>
        <footer className={styles["inject-spider-footer"]}>
          <p className={styles["injector-spider-text-footer"]}>
            Injector Spider v1.0.0 -{" "}
            <a
              target="_blank"
              className={styles["injector-spider-link"]}
              href="https://github.com/julianoalvescode"
            >
              Made by Barba
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
