import React, { useState, useEffect } from "react";
import SideData from "./sideData";
function Content(){
    return (
        <div className="">
                <form method="GET" className="m-5">
                    <div className="relative text-gray-600 focus-within:text-gray-400">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                        </span>
                        <input type="search" name="q" className="py-2 text-sm h-10 text-lg w-full text-black bg-gray-50 rounded-md pl-10 focus:outline-none focus:bg-white" placeholder="Search..." autoComplete="off"/>
                    </div>
                </form>
            <div className="flex">
                <div className="w-3/12 m-2 rounded-sm">
                    <SideData/> 
                </div>
                <div className="w-9/12 bg-white m-2 rounded-sm">
                    <div className="flex m-10">
                        <span className="w-3/12 text-lg"><span className="font-bold">7753</span> job postings</span>
                        <div className="w-9/12 flex">
                            <span className="text-gray-600 text-lg">Sort by</span>
                            <ul className="flex">
                                <li className="ml-2 font-bold text-lg">Location</li>
                                <li className="ml-2 font-bold text-lg">Role</li>
                                <li className="ml-2 font-bold text-lg">Department</li>
                                <li className="ml-2 font-bold text-lg">Education</li>
                                <li className="ml-2 font-bold text-lg">Experience</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="text-lg ml-3">
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                            <li className="m-4"><span className="bg-gray-500 p-2 rounded-md">MA</span> <span>8</span>jobs for Mammoth Hospital</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      )
}
// Content.propTypes = {
//     getAllJobs: PropTypes.func.isRequired,
//     errors: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//     errors: state.errors
// });
// export default connect(mapStateToProps, { getAllJobs })(Content);
export default Content;