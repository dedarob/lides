  import Header from "../../components/Header";
  import Footer from "../../components/Footer";
  import { Link } from "react-router-dom";
  import Container from "../../components/Container";
  import styles from "./Home.module.css";
  function Home() {
    return (
      <>
        <Header />
        <Container>
        <section className={styles.home}>
            <div className="apresentacao">
              <p>
                Localize o desfibrilador
                <br />
                <span>mais próximo</span>
              </p>
              <Link to="/localizar" className={`${styles.btn} ${styles.btn_red}`}>
                Começar
              </Link>
            </div>
            <figure>
              <img
                className={styles.img_home}
                src="public\heart.svg"
                alt="Mulher segurando um coração estilo cartoonizado"
              />
            </figure>
          </section>
        </Container>
        <Footer />
      </>
    );
  }

  export default Home;
