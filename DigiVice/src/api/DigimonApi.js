export const getMon = async (Mons)=>{
   
    const url =`https://digimon-api.vercel.app/api/digimon/name/${Mons}`     
    const response = await fetch(url)
    const MonData = await response.json()
    return MonData
}