import  {useState} from 'react';

export function CreditScoreCalculator(){
    const [formData, setFormData] = useState({
        subject1:"",
        credits1:"",
        gradePoints1:"",
        subject2:"",
        credits2:"",
        gradePoints2:"",
        subject3:"",
        credits3:"",
        gradePoints3:"",
        subject4:"",
        credits4:"",
        gradePoints4:"",
        subject5:"",
        credits5:"",
        gradePoints5:"",
        subject6:"",
        credits6:"",
        gradePoints6:"",
        subject7:"",
        credits7:"",
        gradePoints7:"",
        totalCredits:"",
        totalGradePoints:"",
        cgpa:""
    })
    const handleChange = (event) =>{
        const{name, value} = event.target;
        setFormData((prevFormData)=>({...prevFormData,[name]:value}))
    }

    formData.totalCredits =
        Number(formData.credits1) +
        Number(formData.credits2) +
        Number(formData.credits3) +
        Number(formData.credits4) +
        Number(formData.credits5) +
        Number(formData.credits6) +
        Number(formData.credits7);

    formData.totalGradePoints =
        (gradeToPoints(formData.gradePoints1) * Number(formData.credits1)) +
        (gradeToPoints(formData.gradePoints2) * Number(formData.credits2)) +
        (gradeToPoints(formData.gradePoints3) * Number(formData.credits3)) +
        (gradeToPoints(formData.gradePoints4) * Number(formData.credits4)) +
        (gradeToPoints(formData.gradePoints5) * Number(formData.credits5)) +
        (gradeToPoints(formData.gradePoints6) * Number(formData.credits6)) +
        (gradeToPoints(formData.gradePoints7) * Number(formData.credits7));

    formData.cgpa = (formData.totalGradePoints/formData.totalCredits).toFixed(2);

    function gradeToPoints(grade){
        switch (grade){
            case 'O':
                return 10;
            case 'A+':
                return 9;
            case 'A':
                return 8;
            case 'B+':
                return 7;
            case 'B':
                return 6;
            case 'C':
                return 5;
            case 'P':
                return 4;
            case 'F':
                return 0;
            default:
                return 0;
        }
    }

    return(
        <form>
            <table>
                <tr>
                    <th colSpan={6}><h1>CGPA CALCULATOR</h1></th>
                </tr>

                <tr>
                    <th colSpan={2}>Subject</th>
                    <th colSpan={2}>Credits</th>
                    <th colSpan={2}>Grade Obtained</th>
                </tr>

                <tr>
                    <th colSpan={2}><input name = "subject1" value ={formData.subject1} onChange={handleChange}/></th>
                    <th colSpan={2}><input name = "credits1" value ={formData.credits1} onChange={handleChange}/></th>
                    <th colSpan={2}><input name = "gradePoints1" value = {formData.gradePoints1} onChange={handleChange}/></th>
                </tr>

                <tr>
                    <th colSpan={2}><input name = "subject2" value={formData.subject2} onChange={handleChange}/></th>
                    <th colSpan={2}><input name = "credits2" value={formData.credits2} onChange={handleChange}/></th>
                    <th colSpan={2}><input name = "gradePoints2" value={formData.gradePoints2} onChange={handleChange}/></th>
                </tr>

                <tr>
                    <th colSpan={2}><input name="subject3" value={formData.subject3} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="credits3" value={formData.credits3} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="gradePoints3" value={formData.gradePoints3} onChange={handleChange}/></th>
                </tr>


                <tr>
                    <th colSpan={2}><input name="subject4" value={formData.subject4} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="credits4" value={formData.credits4} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="gradePoints4" value={formData.gradePoints4} onChange={handleChange}/></th>
                </tr>


                <tr>
                    <th colSpan={2}><input name="subject5" value={formData.subject5} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="credits5" value={formData.credits5} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="gradePoints5" value={formData.gradePoints5} onChange={handleChange}/></th>
                </tr>


                <tr>
                    <th colSpan={2}><input name="subject6" value={formData.subject6} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="credits6" value={formData.credits6} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="gradePoints6" value={formData.gradePoints6} onChange={handleChange}/></th>
                </tr>

                <tr>
                    <th colSpan={2}><input name="subject7" value={formData.subject7} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="credits7" value={formData.credits7} onChange={handleChange}/></th>
                    <th colSpan={2}><input name="gradePoints7" value={formData.gradePoints7} onChange={handleChange}/></th>
                </tr>



                <tr>
                    <td className="empty" colSpan={2}></td>
                    <td>Total Credits</td>
                    <td><input name="totalCredits" value={formData.totalCredits} onChange={handleChange}/></td>
                    <td>Total Grade Points</td>
                    <td><input name="totalGradePoints" value={formData.totalGradePoints} onChange={handleChange}/></td>
                </tr>



                <tr>
                    <td className="empty"></td>
                    <td className="empty"></td>
                    <td colSpan={2}>CGPA</td>
                    <td colSpan={2}><input name = "cgpa" value = {formData.cgpa} onChange={handleChange}/></td>
                </tr>

            </table>
        </form>
    );
}

