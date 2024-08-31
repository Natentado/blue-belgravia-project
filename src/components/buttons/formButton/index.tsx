"use client";
import ApplicationModal from "@/components/forms/applicationForms/modalFormLayout";
import style from "./style.module.scss";
import { ReactNode, useState } from "react";
import Button from "@/components/buttons";

interface IFormButton {
    segment: "candidate" | "recruiter";
    children?: ReactNode;
};

const FormButton = ({segment}: IFormButton) => {
    const [ showForm, setShowForm ] = useState(false);

    return (
        <>
            <Button
                className={style.formButton}
                onClick={() => setShowForm(true)}
            >
                {segment === "candidate" ? "Apply now!" : "Hire candidates!"}
            </Button>
            {!!showForm ?
                <ApplicationModal 
                    closeModal={() => setShowForm(false)} 
                    segment="recruiter"
                />
                : null
            }
        </>
    )
};

export default FormButton;