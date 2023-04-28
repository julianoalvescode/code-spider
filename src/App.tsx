import { useForm } from "react-hook-form";

import { CodeEditor, Button, Text, Link } from "./design-system/components";

import styles from "./design-system/styles/app.module.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { saveAs } from "file-saver";

export interface IFormData {
  code: string;
}

function App() {
  const { control, handleSubmit, reset } = useForm<IFormData>({
    defaultValues: {
      code: `// Code Spider v1.0.0`,
    },
  });

  const onSubmit = (_data: IFormData) => {
    try {
      const blob = new Blob([_data.code], {
        type: "text/javascript;charset=utf-8",
      });

      saveAs(blob, "injector-spider.js");

      toast.success("Success!!");
    } catch (_error) {
      toast.error("Error :(");
    }
  };

  return (
    <>
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
      <main className={styles["injector-spider-main"]}>
        <header className={styles["injector-spider-header"]}>
          <div className={styles["injector-spider-frame"]}>
            <div className={styles["injector-circle-1"]}></div>
            <div className={styles["injector-circle-2"]}></div>
            <div className={styles["injector-circle-3"]}></div>
          </div>
          <h3 className={styles["injector-spider-header-title"]}>Javascript</h3>
        </header>
        <form
          className={styles["injector-spider-form"]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <CodeEditor control={control} />
          <div className={styles["inject-spider-actions"]}>
            <Button type="submit">Save</Button>
            <Button onClick={() => reset("code")} type="button">
              Reset
            </Button>
          </div>
        </form>
        <footer className={styles["inject-spider-footer"]}>
          <Text>
            Code Spider v1.0.0 -{" "}
            <Link target="_blank" href="https://github.com/julianoalvescode">
              Made by Barba
            </Link>
          </Text>
        </footer>
      </main>
    </>
  );
}

export default App;
