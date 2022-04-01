import React, {useState} from 'react';
import RutValidator from "w2-rut-validator"

const ValidateRut = () => {

    const [message, setMessage] = useState(null);
    const [rut, setRut] = useState('');

    const rutFormat = e => {
        setMessage(null)
        if (RutValidator.isValid(e.target.value)) {
            setRut(RutValidator.format(e.target.value))
        }
    }

    const rutValidate = e => {
        setMessage(null)
        if (!RutValidator.validate(e.target.value)) {
            setMessage(<div className="invalid-feedback d-block">El RUT <b>{rut} </b>ingresado no es correcto, intentalo
                de
                nuevo.</div>)
        } else {
            setMessage(<div className="valid-feedback d-block">El RUT <b>{rut} </b> es correcto.</div>)
        }
    }

    const clear = () => {
        setRut('')
        setMessage(null)
    }

    return (
        <div className="row">
            <div className="col-12">
                <label htmlFor="validate-rut">Validate Rut</label>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        id="validate-rut"
                        name="validate-rut"
                        className="form-control form-control-sm"
                        onChange={rutFormat}
                        placeholder="19123456-9"
                        onKeyPress={rutValidate}
                        onBlur={rutValidate}
                        value={rut}
                    />
                    <button
                        type="button"
                        onClick={rutValidate}
                        className="btn btn-sm btn-outline-primary">Verify
                    </button>
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

export default ValidateRut