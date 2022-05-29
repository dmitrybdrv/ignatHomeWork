import React, {useState} from 'react'
import {AffairType, defaultAffairs} from "./HW2";
import s from "./Affairs.module.css";
import affairs from "./Affairs";


type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_affairs: AffairType[], _id: number) => void
}

function Affair(props: AffairPropsType) {



const deleteButton = (_id: number) => {
    console.log(_id)
}


    return (
        <div className={s.someClass}>
            <span>{props.affair.name} {props.affair.priority} </span>
            <button onClick={() => deleteButton(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
