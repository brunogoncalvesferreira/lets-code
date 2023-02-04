import styles from "./player3.module.css"

import imgBig from "../assets/img-big.png"
import back from "../assets/back.svg"
import play from "../assets/play.svg"
import front from "../assets/front.svg"

export function Player3() {
  return (
    <div className={styles.container}>
      <div className={styles.infoMusic}>
        <img src={imgBig} />
        <section>
          <h1>Acorda Devinho</h1>
          <h2>Banda Rocketseat</h2>
        </section>
      </div>
      <div className={styles.controlMusic}>
        <button>
          <img src={back} />
        </button>
        <button>
          <img src={play} />
        </button>
        <button>
          <img src={front} />
        </button>
      </div>
    </div>
  )
}
