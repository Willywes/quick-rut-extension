import React, {useState} from 'react';
import ValidateRut from "./components/ValidateRut";
import FindDv from "./components/FindDv";

const QuickRut = () => {

    return (
        <div className="wrap">
            <div className="row">
                <div className="col-12">
                    <ValidateRut/>
                </div>
                <div className="col-12">
                    <hr/>
                </div>
                <div className="col-12">
                    <FindDv/>
                </div>

            </div>
        </div>
    );
};

export default QuickRut
