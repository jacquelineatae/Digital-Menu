import { enroladinhoMignon } from './cardapio';

function MenuItem(){
    return(
        <div>
            <div className="container-menu-item">
                <div className="info-menu-item">
                    <h2>{enroladinhoMignon.name}</h2>
                    <p>{enroladinhoMignon.descricao}</p>
                    <p>{enroladinhoMignon.preco}</p>
                </div>
                <img src={enroladinhoMignon.imagem} className='image-menu-item'/>
            </div>
        </div>
    );
}

export default MenuItem;
