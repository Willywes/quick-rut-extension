import React, {useState} from 'react';
import ValidateRut from "./components/ValidateRut";
import FindDv from "./components/FindDv";
import GeneratorRut from "./components/GeneratorRut";

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
                <div className="col-12">
                    <hr/>
                </div>
                <div className="col-12">
                    <GeneratorRut/>
                </div>
            </div>
        </div>
    );
};

export default QuickRut
