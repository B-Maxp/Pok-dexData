import './Header.css'

function Header() {

    return (
        <>
            <header>
                <img src="../src/assets/pokedex-icon-15.png" alt="Logo Pokédex" className='logo' />
                <img src="../src/assets/téléchargement.png" alt="Logo Pokédex" className='title' />
            </header>
            <nav>
                <a href="/">Home</a>
                <a href="">Pokédex</a>
            </nav>
        </>
    )
}

export default Header
