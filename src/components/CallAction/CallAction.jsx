

const CallAction = () => {
  const styleText = {
    color: '#1E3868',
  }
  const buttonStyle = {
    backgroundColor: '#FF914D',
    fontWeight: 'bold',
    width: '11em',
    border: 'none',
    height: '3em',
    borderRadius: '10px',
    color: '#FFF'

  }
  return (
    <div className="text-white py-5" style={{ background: '#E2E8E8' }}>
      <div className="container">
        <div className="row justify-content-center" style={styleText}>
          <div className="col-lg-10 col-md-10" style={{ textAlign: 'center' }}>
            <h2 className="mt-3 font-weight-bold mainFontBold">¿Necesitas vender en internet?</h2>
            <p className="mb-4 mainFontRegular" style={{textAlign:'justify',margin:'0 13px'}}>A lo largo de varios años, hemos tenido el privilegio de colaborar con diversas empresas, <b>potenciando sus ventas</b> en mercados tan diversos como Colombia, Estados Unidos, España y Australia. <b>Nuestra fórmula infalible</b> para garantizar ventas consistentes en el competitivo mundo digital se basa en una <b>comunicación estratégica y efectiva</b> a través de plataformas líderes como Facebook, Instagram y Google. Nos enorgullece poner a tu alcance todo nuestro conocimiento y experiencia para impulsar el crecimiento de tu negocio. ¡Permítenos ser tu socio de éxito!</p>
            <a href='#contact'>
              <button className='btn btn-primary mainFontBold shadow' style={buttonStyle} >Trabaj&eacute;mos Juntos</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallAction;




