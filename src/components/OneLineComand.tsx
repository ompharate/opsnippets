import * as React from 'react'
import { useState } from 'react'
import copyIcon from '../assets/copy.png'
import tickIcon from '../assets/tick.png'
const OneLineBlock = ({ command }: { command: string }) => {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(command);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }
    return (

        <div style={{
            width: "400px",
            background: '#1e293b',
            display: 'flex',
            flexDirection: "column",
            // justifyItems: "center",
            padding: "2px",
            borderRadius: "5px",
            color: "white",
            fontFamily: "Arial, sans-serif",
            fontSize: "18px",
            fontWeight: "bold",

        }}>
            <div style={{
                height: '50px',
                display: 'flex',
                justifyContent: "space-between",
                border: "1px ",
                alignItems: "center",
                borderBottom: "1px solid white",
                padding: '5px'
            }}>
                <p style={{
                    color: "#7dd3fc",
                    fontSize: '20px',
                    padding: "5px",
                    fontWeight: 'lighter'
                }}>Terminal</p>
                <button onClick={() => copyToClipboard()} style={{
                    width: "30px",
                    height: '30px',
                    cursor:"pointer"
                }}><img width={"100%"} height={"100%"} style={{
                    objectFit: "contain"
                }} src={!isCopied ? copyIcon : tickIcon} /></button>
            </div>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px"

            }}>
                <span className="icon">
                    <svg
                        viewBox="0 0 24 24"
                        fill="#7dd3fc"
                        color='#7dd3fc'
                        height="1   3"
                        width="13"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-[19px] h-[19px] text-gray-800 dark:text-white"
                    >
                        <path
                            d="m9 5 7 7-7 7"
                            stroke-width="3"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke="currentColor"
                        ></path>
                    </svg>
                </span>
                <p style={{
                    fontFamily: "monospace"
                }}>{command}</p>
            </div>
        </div>

    )
}

export  {OneLineBlock}