import TextBlock from "./TextBlock.jsx"
import "./Main.css"
const Main = () => {
    return ( 
        <main>
            <p>What We do</p>
            <h2>We've got everything you need to launch and grow your business</h2>
            <section className="mainSection">
            <TextBlock title='Brand Identity'/>
            <TextBlock title='Illustration'/>
            <TextBlock title='Marketing'/>
            <TextBlock title='Web Design'/>
            </section>
        </main>
     );
}
 
export default Main;