import styles from "./player1.module.css"

import imgBig from "../assets/img-big.png"
import back from "../assets/back.svg"
import play from "../assets/play.svg"
import front from "../assets/front.svg"

export function Player1() {
  return (
    <div className={styles.container}>
      <img src={imgBig} />
      <div className={styles.infoMusic}>
        <h1>Acorda Devinho</h1>
        <h2>Banda Rocketseat</h2>
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
