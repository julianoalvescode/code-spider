import { Control } from "react-hook-form";
export interface IFormData {
  code: string;
}

export interface ICodeEditorProps {
  control: Control<IFormData>;
}
