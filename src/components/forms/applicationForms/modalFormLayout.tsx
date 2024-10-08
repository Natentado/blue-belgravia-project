import style from "./style.module.scss";
import RecruiterApplication from "./recruiterForm";
import { MouseEventHandler } from "react";

interface ApplicationModal {
    segment: "candidate" | "recruiter";
    closeModal: MouseEventHandler<HTMLButtonElement>;
};

const ApplicationModal = ({segment, closeModal}: ApplicationModal) => {
    const headTitles = {
        "candidate": ["", ""],
        "recruiter": ["Company Information", "Job Details"]
    };

    return (
        <div className={style.applicationModal}>
            <header>
                <div>
                    <button onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 32 32"> <title>arrow-left2</title> <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"/> </svg>  
                    </button>
                    <h2>{headTitles[segment][0]}</h2>
                    <span>1/3</span>
                </div>
            </header>
            <RecruiterApplication />
        </div>
    )
};

export default ApplicationModal;