export function MarksTable(){

    const [formData, setFormData] = useState({
        rollNo:"",
        name:"",
        subject1:"",
        marks1:"",
        maxMarks1:"",
        subject2:"",
        marks2:"",
        maxMarks2:"",
        subject3:"",
        marks3:"",
        maxMarks3:"",
        subject4:"",
        marks4:"",
        maxMarks4:"",
        subject5:"",
        marks5:"",
        maxMarks5:"",
        totalMarks:"",
        totalMaxMarks:"",
        totalCGPA:"",
        totalMaxCGPA:10
    })

    const handleChange = (event) => {
        const{name, value} = event.target;
        setFormData((prevFormData)=>({...prevFormData,[name]:value}));

    }
    formData.totalMarks = Number(formData.marks1)+Number(formData.marks2)+Number(formData.marks3)+Number(formData.marks4)+Number(formData.marks5);
    formData.totalMaxMarks = Number(formData.maxMarks1)+Number(formData.maxMarks2)+Number(formData.maxMarks3)+Number(formData.maxMarks4)+Number(formData.maxMarks5);
    formData.totalCGPA  = ((formData.totalMarks/formData.totalMaxMarks)*10);




    return(
        <form>
            <table>
                <tr>
                    <th colSpan={2}>CU</th>
                    <th colSpan={2}>Chitkara</th>
                </tr>

                <tr>
                    <th colSpan={4}>Results</th>
                </tr>

                <tr>
                    <th>RollNo</th>
                    <td><input name = "rollNo" value = {formData.rollNo} onChange={handleChange}/></td>
                    <th>Name</th>
                    <td><input name = "name" value = {formData.name} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <th colSpan={2}>Subject</th>
                    <th>Marks Obtained</th>
                    <th>Total Marks</th>
                </tr>

                <tr>
                    <td colSpan={2}><input name = "subject1" value={formData.subject1} onChange={handleChange}/></td>
                    <td><input name="marks1" value={formData.marks1} onChange={handleChange}/></td>
                    <td><input name="maxMarks1" value={formData.maxMarks1} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td colSpan={2}><input name="subject2" value={formData.subject2} onChange={handleChange}/></td>
                    <td><input name="marks2" value={formData.marks2} onChange={handleChange}/></td>
                    <td><input name="maxMarks2" value={formData.maxMarks2} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td colSpan={2}><input name="subject3" value={formData.subject3} onChange={handleChange}/></td>
                    <td><input name="marks3" value={formData.marks3} onChange={handleChange}/></td>
                    <td><input name="maxMarks3" value={formData.maxMarks3} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td colSpan={2}><input name="subject4" value={formData.subject4} onChange={handleChange}/></td>
                    <td><input name="marks4" value={formData.marks4} onChange={handleChange}/></td>
                    <td><input name="maxMarks4" value={formData.maxMarks4} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <td colSpan={2}><input name="subject5" value={formData.subject5} onChange={handleChange}/></td>
                    <td><input name="marks5" value={formData.marks5} onChange={handleChange}/></td>
                    <td><input name="maxMarks5" value={formData.maxMarks5} onChange={handleChange}/></td>
                </tr>

                <tr>
                    <th colSpan={2}>Total</th>
                    <th><input name = "totalMarks" value={formData.totalMarks}></input></th>
                    <th><input name = "totalMaxMarks" value={formData.totalMaxMarks}></input></th>
                </tr>

                <tr>
                    <th colSpan={2}>CGPA</th>
                    <th><input name="totalCGPA" value={formData.totalCGPA}></input></th>
                    <th><input name="totalMaxCGPA" value={formData.totalMaxCGPA}></input></th>
                </tr>

            </table>

        </form>
    );
}

