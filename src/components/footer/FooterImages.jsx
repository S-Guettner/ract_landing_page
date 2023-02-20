import "./Footer.css"

const FooterImages = (props) => {
    return ( 
        <section className="footerSection">
                    <img src= {props.imgSrc} alt="" />
        <div className="footerText">
        <p className="foodName">{props.name}</p>
        <p className="foodDescription">{props.description}</p>
        <p className="foodPrice">{props.price}</p>

        </div>
        </section>
     );
       
}
 
export default FooterImages;