import React from 'react';

export const Button = ({ label, onClick }) => {
    return (
        <button
            className="bg-blue-400 hover:bg-blue-500 text-white font-semibold w-full py-2 rounded"
            onClick={onClick}
        >
            {label}
        </button>
    );
};
