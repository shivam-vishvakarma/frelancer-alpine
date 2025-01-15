import Link from "next/link";

export default function SideBar() {
  const profile = {
    name: "Alpine Technologies",
    profileCompletion: 80,
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  };
  return (
    <aside className="group">
      <label htmlFor="toggle" className="md:hidden fixed top-3 left-3 z-40">
        <svg
          className="size-8 text-gray-800 dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </label>
      <label
        htmlFor="toggle"
        className="fixed w-full h-full bg-black/10 z-40 group-has-[#toggle:checked]:block hidden"
      ></label>
      <input type="checkbox" id="toggle" className="hidden" />
      <main className="w-64 bg-white shadow h-screen overflow-y-auto overflow-x-hidden absolute z-50 md:static block min-h-screen transition-all group-has-[#toggle:checked]:translate-x-0 -translate-x-full md:translate-x-0">
        <div className="py-3 text-2xl sticky top-0 shadow-xl uppercase text-center tracking-widest bg-primary-dark mb-2">
          <Link href="/" className="text-white">
            Logo
          </Link>
          <div className="flex flex-col items-center mt-6 -mx-2">
            <div className="relative size-24">
              <div className="absolute z-0 inset-0 scale-110">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <clipPath id="circleView">
                      <circle cx="50" cy="50" r="35" />
                    </clipPath>
                  </defs>
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="5"
                    stroke="#fff"
                    strokeDasharray={profile.profileCompletion * 2.512}
                    d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0,251.2"
                      to={`${profile.profileCompletion * 2.512},251.2`}
                      dur="2s"
                    />
                  </path>
                  <image
                    width="100"
                    height="100"
                    xlinkHref={profile.avatar}
                    clipPath="url(#circleView)"
                  />
                </svg>
              </div>
            </div>
            <h4 className="mx-2 mt-2 font-medium text-white">{profile.name}</h4>
            <p className="mx-2 text-xs tracking-wide text-white">
              Profile {profile.profileCompletion}% Completed
            </p>
          </div>
        </div>
        <nav className="text-sm text-primary-dark">
          <ul className="flex flex-col">
            <li className="px-4 cursor-pointer text-white bg-primary-dark">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>
                Dashboard
              </Link>
            </li>
            <li className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-bold">
              Project Management
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                Project Requests
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                Ongoing Projects
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-4 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9"
                  />
                </svg>
                Completed Projects
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                Project History
              </Link>
            </li>
            <li className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-bold">
              Deadlines Management
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 25"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6l3 3m6 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Deadlines
              </Link>
            </li>

            <li className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-bold">
              Specialisation Management
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Your Specialisations
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
                Specialisation Requests
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link className="py-3 flex items-center" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                Manage Prices
              </Link>
            </li>
            <li className="px-4 py-2 text-xs uppercase tracking-wider text-gray-500 font-bold">
              Profile MANAGEMENT
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link href="/" className="py-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14c-3.314 0-6-2.686-6-6s2.686-6 6-6s6 2.686 6 6s-2.686 6-6 6Zm0 2.25c-4.5 0-9 2.25-9 4.5V21h18v-.75c0-2.25-4.5-4.5-9-4.5Zm0 0c-3.75 0-6.75 1.5-6.75 4.5v1.5h13.5v-1.5c0-3-3-4.5-6.75-4.5Z"
                  />
                </svg>
                Profile
              </Link>
            </li>
            <li className="px-4 cursor-pointer hover:bg-primary-dark hover:text-white">
              <Link href="#" className="py-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14c-3.314 0-6-2.686-6-6s2.686-6 6-6s6 2.686 6 6s-2.686 6-6 6Zm0 2.25c-4.5 0-9 2.25-9 4.5V21h18v-.75c0-2.25-4.5-4.5-9-4.5Zm0 0c-3.75 0-6.75 1.5-6.75 4.5v1.5h13.5v-1.5c0-3-3-4.5-6.75-4.5Z"
                  />
                </svg>
                Public Profile
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </aside>
  );
}
