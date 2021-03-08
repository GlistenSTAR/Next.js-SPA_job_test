import React from "react";

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-blue-600"
              href="#pablo"
            >
              HEALTH EXPLORE
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <div className="w-full" align="center"> */}
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
              align="center"
            >
              <ul className="flex flex-col lg:flex-row list-none mr-auto ml-auto mt-3" >
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i><span className="ml-2">PROFILE</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i><span className="ml-2">JOBS</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">PROFESSIONAL NETWORK </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">LOUGUE </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i><span className="ml-2">SALARY </span>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none" >
                <button className="border-2rounded-md p-1 pl-2 pr-2 border-blue-600 text-blue-600">CREATE JOB</button>
                <div className="relative ml-20 inline-block">
                  <img className="inline-block object-cover w-12 h-12 rounded-full" data-nsfw-filter-status={true}  src="./img/avartar.png" alt="Profile image"/>
                  <span className="absolute bottom-0 right-0 top-0 text-xs inline-block p-0.5 box-border  h-7 w-7 border-4  border-gray-50 uppercase rounded-full text-gray-50 bg-red-600 uppercase last:mr-0 mr-1">2</span>
                </div>
                <span className="m-3 font-bold">
                  LOGOUT
                </span>
              </ul>
            </div>
          {/* </div> */}
        </div>
      </nav>
    </>
  );
}