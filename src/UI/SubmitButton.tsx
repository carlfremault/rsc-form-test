import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="self-center border border-sky-500 px-4 py-2"
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
};

export default SubmitButton;
