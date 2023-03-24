import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import styles from "styles/Banner.module.css";

const Banner = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Navbar.Brand>
        <Link href="/" passHref>
          <span className={styles.brand}>Russ Wirtz</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" className={styles.toggle} />
      <Navbar.Collapse id="navbar-nav">
        <Nav className={`ml-auto ${styles.nav}`}>
          {/* <Link href="/work" passHref>
            <span className={styles.link}>Work</span>
          </Link>
          <Link href="/play" passHref>
            <span className={styles.link}>Play</span>
          </Link>
          <Link href="/contact" passHref>
            <span className={styles.link}>Contact</span>
          </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Banner;
