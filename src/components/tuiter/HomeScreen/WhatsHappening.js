import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit', tuit: whatsHappening});
        setWhatsHappening('');
    }
    return (
        <div className="row ms-1 mb-3">
            <div className="col-2 text-center">
                        <img src={"assets/avatar-image-2.png"} className="img-fluid rounded-circle"></img>
            </div>
            <div className='col-10'>
                <div className='form-group'>
                    <textarea id="tuit-text-area"
                        placeholder="What's Happening?"
                        value={whatsHappening}
                        onChange = {(event) => setWhatsHappening(event.target.value)}
                        className="form-control bg-light text-white"/>
                </div>
                <hr></hr>
                <div className='d-flex justify-content-between'>
                    <div className='text-primary'>
                        <span>
                            <i className='fa fa-file-image me-3'></i>
                        </span>
                        <span>
                            <i className='fa fa-chart-line me-3'></i>
                        </span>
                        <span>
                            <i className='fa fa-smile me-3'></i>
                        </span>
                        <span>
                            <i className='fa fa-calendar me-3'></i>
                        </span>
                    </div>
                    <button onClick={tuitClickHandler}
                        className="btn btn-primary rounded-pill">
                        Tuit
                    </button>
                </div>
            </div>
        </div>
    );
};
export default WhatsHappening;