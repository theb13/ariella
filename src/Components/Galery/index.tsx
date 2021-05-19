/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
import React from "react"
import { Column } from "../../styles"

import { Container } from "./styles"
import { Media } from "../../helpers/types"

interface Props {
    medias: any
    view: boolean
}

const Galery: React.FC<Props> = ({ medias, view }: Props) => {
    function handleClick(id: string) {
        const list = document.querySelectorAll(".galery-list")
        const itemBox = document.querySelectorAll(".galery-item-box")
        const getId = document.querySelector(`#${id}`)
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("active")
        }
        getId?.classList.add("active")
        const dataFilter = getId?.getAttribute("data-filter")

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove("active")
            itemBox[k].classList.add("hide")
            if (
                itemBox[k].getAttribute("data-item") === dataFilter ||
                dataFilter === "all"
            ) {
                itemBox[k].classList.add("active")
                itemBox[k].classList.remove("hide")
            }
        }
    }

    return (
        <Container>
            <Column>
                {view ? (
                    <ul>
                        <li
                            className="galery-list active"
                            data-filter="all"
                            id="galery-list-1"
                        >
                            <button
                                type="button"
                                onClick={() => handleClick("galery-list-1")}
                            >
                                Tudo
                            </button>
                        </li>
                        <li
                            className="galery-list"
                            id="galery-list-2"
                            data-filter="4"
                        >
                            <button
                                type="button"
                                onClick={() => handleClick("galery-list-2")}
                            >
                                Photoshoots
                            </button>
                        </li>
                        <li
                            className="galery-list"
                            id="galery-list-3"
                            data-filter="3"
                        >
                            <button
                                type="button"
                                onClick={() => handleClick("galery-list-3")}
                            >
                                Publicidades
                            </button>
                        </li>
                        <li
                            className="galery-list"
                            id="galery-list-4"
                            data-filter="5"
                        >
                            <button
                                type="button"
                                onClick={() => handleClick("galery-list-4")}
                            >
                                Eventos
                            </button>
                        </li>
                    </ul>
                ) : null}
            </Column>
            <div className="galery">
                {medias?.map((med: Media) => (
                    <div
                        className="galery-item-box"
                        data-item={med.author}
                        key={med.guid.rendered + Math.random()}
                    >
                        <img src={med.guid.rendered} alt="imagem" />
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Galery
