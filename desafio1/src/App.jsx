import styles from "./App.module.css"

import { Player1 } from "./components/player1"
import { Player2 } from "./components/player2"
import { Player3 } from "./components/player3"

export function App() {
  return (
    <div className={styles.container}>
      <Player1 />
      <div>
        <Player2 />
        <Player3 />
      </div>
    </div>
  )
}
