import styles from './nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>

            <img className={styles.logo} src="/logo.png" alt="Logo rota fácil" />

            <div className={styles.loginButtons}>

                <button title='sign in'>SIGN IN</button>
                <button title='register'>REGISTER</button>

            </div>

        </nav>
    )
}