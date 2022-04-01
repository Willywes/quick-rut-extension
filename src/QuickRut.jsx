import React, {useState} from 'react';
import ValidateRut from "./components/ValidateRut";

const QuickRut = () => {

    return (
        <div className="wrap">
            <div className="row">
                <div className="col-12">
                   <ValidateRut />
                </div>
            </div>
        </div>
    );
};

export default QuickRut
