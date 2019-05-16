import React, { useRef, useEffect } from "react"

export default () => {

    const canvas = useRef()

    useEffect(() => {
        const webSocket = new WebSocket("ws://localhost:9000/view/actors")

        webSocket.addEventListener("message", event => {
            // canvas.current.getContext("2d").drawImage(image.current, 0, 0, 400, 400)
            // console.log(JSON.stringify(event.data))
            const image = new Image()

            image.onload = () => {
                canvas.current.getContext("2d").drawImage(image, 0, 0, 200, 200)
            }

            image.src = event.data
        })
    })

    return (
        <div id="broadcast-viewer">
            <canvas ref={canvas}/>
        </div>
    )
}
