import { CgProfile } from 'react-icons/cg';
import { BiBuildings } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { TiMessage } from 'react-icons/ti';




// import styles from "..styles/form.module.css"
import styles from "../styles/form.module.css"
export function Form(){
    return(
        <form>
            <h1>Form Layout</h1>
            <div className={styles.horizontal}>
                <label >NAME</label>
                <div className={styles.input}><CgProfile/>
                <input  type="text" placeholder="John Dae" />
                </div>
            </div>

            <div className={styles.horizontal}>
                <label >COMPANY</label>
                <div className={styles.input}><BiBuildings/>
                <input  type="text" placeholder="ABC PVT LTD" />
                </div>
            </div>

            <div className={styles.horizontal}>
                <label >EAMIL</label>
                <div className={styles.input}><HiOutlineMail/>
                <input  type="text" placeholder="John.doe@domain.com" />
                </div>
            </div>

            <div className={styles.horizontal}>
                <label >PHONE</label>
                <div className={styles.input}><FiPhone/>
                <input  type="number" placeholder="9876543210" />
                </div>
            </div>

            <div className={styles.horizontal}>
                <label >MESSAGE</label>
                <div className={styles.input} ><TiMessage/>
                <input type="text" placeholder="Hi, Do you have a moment to talk" />
                </div>
            </div>

            <button className={styles.sendBtn}>
                Send
            </button>
        </form>
    )
}