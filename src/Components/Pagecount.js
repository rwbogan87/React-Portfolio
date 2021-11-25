import { useState, useEffect } from 'react'
const countapi = require('countapi-js');

function PageCount() {
    const [visitCount, setVisitCount] = useState(0)

    let counter = () => {
        //! update with namespace details after deployment
        countapi.event('global').then((result) => {
            let myCount=result.value - 58600
            console.log(myCount)
            setVisitCount(myCount)
        })
    }

    useEffect(()=> {
        counter()
    },[])


    return (
        <div className="PageCount">
            Visitors: {visitCount}
        </div>
    );
}

export default PageCount;
