import './Login.css'

function Login() {

    return (
        <>
            <form>
                <img src="../src/assets/Pokémon_logo.svg.png" alt="Titre Pokémon" />
                <p>Connectez-vous pour tout savoir sur vos Pokémon préférés.</p>
                <input type='email' placeholder="Nom d'utilisateur"/>
                <input type="password" placeholder='Mot de passe'/>
                <a href="">Probleme de connexion ?</a>
                <button type="button">Connexion</button>
                <button type="button">Créez un compte</button>
            </form>
        </>
    )
}

export default Login
