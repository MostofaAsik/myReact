import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([])
    const [showAll, setShowAll] = useState(false)
    const handleShowAll = () => {
        setShowAll(true)
    }

    const [singleData, setSingleData] = useState({});
    const [uniqueId, setUniqueId] = useState(null);

    useEffect(() => {
        console.log('useEfect 2');

        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [uniqueId])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setData(data.data.tools))
    }, [])
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5'>
                {
                    data.slice(0, showAll ? 12 : 6).map(singledata => {
                        <SingleData
                            singleData={singledata}
                            key={singledata.id}
                            setUniqueId={setUniqueId}
                        ></SingleData>
                    })
                }
            </div>
            {
                !showAll && <span onClick={handleShowAll}>
                    <Button>See More</Button>
                </span>
            }
            <Modal singleData={singleData}></Modal>
        </>
    );
};

export default Card;