import "./Footer.css"

const FooterImages = (props) => {
    return ( 
        <section className="footerSection">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
        <div className="footerText">
        <p className="foodName">{props.name}</p>
        <p className="foodDescription">{props.description}</p>
        <p className="foodPrice">{props.price}</p>

        </div>
        </section>
     );
       
}
 
export default FooterImages;