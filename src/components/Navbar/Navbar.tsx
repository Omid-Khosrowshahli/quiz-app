import { FC, useState } from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
	const [displayMenu, setDisplayMenu] = useState<boolean>(false);

	const handleExpandHamburgerMenu = ():void => {
		setDisplayMenu(!displayMenu);
	}
  return (
		<div>
			<div className={styles.navbarDesktop}>
				<span>Quiz<span style={{color: "var(--chi-gong)"}}>Land</span></span>
				<div className={styles.navbarLinkes}>
					<div className={styles.homeAboutContact}>
						<span>Home</span>
						<span>About</span>
						<span>Contact</span>
					</div>
					<div className={styles.signUpSignIn}>
						<Button>Login</Button>
						<Button>Signup</Button>
					</div>
				</div>
			</div>
			<div className={styles.navbarMobile}>
				<div className={styles.hamburgerMenuContainer}>
					<div className={styles.hamburgerMenu} onClick={handleExpandHamburgerMenu}>
						<svg height="3" width="25">
							<line x1="0" y1="0" x2="25" y2="0" style={{stroke:"rgb(0,0,0)", strokeWidth:3}}/>
						</svg>
						<svg height="3" width="25">
							<line x1="0" y1="0" x2="25" y2="0" style={{stroke:"rgb(0,0,0)", strokeWidth:3}}/>
						</svg>
						<svg height="3" width="25">
							<line x1="0" y1="0" x2="25" y2="0" style={{stroke:"rgb(0,0,0)", strokeWidth:3}}/>
						</svg>
					</div>
				</div>
				<span>Quiz<span style={{color: "var(--chi-gong)"}}>Land</span></span>
			</div>
				{displayMenu &&
				  <div className={styles.dropdownMenu}>
						<div>Home</div>
						<hr />
						<div>About</div>
						<hr />
						<div>Contact</div>
						<hr />
						<div>Signin</div>
						<hr />
						<div>Signup</div>
					</div>
				}
		</div>
  );
};

export default Navbar