import React from "react";

// Footer Component

export default function Footer({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <div className="text-left bg-gray-50">
        <div className="sm:float-left sm:w-6/12 p-4">
            <span className="font-bold">About us</span>
            <p>
                We are a team of nurses, doctors, technologists and executives dedicated to help nurses find jobs that the love.
                All copyrights reserved @ 2020 - health Explore
            </p>
        </div>
        <div className="sm:float-left sm:w-3/12 p-4">
            <span className="font-bold">Sitemap</span>
            <ul>
                <li>Nurses</li>
                <li>Employers</li>
                <li>Social networking</li>
                <li>Jobs</li>
            </ul>
        </div>
        <div className="sm:float-left sm:w-3/12 p-4">
            <span className="font-bold">Privacy</span>
            <ul>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Cookie plicy</li>
            </ul>
        </div>
      </div>  
    </>
  );
}