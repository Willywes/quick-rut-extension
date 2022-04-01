import React, {useState} from 'react';
import RutValidator from "w2-rut-validator"

const FindRut = () => {

    const [message, setMessage] = useState(null);
    const [rut, setRut] = useState('');
    const [dv, setDv] = useState('');

    const findRutDv = e => {
        setMessage(null)
        setRut(e.target.value)
        const _dv = RutValidator.getDv(e.target.value);
        if (_dv !== 'NaN') {
            setDv(_dv)
            setMessage(<div className="valid-feedback d-block">El RUT <b>{RutValidator.format(e.target.value)} </b> es
                correcto.</div>)
        } else {
            setMessage(<div className="invalid-feedback d-block">El RUT <b>{rut} </b>ingresado no es correcto, intentalo
                de
                nuevo.</div>)
        }

    }

    const clear = () => {
        setRut('')
        setDv('')
        setMessage(null)
    }

    return (
        <div className="row">
            <div className="col-12">
                <label htmlFor="validate-rut">Find Dv</label>
                <div className="input-group mb-3">
                    <input
                        style={{width: '50%'}}
                        type="text"
                        id="validate-rut"
                        name="validate-rut"
                        className="form-control form-control-sm"
                        placeholder="xxxxxxxxx-x"
                        onChange={findRutDv}
                        onBlur={findRutDv}
                        value={rut}
                    />
                    <input
                        type="text"
                        readOnly={true}
                        className="form-control form-control-sm"
                        value={dv}
                    />
                    <button
                        type="button"
                        onClick={clear}
                        className="btn btn-sm btn-outline-secondary">Clear
                    </button>
                    {
                        message
                    }
                </div>
            </div>
        </div>
    );
};

export default FindRut