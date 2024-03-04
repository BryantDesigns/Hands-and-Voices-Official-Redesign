const CloseButton = ({ onClick }) => {
	return (
        <div
			onClick={onClick}
			className="text-hvblue-500 hover:scale-125 mr-2 mt-2 hover:cursor-pointer hover:text-hvorange-500 transition-all ease-in-out duration-300 "
        >
            
			<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
				<path strokeLinecap='round' strokeLinejoin='round' d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
			</svg>
		</div>
	);
};

export default CloseButton;