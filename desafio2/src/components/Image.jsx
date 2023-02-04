import React, { useState } from "react"

import image from "../assets/bg.svg"
import imageGif from "../assets/boraCodar.gif"
import btn360 from "../assets/360.svg"
import btnClose from "../assets/close.svg"

export function Image() {
  const [action, setAction] = useState({ hasActive: false })

  function handleActive(actionBtnIcon) {
    if (actionBtnIcon.target.name === "active") {
      setAction({ hasActive: true })
    }

    if (actionBtnIcon.target.name === "close") {
      setAction({ hasActive: false })
    }
  }
  return (
    <div>
      {action.hasActive ? (
        <div className={"relative"}>
          <button
            className={"absolute right-14 top-2 border-none bg-transparent"}
            onClick={handleActive}
          >
            <img name="close" src={btnClose} />
          </button>
          <img
            className={"w-500"}
            src={imageGif}
            alt="imagem gif ilustrativa de um sofá"
          />
        </div>
      ) : (
        <div className={"relative"}>
          <button
            className={"absolute right-12 top-2 border-none bg-transparent"}
            onClick={handleActive}
          >
            <img name="active" src={btn360} />
          </button>
          <img
            className={"w-500"}
            src={image}
            alt="imagem ilustrativa de um sofá"
          />
        </div>
      )}
    </div>
  )
}
