import styles from "./player2.module.css"

import imgBig from "../assets/img-big.png"
import back from "../assets/back.svg"
import play from "../assets/play.svg"
import front from "../assets/front.svg"

export function Player2() {
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
      <div className={styles.processMusic}>
        <div className={styles.line}></div>
      </div>
      <div className={styles.timeMusic}>
        <small>03:20</small>
        <small>00:12</small>
      </div>
    </div>
  )
}
