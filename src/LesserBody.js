import "./LesserBody.css"
import Body from './Body';

const LesserBody = (props) => {
    return (
        <div id='explore_more'>
            {props.products.map((product) => (
                <Body title={product.title} description={product.description} buy={product.buy} img_src={product.img_src} padding={product.padding} small={product.small}/>
            ))}
        </div>
    );
}

export default LesserBody