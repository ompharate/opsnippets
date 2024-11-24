import * as React from "react";
import { useState } from "react";
import copyIcon from "../assets/copy.png";
import tickIcon from "../assets/tick.png";

type TypeProp =
  | "dark"
  | "light"
  | "basic"
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "red"
  | "yellow"
  | "teal";

interface props {
  command: string;
  type: TypeProp;
  width?: string;
  height?: string;
  title?: string;
}

const OneLineBlock = ({
  command,
  type,
  width = "400",
  height = "0",
  title = "Terminal",
}: props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const colorScheme = {
    dark: {
      background: "#1A1B26",
      text: "#A3E635",
      highlight: "#7dd3fc",
      border: "1px solid #2D3748",
    },
    light: {
      background: "#f8fafc",
      text: "#334155",
      highlight: "#2563eb",
      border: "1px solid #94a3b8",
    },
    basic: {
      background: "#272822",
      text: "#F8F8F2",
      highlight: "#66D9EF",
      border: "1px solid #A6E22E",
    },
    blue: {
      background: "#1E3A8A",
      text: "#BFDBFE",
      highlight: "#3B82F6",
      border: "1px solid #60A5FA",
    },
    green: {
      background: "#064E3B",
      text: "#D1FAE5",
      highlight: "#10B981",
      border: "1px solid #22D3EE",
    },
    purple: {
      background: "#4C1D95",
      text: "#E9D5FF",
      highlight: "#A78BFA",
      border: "1px solid #C084FC",
    },
    orange: {
      background: "#7C2D12",
      text: "#FFEDD5",
      highlight: "#FB923C",
      border: "1px solid #F97316",
    },
    red: {
      background: "#7F1D1D",
      text: "#FFE4E6",
      highlight: "#EF4444",
      border: "1px solid #F87171",
    },
    yellow: {
      background: "#78350F",
      text: "#FEF9C3",
      highlight: "#FACC15",
      border: "1px solid #FBBF24",
    },
    teal: {
      background: "#134E4A",
      text: "#CCFBF1",
      highlight: "#14B8A6",
      border: "1px solid #2DD4BF",
    },
  };

  const colors = colorScheme[type];

  return (
    <div
      style={{
        width: width + "px",
        background: colors.background,
        display: "flex",
        flexDirection: "column",
        padding: "2px",
        borderRadius: "5px",
        color: colors.text,
        fontFamily: "Arial, sans-serif",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: colors.border,
          padding: "5px",
        }}
      >
        <p
          style={{
            color: colors.highlight,
            fontSize: "20px",
            padding: "5px",
            fontWeight: "lighter",
          }}
        >
          {title}
        </p>
        <button
          onClick={() => copyToClipboard()}
          style={{
            width: "30px",
            height: "30px",
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        >
          <img
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "contain",
            }}
            src={!isCopied ? copyIcon : tickIcon}
            alt={isCopied ? "Copied" : "Copy"}
          />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            fill={colors.highlight}
            height="13"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="m9 5 7 7-7 7"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        <p
          style={{
            fontFamily: "monospace",
          }}
        >
          {command}
        </p>
      </div>
    </div>
  );
};

export { OneLineBlock };
