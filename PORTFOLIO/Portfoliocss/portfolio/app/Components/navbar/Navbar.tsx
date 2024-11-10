
import styles from "./Navbar.module.css";
import Link from "next/link";
import HomeIcon from "./Icons/HomeIcon.js";
import ProfileIcon from "./Icons/About.js";
import CustomIcon from "./Icons/Contact.js";
import FourthIcon from "./Icons/Portfolio.js";
export default function Navbar(){
    return(
        <div className={styles.sidebar}>
        <div className={styles.text}>
           <div className={styles.logo}>   
               <h3>Jawad</h3>
           </div>
            <div className={styles.list}>
    <li><Link href="../../"><HomeIcon /><span>Home</span></Link></li>
    
    <li><Link href="../../About"><ProfileIcon/><span>About</span></Link></li>
    
    <li><Link href="../../portfolio"><FourthIcon/><span>Portfolio</span></Link></li>
    
    <li><Link href="../../Contact"><CustomIcon/><span>Contact</span></Link></li>
</div>

            <div className={styles.space}>
                {/* <div className={styles.Dayslider}><Image id="slider-mode" width={8} height={8} src="icons/day.png" alt=""></Image></div> */}
                
            </div>
        </div>
    </div>
);
}