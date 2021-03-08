function SideData({data}){
    console.log(">>>>>>>>>",data);
    return(
        <>
            <div className="w-full ml-2 bg-white p-3">
                <span className="font-bold">JOB TYPE</span>
                <ul>
                    {data.job_type.map((each)=>{
                        return <li>{ each.key }<span>{ each.doc_count }</span></li>
                    })}
                </ul>
            </div>
            <div className="w-full m-2 bg-white p-3">
                <span className="font-bold">DEPARTMENT</span>
                <ul>
                    <li>Anesthesiology & Perioperative Medicine <span>2149</span></li>
                    <li>Orthopaedic Surgery <span>2149</span></li>
                    <li>Pediatrics <span>2149</span></li>
                    <li>Ophthaimology <span>2149</span></li>
                    <li>Pathology & Laboratory Medicine <span>2149</span></li>
                    <li>Emergency Medicine <span>2149</span></li>
                    <li>Radiation Oncology <span>2149</span></li>
                    <li>Obsterics and Gynecology <span>2149</span></li>
                    <li>Urology <span>2149</span></li>
                    <li>Neurology <span>2149</span></li>
                    <li><span className="text-blue-400">Show more</span></li>
                </ul>
            </div>
            <div className="w-full m-2 bg-white p-3">
                <span className="font-bold">WORK SCHEDULE</span>
                <ul>
                    <li>Night shift <span>3889</span></li>
                    <li>Day shift <span>3889</span></li>
                </ul>
            </div>
            <div className="w-full m-2 bg-white p-3">
                <span className="font-bold">EXPERIENCE</span>
                <ul>
                    <li>Inertmediate <span>1997</span></li>
                    <li>Senior <span>3889</span></li>
                    <li>Internship <span>3889</span></li>
                    <li>Junior <span>3889</span></li>
                </ul>
            </div>
        </>
    )
}
export async function getStaticProps() {
    console.log("<<<<<<<<<<<>>>>>>");
    const res = await fetch('/api/filters');
    const data = await res.json();
    return {
        props: {
            data,
        }
    }
}
export default SideData