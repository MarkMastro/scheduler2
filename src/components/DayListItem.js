import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

    const {name, spots, selected, setDay} = props;

    const dayListItemClasses = classNames("day-list__item", {"--selected": selected, "--full": spots === 0})

    return (
        <li className={dayListItemClasses} onClick={()=>setDay(name)}>
        <h2 className="text--regular">{name}</h2> 
        <h3 className="text--light">{spots} spots remaining </h3>
      </li>
    );
}

