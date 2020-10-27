import React from "react";

function Copyright() {
    var year = new Date().getFullYear();
    console.log(year);
    return (
        <div>
            <p>Built with love, caffeine and React.<br />Copyright ©️ {year} Fardin Khan.</p>
        </div>
    );
}

export default Copyright;