"use client";

import { useState } from "react";

const AsideHeader = () => {
    const [ modalOpen, setModalOpen ] = useState(false);

    return (
        <span onClick={() => setModalOpen(true)}>
            {!modalOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="none" viewBox="0 0 21 14" > <path fill="#fff" d="M2.212 2.875h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212C1.486.125.848.763.848 1.511c0 .748.638 1.364 1.364 1.364zm0 5.5h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212c-.726 0-1.364.638-1.364 1.386 0 .748.638 1.364 1.364 1.364zm0 5.5h17.424c.726 0 1.364-.638 1.364-1.364 0-.726-.638-1.386-1.364-1.386H2.212c-.726 0-1.364.638-1.364 1.386 0 .748.638 1.364 1.364 1.364z" ></path> </svg>
            : 
                null
            }
        </span>
    )
};

export default AsideHeader