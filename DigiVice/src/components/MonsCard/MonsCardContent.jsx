import PropTypes from "prop-types"

const MonsCardContent = ({MonData}) =>{
   
    return(
        <>
            <img
                src={`${MonData[0].img}`}
                className='card-img-top mt-2'
            />
            <div className='card-body text-center card text-bg-primary mb-3 card border-dark mb-3'>
                <h5 className='card-title'>{`Nombre: ${MonData[0].name}`}</h5>
                <p className="card-text">
                <i className="bi bi-trophy-fill text-warning"></i>&nbsp;{`Nivel: ${MonData[0].level}`}&nbsp;&nbsp;&nbsp;   
                </p>      
            </div>
        </>
    )



}
MonsCardContent.propTypes = {
    MonData:PropTypes.array.isRequired
}

export default MonsCardContent