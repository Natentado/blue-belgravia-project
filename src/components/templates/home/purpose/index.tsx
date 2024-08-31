import styles from "./style.module.scss";

interface IPurpose {
    isMobile: boolean;
};

const Purpose = ({isMobile}: IPurpose) => {
    return (
        <section className={`flex-column spacing-3x ${styles.purpose}`}>
            <h2>
            Bar Staff, Waiter and 
            Hostess Recruitment in <b>Central London</b>
            </h2>
            <span>
            <p>
                Transform the face of your event with 
                {" "} <b>professional hosting</b> <br/> 
                from our expert staff.
            </p>
            {!isMobile ?
                <p>
                We specialise in the art of hospitality, and know how to deliver the finest experience possible to your guests. 
                With offices based throughout Central London, we are ideally located to deliver the right staff for your occasion in the City.
                </p>
                : null
            }
            </span>
        </section>
    )
};

export default Purpose;