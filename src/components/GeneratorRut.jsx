import React, {useState} from 'react';
import RutValidator from "w2-rut-validator";
import {v4 as uuid} from "uuid";

const GeneratorRut = () => {
    const [quantity, setQuantity] = useState(1)
    const [type, setType] = useState('list')
    const [list, setList] = useState([]);


    const generate = e => {
        const _list =[];
        for (let i = 0; i < quantity; i++) {

            const _rut = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
            const _dv = RutValidator.getDv(_rut.toString());
            _list.push(RutValidator.format(_rut.toString() + _dv.toString()))
        }
        console.log(_list);
        setList(_list)
    }

    const clear = () => {
        setList([])
        setQuantity(1)
        setType('list')
    }

    const RendeList =() => {
        return (
            <div>
                {
                    list.map((item) =>{
                        return <div key={uuid()}>{item}</div>
                    })
                }
            </div>
        )
    }

    const RendeJson =() => {
        return (
            <div>
                <div>{`{`}</div>
                <div>&emsp;{`[`}</div>
                {
                    list.map((item) =>{
                        return <div key={uuid()}>&emsp;&emsp;{`"${item}",`}</div>
                    })
                }
                <div>&emsp;{`]`}</div>
                <div>{`}`}</div>
            </div>
        )
    }

    return (
        <div className="row">
            <div className="col-12">
                <label htmlFor="validate-rut">Random Generate</label>
                <div className="input-group mb-3">
                    <select
                        className="form-select form-select-sm"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                    >
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <select
                        className="form-select form-select-sm"
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                    >
                        <option value="list">List</option>
                        <option value="json">JSON</option>
                    </select>
                    <button
                        type="button"
                        onClick={generate}
                        className="btn btn-sm btn-outline-primary">Generar
                    </button>
                    <button
                        type="button"
                        onClick={clear}
                        className="btn btn-sm btn-outline-secondary">Clear
                    </button>
                </div>

            </div>
            <div className="col-12">
                <div className="render-box">
                    {
                        type == 'list' ? <RendeList /> : null
                    }
                </div>

                <div className="render-box">
                    {
                        type == 'json' ? <RendeJson /> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default GeneratorRut