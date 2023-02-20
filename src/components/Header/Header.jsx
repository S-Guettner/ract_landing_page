import Numbers from "./Numbers.jsx"

const Header = () => {
    return ( 
        <header>
            <p>Hello There</p>
            <h1>We Are Glint</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla inventore assumenda est officiis fugit corporis et illo, eveniet sapiente necessitatibus maxime ex autem deleniti eum quae eos iste accusamus iure ipsam provident delectus cumque blanditiis ut! Atque natus magnam tenetur eos officia vel aut porro consequatur blanditiis velit! Nostrum, veniam?</p>
            <section className="headerNumbers">
                <Numbers number='127' />
                <Numbers number='1505'/>
                <Numbers number='109' />
                <Numbers number='102' />
            </section>
        </header>
     );
}

export default Header;