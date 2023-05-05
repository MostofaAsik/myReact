import React from 'react';

const Modal = (props) => {
    console.log(props.singleData);
    const { description, image_link, features, integrations } = props.singleData
    console.log(Object.values(features || {}));
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card card-side bg-base-100 ">

                        <div className="card-body">
                            <h2 className="card-title">{description ? description : "Not Found"}</h2>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-xl font-bold'>Features</h1>
                                    {
                                        (Object.values(features || {})).map((value, index) => <p>{index + 1}.{value.feature_name ? value.feature_name : "Not Found"}</p>)
                                    }
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Integrations</h1>
                                    {
                                        integrations.map((int, index) => <p>{index + 1}.{int ? int : "Not Found"}</p>)
                                    }
                                </div>
                            </div>

                        </div>
                        <figure><img className='w-full h-64' src={image_link && image_link[0]} alt="Movie" /></figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;