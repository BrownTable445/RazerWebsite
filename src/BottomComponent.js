import './BottomComponent.css'

const BottomComponent = (props) => {
    return (
        <div id="bottom_component">
            <ul className='list'>
                <li id='top'>{props.title}</li>
                {props.links.map((link) => (
                    <li><a href="/" >{link}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default BottomComponent;