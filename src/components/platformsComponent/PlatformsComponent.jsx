


const PlatformsComponent = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4 mainFontBold" style={{ fontWeight: 'bold', fontSize: '3em', color: '#1E3868' }} >Plataformas</h2>
      <div className="row mb-5 text-center">
        <div className="col-md-3 col-sm-6 mb-3">
          <img
            src="https://via.placeholder.com/200"
            alt="Platform 1"
            className="img-fluid"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <img
            src="https://via.placeholder.com/200"
            alt="Platform 2"
            className="img-fluid"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <img
            src="https://via.placeholder.com/200"
            alt="Platform 3"
            className="img-fluid"
          />
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <img
            src="https://via.placeholder.com/200"
            alt="Platform 4"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformsComponent;


