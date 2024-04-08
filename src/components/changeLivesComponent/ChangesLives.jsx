import Slide from "../slideComponent/Slide"


const ChangesLives = () => {
  const containerLive = {
    height: '90vh', 
    display: 'flex',
    flexDirection:'column',
    gap:'40px',
    justifyContent: 'center', 
    alignItems: 'center', 
    justifyItems: 'center'
  }
  return (
    <div  style={containerLive}>
      <div className="text-center">
        <span  className=" titleChangelife mainFontBold ">Transformando vidas y </span>
        <span  className="titleChangelife mainFontBold ">negocios</span>
        </div>
      <Slide/>
    </div>
  )
}

export default ChangesLives
