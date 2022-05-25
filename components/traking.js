import React from 'react';
import TrakingMail from './TrakingMail';


const Traking = () => {

const handleTrakingSubmit=(data)=>{
    console.log(data);

}

    return (
<>
<TrakingMail onSubmit={handleTrakingSubmit}/>
</>
    );
};

export default Traking;