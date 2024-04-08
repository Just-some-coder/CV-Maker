import {useState} from "react";
import {SkillRemove} from "./Components.jsx";
import {PersonalInfo} from "./Components.jsx";
import {PersonalInfoEdit} from "./Components.jsx";
import {SkillList} from "./Components.jsx";
import {EducationList} from "./Components.jsx";
import {WorkList} from "./Components.jsx";
import {EducationRemove} from "./Components.jsx";
import {WorkRemove} from "./Components.jsx";
function reshapeArray(array, columns) {
    const rows = Math.ceil(array.length / columns);
    const reshapedArray = [];

    for (let i = 0; i < rows; i++) {
        reshapedArray.push(array.slice(i * columns, (i + 1) * columns));
    }

    return reshapedArray;
}

export default function CVMaker() {
    const [personalData, setPersonalData] = useState({
        name: "",
        email: "",
        phoneNum: "",
        dob:"",
        address:""
    })

    const [skillList, setSkillList] = useState([]);

    const [skill, setSkill] = useState("");

    const [educationData, setEducationData] = useState([]);

    const [educationInfo, setEducationInfo] = useState({
        instituteName: "",
        location: "",
        degree: "",
        completionDate: ""
    });

    const [workData, setWorkData] = useState([])

    const [workInfo, setWorkInfo] = useState({
        company: "",
        positionTitle: "",
        responsibilities: "",
        joinDate: "",
        leaveDate: ""
    })

    const handleSkillAdd = (tempSkill = "") => {
        const temp = [...skillList];
        temp.push(tempSkill);
        setSkill("");
        setSkillList(temp);
    }

    const handlePersonalChange = (event) => {
        const {name, value} = event.target;
        setPersonalData((prevPersonalData) => ({...prevPersonalData, [name]: value}));
    }

    const handleSkillChange = (event) => {
        const {name, value} = event.target;
        setSkill(value);
    }

    const handleEducationChange = (event) => {
        const {name, value} = event.target;
        setEducationInfo((prevEducationInfo) => ({...prevEducationInfo, [name]: value}));
    }

    const handleWorkChange = (event) => {
        const {name, value} = event.target;
        setWorkInfo((prevWorkInfo)=>({...prevWorkInfo,[name]:value}))
    }

    const handleEducationAdd = (info) => {
        const temp = [...educationData];
        temp.push(info);
        setEducationInfo({
            instituteName: "",
            location: "",
            degree: "",
            completionDate: ""
        });
        setEducationData(temp);
    }

    const handleWorkAdd = (info) =>{
        const temp = [...workData];
        temp.push(info);
        setWorkInfo({
            company: "",
            positionTitle: "",
            responsibilities: "",
            joinDate: "",
            leaveDate: ""
        });
        setWorkData(temp);
    }

    const handleSkillRemove = (item) => {
        const temp = [...skillList];
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === item) {
                temp.splice(i, 1);
                break;
            }
        }
        setSkillList(temp);
    }

    const handleEducationRemove = (item) => {
        const temp = [...educationData];
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === item) {
                temp.splice(i, 1);
                break;
            }
        }
        setEducationData(temp);
    }

    const handleWorkRemove = (item) =>{
        const temp = [...workData];
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] === item) {
                temp.splice(i, 1);
                break;
            }
        }
        setWorkData(temp);
    }

    const finalSkills = reshapeArray(skillList, 5);

    return (
        <>
            <section className={"fill-info"}>
                <div className={"boxes"}>
                    <div id="personal">
                        <PersonalInfoEdit personalData={personalData} handlePersonalChange={handlePersonalChange}/>
                    </div>

                    <div id="skill">
                    <h2>Skills</h2>
                    <label style={{height:"fit-content"}}>Skill<br/><input name={"skillInput"} value={skill} onChange={handleSkillChange} placeholder={"Ex:Leadership"}/></label>

                    <button className = {"submitButton"} onClick={() => {
                        handleSkillAdd(skill)
                    }}>Submit
                    </button>

                    <SkillRemove List={skillList} removalFunction={handleSkillRemove}/>


                </div>
                </div>

                <div className={"boxes"}>
                    <div id="education">

                        <h2>Education</h2>

                        <label>Institute Name<br/><input name={"instituteName"} value={educationInfo.instituteName}
                                                       onChange={handleEducationChange}/></label>

                        <label>Location<br/><input name={"location"} value={educationInfo.location}
                                                   onChange={handleEducationChange}/></label>

                        <label>Degree<br/><input name={"degree"} value={educationInfo.degree}
                                                 onChange={handleEducationChange}/></label>

                        <label>Completion Date<br/><input name={"completionDate"} value={educationInfo.completionDate}
                                                          onChange={handleEducationChange} type={"date"}/></label>

                        <button onClick={() => {
                            handleEducationAdd(educationInfo)
                        }
                        } className={"submitButton"}>Submit
                        </button>

                        <EducationRemove List={educationData} removalFunction={handleEducationRemove}/>

                    </div>

                    <div id="work">
                    <h2>Work</h2>

                    <label>Company<br/><input name ={"company"} value = {workInfo.company} onChange={handleWorkChange}/></label>

                    <label>Position Title<br/><input name ={"positionTitle"} value = {workInfo.positionTitle} onChange={handleWorkChange}/></label>

                    <label>Responsibilities<br/><input name ={"responsibilities"} value = {workInfo.responsibilities} onChange={handleWorkChange}/></label>

                    <label>Join Date<br/><input name ={"joinDate"} value = {workInfo.joinDate} onChange={handleWorkChange} type={"date"}/></label>

                    <label>Leave Date<br/><input name ={"leaveDate"} value = {workInfo.leaveDate} onChange={handleWorkChange} type={"date"}/></label>
                    <button onClick={()=>(handleWorkAdd(workInfo))} className={"submitButton"}>Submit</button>

                    <WorkRemove List={workData} removalFunction={handleWorkRemove}/>

                </div>
                </div>

            </section>

            <section className={"display-info"}>
                <div id="personal-display" className="info-display">
                    <PersonalInfo {...personalData}/>
                </div>

                <div id="skill-display" className="info-display">
                    <h3 className="heading">Skills</h3>
                    <hr/>
                    <SkillList List={finalSkills}/>
                </div>

                <div id="education-display" className="info-display">
                    <h3 className={"heading"}>Education</h3>
                    <hr/>
                    <EducationList List={educationData}/>
                </div>

                <div id="work-display" className="info-display">

                    <h3 className={"heading"}>Work</h3>
                    <hr/>
                    <WorkList List={workData}/>

                </div>
            </section>
        </>
    );
}