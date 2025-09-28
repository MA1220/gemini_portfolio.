import React from 'react';
import { ArrowUpIcon } from './icons/UtilityIcons';

interface BackToTopButtonProps {
    show: boolean;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ show }) => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={handleClick}
            className={`fixed bottom-24 right-6 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'} z-50`}
            aria-label="Back to top"
            style={{ visibility: show ? 'visible' : 'hidden' }}
        >
            <ArrowUpIcon className="w-6 h-6" />
        </button>
    );
};

export default BackToTopButton;