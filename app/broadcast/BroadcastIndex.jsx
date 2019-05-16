import React, { useState, useEffect, useRef } from "react"

export default () => {

    const videoElement = useRef()
    const canvas = useRef()

    useEffect(() => {
        (async () => {
            const videoStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            videoElement.current.srcObject =  videoStream

            const webSocket = new WebSocket("ws://localhost:9000/broadcast/actors")
            webSocket.addEventListener("open", () => {
                console.log("WebSocket opened")
                setInterval(() => webSocket.send(canvas.current.toDataURL("image/png")), 1000/20)
            })

            setInterval(
                () => {
                    canvas.current.getContext("2d").drawImage(videoElement.current, 0, 0, 100, 100)
                },
                1000/30
            )

        })()
    })

    return (
        <div id="broadcast-setup">
            <video ref={videoElement} autoPlay={true}/>
            <canvas ref={canvas}/>
        </div>
    )
}
