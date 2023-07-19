import "./Body.css";

const Body = (props) => {
    return (
        <div className="body">
            <div className={props.padding ? "padding" : ""} style={{
            width: "100%",
            height: "600px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(" + props.img_src + ")",
            backgroundPosition: "center center"
            }}>
                <p className={props.small ? "title_small" : "title"}>{props.title}</p>
                <p className={props.small ? "description_small" : "description"}>{props.description}</p>
                <p className={props.small ? "external_info_small" : "external_info"}>
                    <a className={props.small ? "links_small" : "links"} href="/">Learn More <span>&gt;</span></a>
                    {props.buy === true && <a className={props.small ? "links_small" : "links"} href="/">Buy <span>&gt;</span></a>}
                </p>
            </div>
        </div>
    );
}

export default Body;