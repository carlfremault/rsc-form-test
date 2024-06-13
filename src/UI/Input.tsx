import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import React from "react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  required?: boolean;
}
const Input = ({ id, name, type, required = false }: InputProps) => {
  return (
    <div className="flex flex-row">
      <label htmlFor={id} className="basis-16 py-2">
        {capitalizeFirstLetter(name)}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        className="w-96 bg-sky-700 px-4 py-2"
      />
    </div>
  );
};

export default Input;
