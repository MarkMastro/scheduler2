import React from "react";
import "components/InterviewerListItem.scss"
import classNames from "classnames";

export default function(props) {

    const {name, avatar, selected, setInterviewer} = props;
    
    const interviewClasses = classNames("interviewer__item", {"--selected":selected})

    return(
        <li onClick={setInterviewer} className={interviewClasses}>
        <img
            className="interviewers__item-image"
            src={avatar}
            alt={name}
        />
        {selected && name}
        </li>
    );
}