export function PersonalInfo(props){
    return(
        <>
            <h1 style={{margin:'0 0 0.5rem 0'}}>{props.name}</h1>
            <h4>Date of birth: <span className={"transparentText"}>{props.dob}</span></h4>
            <h4>Address: <span className={"transparentText"}>{props.address}</span></h4>
            <h4>Phone No.: <span className={"transparentText"}>{props.phoneNum}</span></h4>
            <h4>Email: <span className={"transparentText"}>{props.email}</span></h4>
        </>
    );
}
export function PersonalInfoEdit({personalData,handlePersonalChange}) {
    return(
        <>

            <h2>Personal</h2>

            <label>Name <br/><input name={"name"} value={personalData.name} onChange={handlePersonalChange} placeholder={"name"}/></label>

            <label>Email<br/><input name={"email"} value={personalData.email} onChange={handlePersonalChange} placeholder={"example@mail.com"}/></label>

            <label>Phone Number<br/><input name={"phoneNum"} value={personalData.phoneNum} onChange={handlePersonalChange} placeholder={"xxx-xxx-xxxx"}/></label>

            <label>Date of birth<br/><input name={"dob"} value={personalData.dob} onChange={handlePersonalChange} placeholder={"01-01-2012"} type={"date"}/></label>

            <label>Address<br/><input name={"address"} value={personalData.address} onChange={handlePersonalChange} placeholder={"Ex:Dholakpur"}/></label>

        </>
    );
}

export function SkillList({List}){
    return(
        <table>
            {List.map((item)=>{
                return(
                    <tr key = {item}>
                        {
                            item.map((skill)=>{
                                return(
                                    <td key = {skill}>{skill}</td>
                                );
                            })
                        }
                    </tr>
                );
            })}
        </table>
    );
}

export function EducationList({List}) {
    console.log(List)
    return (
        <>
            {List.map((item) => {
                return (
                    <div className={"degree"}>
                        <h5><span className={"transparentText"}>{item.completionDate}</span></h5>
                        <h4>{item.degree}</h4>

                        <h4>{item.instituteName}</h4>

                        <h4>{item.location}</h4>

                    </div>
                );
            })}
        </>
    )
}

export function WorkList({List}) {
    return (
        List.map((item) => {
            return (
                <div className={"work"}>
                    <h5 className={"transparentText"}>{item.joinDate} - {item.leaveDate}</h5>

                    <h4>{item.company}</h4>

                    <h4>{item.positionTitle}</h4>

                    <h4>{item.responsibilities}</h4>

                </div>
            )

        })
    );
}

export function SkillRemove({List, removalFunction}) {
    return (
        <ul>
            {List.map((item) => {
                return(
                    <li key = {item}><span>{item}</span><button onClick={() =>{removalFunction(item)}} className={"removeButton"}>X</button></li>
                );
            })}
        </ul>
    );
}

export function EducationRemove({List, removalFunction}){
    return(
        <ul>
            {List.map((item)=>{
                return(
                    <li key={item}><span>{item.instituteName}</span><button onClick={() =>{removalFunction(item)}} className={"removeButton"}>X</button></li>
                );
            })}
        </ul>
    );

}

export function WorkRemove({List, removalFunction}){
    return(
        <ul>
            {List.map((item)=>{
                return(
                    <li key={item}><span>{item.company}</span><button onClick={() =>{removalFunction(item)}} className={"removeButton"}>X</button></li>
                );
            })}
        </ul>
    );
}