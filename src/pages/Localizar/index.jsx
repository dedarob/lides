import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Localizar.module.css";
import Map from "../../components/MapContainer";
function Localizar() {
  return (
    <>
      <Header />

      <section className={styles.map}>
        <div className={styles.map_menu}>mapmenu</div>
        <div className={styles.map_itself}>
          mapitself
          <Map />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Localizar;
