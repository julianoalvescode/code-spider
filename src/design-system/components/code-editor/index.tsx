import React from "react";
import { Controller } from "react-hook-form";
import MonacoEditor from "@monaco-editor/react";

import * as I from "./types";

export const CodeEditor: React.FC<I.ICodeEditorProps> = ({ control }) => {
  return (
    <Controller
      control={control}
      name="code"
      render={({ field: { onChange, value } }) => (
        <MonacoEditor
          width="700px"
          height="250px"
          language="javascript"
          value={value}
          onChange={onChange}
          theme="vs-dark"
          defaultValue="// Code something here..."
        />
      )}
    />
  );
};
