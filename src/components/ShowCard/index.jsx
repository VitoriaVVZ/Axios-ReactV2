import { Card, Info} from './styles.js'

export default function ShowCard({name, image, language}){
    const defaultImage = 'https://via.placeholder.com/210x295?text=Sem+Imagem';

    return(
        <Card>
            <img src={image || defaultImage} alt={name} />

            <Info>
                <h3>Titulo: {name}</h3>
                <p>Idioma: {language ||'Não informado'}</p>
            </Info>
        </Card>
    );
}
