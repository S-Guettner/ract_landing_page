import FooterImages from "./FooterImages.jsx"
import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>
            <FooterImages name='Salat' description='Lorem ipsum dolor sit amet.' price='7,50€'/>
            <FooterImages name='Salat2' description='Lorem ipsum dolor sit amet.' price='8,50€' />
            <FooterImages name='Salat3' description='Lorem ipsum dolor sit amet.' price='9,50€' />
            <FooterImages name='Salat4' description='Lorem ipsum dolor sit amet.' price='10,50€' />
            <FooterImages name='Salat5' description='Lorem ipsum dolor sit amet.' price='11,50€' />
            <FooterImages name='Salat6' description='Lorem ipsum dolor sit amet.' price='13,50€' />
            <FooterImages name='Salat7' description='Lorem ipsum dolor sit amet.' price='15,50€' />
            <FooterImages name='Salat8' description='Lorem ipsum dolor sit amet.' price='17,50€' />
        </footer>
        
     );
}
 
export default Footer;