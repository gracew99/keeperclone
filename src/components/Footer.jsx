import React from "react";

const year = new Date().getFullYear;

function Footer(){

    return (
        <div className="footer">
            <p>Copyright {year} </p>
        </div>

    );

}

export default Footer;