import classes from './hero.module.css'
import Image from 'next/image'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/vasil.jpeg" alt="An image showing VK" width={300} height={300} />
            </div>
            <h1>Hi, I'm VK</h1>
            <p>
                I blog about web development - especially frontend frameworks like React
                or Vue.
            </p>
        </section>
    )
}

export default Hero