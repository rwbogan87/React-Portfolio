import { useState, useEffect } from 'react'
const countapi = require('countapi-js');

function PageCount() {
    const [visitCount, setVisitCount] = useState(0)


    //? build database to manage page visits on load
    // let counter = () => {
    //     countapi.event('global').then((result) => {
    //         let myCount=result.value - 58600
    //         setVisitCount(myCount)
    //     })
    // }

    // useEffect(()=> {
    //     counter()
    // },[])


    return (
        <div className="PageCount">
            Visitors: {visitCount}
        </div>
    );
}

export default PageCount;
