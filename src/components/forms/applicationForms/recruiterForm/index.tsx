import Input from "@/components/inputs/main";
import style from "./style.module.scss";

interface IRecruiterApplication {};

const RecruiterApplication = () => {

    return (
        <div>
            <p>Connect right away if you want to partner with us for a seamless event.</p>
            <form className={style.companyInfos} id="recruiter_form">
                <Input 
                    label="Contact's Full Name"
                    id="nameInput"
                    name="nameInput"
                    type="text"
                    required
                />
                <Input 
                    label="Contact Phone"
                    id="phone-input"
                    name="phone-input"
                    type="text"
                    required
                />
                <Input 
                    label="Email"
                    id="email-input"
                    name="email-input"
                    type="email"
                    required
                />
                <Input 
                    label="Company Name"
                    id="company-input"
                    name="company-input"
                    type="text"
                    required 
                />
                <div>
                    <button onClick={(e) => e.preventDefault()}>Return</button>
                    <button>Continue</button>
                </div>
            </form>
        </div>
    )
};

export default RecruiterApplication;