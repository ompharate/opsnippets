import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import copyIcon from '../assets/copy.png'
import tickIcon from '../assets/tick.png'
import { useState } from 'react';
import * as React from 'react';
const CodeBlock = ({ code }: { code: string }) => {
    const [isCopied, setIsCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    }
    return (
        <div style={{
            display:"flex",
            alignItems:'start',
            justifyContent:"space-between",
            padding:"5px",
            borderRadius:"5px",
            color:"white",
            fontFamily:"Arial, sans-serif",
            fontSize:"18px",
            backgroundColor:'rgb(29, 31, 33)',
            width:"40%",
        }}>
            <SyntaxHighlighter language="javascript" style={atomDark}>
                {code}
            </SyntaxHighlighter>
            <button onClick={() => copyToClipboard()} style={{
                width: "30px",
                height: '30px',
                cursor: "pointer"
            }}><img width={"100%"} height={"100%"} style={{
                objectFit: "contain"
            }} src={!isCopied ? copyIcon : tickIcon} /></button>
        </div>
    )
}
export  {CodeBlock}