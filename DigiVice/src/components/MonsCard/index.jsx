import React, { useState, useEffect } from 'react'
import MonsCardContent from './MonsCardContent'
import MonstCardPlaceholder from './MonsCardPlaceholder'
import { getMon } from '../../api/DigimonApi'


export const MonsCard = ({Mons}) => {
    const [MonData, setMonData] = useState(null)

    useEffect(() => {
        const getMonData = async () => {
            setMonData(await getMon(Mons))
        }

        getMonData()

    }, [Mons])


    return (
        <div className='col-1 card m-2' style={{ width: '18rem'}}>
            {
                MonData ?
                    <MonsCardContent MonData={MonData} /> :
                    <MonstCardPlaceholder />
            }
        </div>
    )

   

}

export default MonsCard