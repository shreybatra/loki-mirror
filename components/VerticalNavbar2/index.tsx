import "./vericalNavbar2.css";

import { useRouter } from 'next/navigation'
import { useState } from "react";

export const VerticalNavbar2 = () => {
    const [selectSize, setSelectSize] = useState(0);
    const router = useRouter();

    const handleFocus = () => {
        setSelectSize(10);
    };

    const handleBlur = () => {
        setSelectSize(0);
    };

    const handleChange = (e) => {
        e.target.size = 1;
        e.target.blur();
        router.push(`/pricing/${e.target.value}`)
    };
    return (
        <div className="pl-[80px] w-[500px]  md:hidden  navBar-container2">
            <select
                name="languages"
                id="language-select"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                size={selectSize}
                className="text-muted"
            >
                <option value={'#'} className="navBar-container2-item">Application Environment</option>
                <option value={'databases'} className="navBar-container2-item">Databases</option>
                <option value={'storage-account'} className="navBar-container2-item">Storage Account</option>
                <option value={'data-bandwidth'} className="navBar-container2-item">Data Bandwidth</option>
                <option value={'full-text-search'} className="navBar-container2-item">Full text Search</option>
                <option value={'logs'} className="navBar-container2-item">Logs</option>
                <option value={'#'} className="navBar-container2-item">Secrets (Coming Soon)</option>
                <option value={'#'} className="navBar-container2-item">Background Jobs (Coming Soon)</option>
                <option value={'#'} className="navBar-container2-item">Cache (Coming Soon)</option>
                <option value={'#'} className="navBar-container2-item">Event Streams (Coming Soon)</option>
            </select>
        </div>
    );
};

