import toast from "react-hot-toast";
import { FaClipboard } from "react-icons/fa";

type Props = { text: string };

const CopyButton = ({ text }: Props) => {
  return (
    <FaClipboard
      className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer flex-shrink-0 ml-2"
      onClick={() => {
        navigator.clipboard.writeText(text);
        toast("Copied to clipboard!", {
          position: "bottom-right",
          className:
            "bg-gradient-to-r from-purple-500/90 to-blue-500/90 text-white font-medium rounded-lg backdrop-blur-md border border-white/10 shadow-lg",
          icon: <FaClipboard className="mr-2 " />,
          duration: 2000,
          style: {
            padding: "12px 16px",
            boxShadow: "0 4px 12px rgba(124, 58, 237, 0.3)",
          },
        });
      }}
    />
  );
};

export default CopyButton;
