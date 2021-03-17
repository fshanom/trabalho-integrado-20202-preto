import { Link } from "react-router-dom";
//Componente que representa um card pequeno da tela principal. 

function Card(props, clickMaisInfos) {
    return (
        <>
            <div className="col-10 col-sm-6 col-md-4 col-lg-4 mt-4 d-flex justify-content-center">
                <div className="card">
                    <img className="card-img-top"
                        src={props.anuncio.img}
                        alt="Card cap" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.anuncio.nome}</h5>
                        <p className="card-text">{props.anuncio.cardDescricao}</p>
                        <Link to='/animal'>
                            <button className="btn btn-outline-dark text-capitalize" onClick={clickMaisInfos}>Mais informações</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;