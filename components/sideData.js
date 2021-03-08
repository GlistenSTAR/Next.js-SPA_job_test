import React from "react";
import useSWR from 'swr';
import Modal from 'react-modal';
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
const fetcher = url => fetch(url).then(res => res.json())
function SideData(){
    const { data, error } = useSWR('api/filters', fetcher)
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
    // function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    // }
    function closeModal(){
      setIsOpen(false);
    }

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return(
        <>
            <div className="w-full ml-2 bg-white p-3">
                <span className="font-bold">JOB TYPE</span>
                <ul>
                    {data.job_type.map((each)=>{
                        return <li className="mt-2" key={each.key}>{ each.key }{' : '}<span className="text-gray-400">{ each.doc_count }</span></li>
                    })}
                </ul>
            </div>
            <div className="w-full m-2 bg-white p-3">
                <span className="font-bold">DEPARTMENT</span>
                <ul>
                    {data.department.slice(0,10).map((each)=>{
                        return <li className="mt-2" key={each.key}>{ each.key }{' : '}<span className="text-gray-400">{ each.doc_count }</span></li>
                    })}
                </ul>
                <button onClick={openModal} className="text-blue-600 focus:border-none">show more...</button>
            </div>
            <div className="w-full m-2 bg-white p-3">
                <span className="font-bold">WORK SCHEDULE</span>
                <ul>
                    {data.work_schedule.map((each)=>{
                        return <li className="mt-2" key={each.key}>{ each.key }{' : '}<span className="text-gray-400">{ each.doc_count }</span></li>
                    })}
                </ul>
            </div>
            <div className="w-full m-2 bg-white p-3">
                <span className="font-bold">EXPERIENCE</span>
                <ul>
                    {data.experience.map((each)=>{
                        return <li className="mt-2" key={each.key}>{ each.key }{' : '}<span className="text-gray-400">{ each.doc_count }</span></li>
                    })}
                </ul>
            </div>
            <div>
              <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div className="flex">
                    <h2  className="w-6/12 text-gray-600 mt-4 font-bold">Department</h2>
                    <button onClick={closeModal} className="flex w-6/12 justify-end mb-4 text-4xl">&times;</button>
                </div>
                <hr/>
                <ul className="grid grid-cols-4">
                    {data.department.map((each)=>{
                        return <li className="mt-2" key={each.key}>{ each.key }{' : '}<span className="text-gray-400">{ each.doc_count }</span></li>
                    })}
                </ul>
              </Modal>
            </div>
        </>
    )
}
export default SideData