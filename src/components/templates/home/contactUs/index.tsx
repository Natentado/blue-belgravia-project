import Link from "next/link";
import styles from "./style.module.scss";

const ContactUs = () => {
    
    return (
        <section className={`flex-column centered spacing-1x ${styles.contactUs}`}>
            <h2>Contact us</h2>
            <p>If you are interested in taking advantage of our hospitality services, please get in touch with us.</p>

            <div className="flex-column">
                <ul className="flex-column spacing-3x">
                    <li className="flex-column spacing-2x">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" > <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path> </svg>
                        <Link href="" className="flex-column">
                            Phone <span>02081285010</span>
                        </Link>
                    </li>

                    <li className="flex-column spacing-2x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 20 20"> <title>envelope</title> <path d="M18 2c1.105 0 2 0.895 2 2v0 12c0 1.105-0.895 2-2 2v0h-16c-1.105 0-2-0.895-2-2v0-12c0-1.1 0.9-2 2-2h16zM13.63 11.1l6.37 4.9v-2l-5.12-3.9 5.12-4.1v-2l-10 8-10-8v2l5.12 4.1-5.12 3.9v2l6.37-4.9 3.63 2.9 3.63-2.9z"/> </svg>                
                        <Link href="" className="flex-column">
                            Email <span>info@bluebelgraviahospitality.co.uk</span>
                        </Link>
                    </li>

                    <li className="flex-column spacing-2x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 32 32"> <title>map</title> <path d="M0 6l10-4v24l-10 4z"/> <path d="M12 1l10 6v23l-10-5z"/> <path d="M24 7l8-6v24l-8 6z"/> </svg>
                        <Link href="" className="flex-column">
                            Address <span>207 Victoria Street/ London</span>
                        </Link>
                    </li>
                </ul>
                
                <span className="flex-column">
                    <p>...By <b>social medias</b></p>
                    <div>
                        <Link 
                            href="https://web.whatsapp.com/send?phone=5541998426029" 
                            target="_blank"
                            aria-label="whatsapp web chat"
                        >
                            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z" fill="#10a100"/></svg>
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/company/blue-belgravia-hospitality-limited/about/" 
                            target="_blank"
                            aria-label="linkedin page"
                        >
                            <svg version="1.1" id="svg2"  fill="#0288D1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  width="42" height="42" viewBox="0 0 1200 1200" xmlSpace="preserve"> <path id="path13441" d="M0,0v1200h1200V0H0z M294.287,235.913 c47.53,0.535,94.35,33.325,96.387,90.088c1.016,50.475-42.971,88.921-97.632,90.088h-1.318 c-47.057-0.543-93.012-34.156-95.142-90.088C197.253,276.088,239.209,237.097,294.287,235.913z M804.199,474.39c52.255,0.324,101.572,15.826,142.09,57.13c42.106,46.96,55.624,111.71,57.129,177.538v299.414H830.859V729.419 c-0.384-52.302-18.3-115.877-87.524-117.993c-40.571,0.432-69.18,24.007-88.77,63.428c-5.348,12.688-6.118,27.273-6.372,41.821 v291.797H475.708c0.66-145.877,1.567-291.743,1.245-437.622c0-41.438-0.399-69.34-1.245-83.716h172.485v73.535 c14.641-20.823,30.879-40.571,52.66-56.47C730.398,483.114,765.889,475.031,804.199,474.39z M206.763,487.134h172.485v521.338 H206.763V487.134L206.763,487.134z"/> </svg>
                        </Link>
                        <Link 
                            href="https://www.facebook.com/207VictoriaStreet" 
                            target="_blank"
                            aria-label="facebook page"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#4267B2" version="1.1" width="42" height="42" viewBox="0 0 95.333 95.333" xmlSpace="preserve"> <g><path d="M93.333,0H2C0.896,0,0,0.896,0,2v91.332c0,1.104,0.896,2,2,2h48.525V63.477H40.284c-0.885,0-1.602-0.717-1.602-1.602   V48.961c0-0.885,0.717-1.603,1.602-1.603h10.242v-8.913c0-11.744,7.395-19.332,18.839-19.332l10.188,0.016   c0.883,0.001,1.6,0.718,1.6,1.602v11.991c0,0.885-0.717,1.602-1.602,1.602l-6.863,0.003c-4.729,0-5.595,1.844-5.595,5.475v7.556   h11.979c0.425,0,0.832,0.169,1.133,0.47c0.3,0.301,0.469,0.708,0.469,1.133L80.67,61.876c0,0.885-0.717,1.603-1.602,1.603H67.092   v31.854h26.24c1.104,0,2-0.896,2-2V2C95.333,0.895,94.438,0,93.333,0z"/> </g></svg>
                        </Link>
                    </div>
                </span>
            </div>
        </section>
    )
};

export default ContactUs;