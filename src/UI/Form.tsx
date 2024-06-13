import React, { forwardRef } from "react";

interface FormProps {
  action: (data: FormData) => void;
  children: React.ReactNode;
}
const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ action, children }, ref) => {
    return (
      <form
        action={action}
        ref={ref}
        className="flex basis-96 flex-col justify-start gap-4 border border-sky-500 p-4"
      >
        {children}
      </form>
    );
  },
);

Form.displayName = "Form";

export default Form;
