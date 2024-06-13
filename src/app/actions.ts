"use server";

import { z } from "zod";

type Book = {
  id: string;
  title: string;
  author: string;
};

let books: Book[] = [];

const createBookSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
});

export async function createBook(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const data = createBookSchema.parse({
      title: formData.get("title"),
      author: formData.get("author"),
    });

    books.push({
      id: crypto.randomUUID(),
      ...data,
    });
  } catch (error) {
    console.log(error);
    return { status: "error" };
  }

  return { status: "success" };
}
