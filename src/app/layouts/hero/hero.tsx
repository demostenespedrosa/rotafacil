import styles from "./hero.module.css"

export default function Hero() {
    return (
        <section>

            <div className={styles.container}>
                <h1>sua nova maneira</h1>
                <h1>de  <span className="color">viajar</span></h1>
            </div>

        </section>
    )
}