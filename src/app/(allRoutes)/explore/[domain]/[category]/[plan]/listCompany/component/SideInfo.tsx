export default function SideInfo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-2 p-2 xl:p-4 rounded flex flex-col gap-2 border-primary-dark">
        <h2 className="text-xs xl:text-lg font-semibold">📨 Email me for jobs</h2>
        <p className="text-xs xl:text-sm">
          Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo
          ea foes.
        </p>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="name@mail.com"
            className="focus:ring-0 border-inherit rounded p-2 py-1"
          />
          <button
            type="submit"
            className="bg-primary-dark text-xs xl:text-sm text-white p-2 rounded font-semibold hover:brightness-150 transition duration-150"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="border-2 xl:p-4 p-2 rounded flex flex-col gap-2 xl:gap-4 border-primary-dark">
        <h2 className="text-xs xl:text-lg font-semibold">🚀 Get noticed faster</h2>
        <p className="text-xs xl:text-sm">
          Quis eiusmod deserunt cillum laboris magna cupidatat esse labore irure
          quis cupidatat in.
        </p>
        <label className="bg-primary-dark text-xs xl:text-sm text-white p-2 rounded font-semibold hover:brightness-150 transition duration-150 text-center">
          <input type="file" hidden />
          <span>Upload your resume</span>
        </label>
      </div>
    </div>
  );
}
