export default function Home() {
  return (
    <div className="flex justify-center">
      <form className="flex basis-96 flex-col justify-start gap-4 border border-sky-500 p-4">
        <div className="flex flex-row">
          <label htmlFor="title" className="basis-16 py-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-96 bg-sky-700 px-4 py-2"
          />
        </div>
        <div className="flex flex-row">
          <label htmlFor="author" className="basis-16 py-2">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            className="w-96 bg-sky-700 px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className="self-center border border-sky-500 px-4 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
