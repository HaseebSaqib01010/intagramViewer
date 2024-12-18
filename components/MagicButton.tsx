import React from 'react';

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  btnClasses?: string;
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: string;
  type?: 'button' | 'submit' | 'reset'; // Add type prop here
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  btnClasses,
  fullWidth,
  loading,
  loadingText,
  type = 'button', // Default to 'button'
}) => {
  return (
    // <button
    //   type={type} // Ensure this is passed correctly
    //   onClick={handleClick}
    //   className={`magic-button ${btnClasses} ${otherClasses} ${fullWidth ? 'w-full' : ''}`}
    // >
    //   {position === 'left' && icon}
    //   {loading ? loadingText || 'Loading...' : title}
    //   {position === 'right' && icon}
    // </button>

    <button
      className={`relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none ${btnClasses}`}
      style={fullWidth ? { width: "100%" } : {}}
      onClick={handleClick}
      disabled={loading}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {loading ? (
          <>
            {/* Loading spinner */}
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-white"></span>
            {"Downloading"}
          </>
        ) : (
          <>
            {position === "left" && icon}
            {title}
            {position === "right" && icon}
          </>
        )}
      </span>
    </button>

  );
};

export default MagicButton;
