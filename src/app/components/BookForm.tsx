"use client";

import React, { useEffect, useRef } from "react";
import { createBook } from "@/app/actions";
import { useFormState } from "react-dom";
import Input from "@/UI/Input";
import Form from "@/UI/Form";
import SubmitButton from "@/UI/SubmitButton";

const initialState = {
  status: "",
};

const BookForm = () => {
  const [formState, formAction] = useFormState(createBook, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!formRef.current) return;
    if (formState.status === "success") {
      formRef.current.reset();
    }
  }, [formState]);

  return (
    <Form action={formAction} ref={formRef}>
      <Input id="title" name="title" type="text" required />
      <Input id="author" name="author" type="text" required />
      <SubmitButton />
      {formState?.status === "success" && (
        <div className="toast">Added to list!</div>
      )}
    </Form>
  );
};

export default BookForm;
