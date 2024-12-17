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
    <button
      type={type} // Ensure this is passed correctly
      onClick={handleClick}
      className={`magic-button ${btnClasses} ${otherClasses} ${fullWidth ? 'w-full' : ''}`}
    >
      {position === 'left' && icon}
      {loading ? loadingText || 'Loading...' : title}
      {position === 'right' && icon}
    </button>
  );
};

export default MagicButton;
