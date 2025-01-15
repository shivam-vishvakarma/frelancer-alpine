export default function FileInput() {
    return (
      <div className="rounded-md border border-primary-dark bg-primary-light p-4 shadow-md w-36">
        <label
          htmlFor="upload"
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 fill-primary-light stroke-primary-dark"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="text-primary-dark font-medium">Upload file</span>
        </label>
        <input id="upload" type="file" className="hidden" />
      </div>
    );
}