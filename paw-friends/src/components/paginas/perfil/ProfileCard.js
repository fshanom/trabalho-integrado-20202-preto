import { Link } from 'react-router-dom';

function ProfileCard(props) {

    let profile = props.profile;

    if (profile === undefined){
        profile = {};
    }

    return(

        
        <div class="row d-flex justify-content-center mt-4 mb-5">
            <div class="col-lg-6 col-md-8 col-sm-10 col-10">
                <div class="card mb-3">
                    <img class="profile-img card-img-top" src={profile.Img} alt="Card cap"/>
                    <div class="card-body">
                            <h5 class="card-title ">Usuario: </h5>
                            <p class="card-text">{profile.User}</p>

                            <h5 class="card-title mt-2">Email: </h5>
                            <p class="card-text">{profile.Email}</p>

                            <h5 class="card-title mt-2">Telefone: </h5>
                            <p class="card-text">{profile.Telefone}</p>

                            <h5 class="card-title mt-2">CEP: </h5>
                            <p class="card-text">{profile.CEP}</p>

                            <h5 class="card-title">Endereço: </h5>
                            <p class="card-text">{profile.Endereço}</p>

                            <div class="row text-center justify-content-center">
                                <div class="col-lg-6 col-md-8 col-sm-10 col-10">
                                    <Link to={`/editarPerfil/${1}`}>
                                        <button class="btn btn-outline-dark btn-adocao">Editar Perfil</button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;