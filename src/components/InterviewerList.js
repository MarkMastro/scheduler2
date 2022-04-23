import React from "react";
import "components/InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewList(props) {
    
    const {value, interviewers, onChange} = props;
    

    const interviewerItemList = interviewers.map((interviewerItem)=>{
    return (
    <InterviewerListItem 
        key={interviewerItem.id}
        name={interviewerItem.name} 
        avatar={interviewerItem.avatar} 
        setInterviewer={()=>onChange(interviewerItem.id)} 
        selected={value===interviewerItem.id}/>
    )
});

    return(
        <ul>
            {interviewerItemList}
        </ul>
    );
}