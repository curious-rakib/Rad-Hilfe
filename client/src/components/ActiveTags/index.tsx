const ActiveTags = () => {
	const tags = ['#damaged', '#need repair', '#need joints', '#need brakes'];

	return (
		<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', margin: '2rem 0 2rem 3rem' }}>
			{tags.map((tag, index) => {
				return (
					<div
						key={index}
						style={{
							border: '1px solid white',
							borderRadius: '20px',
							padding: '0.25rem 0.5rem',
							display: 'flex',
							alignItems: 'center',
							boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
						}}>
						{tag}
					</div>
				);
			})}
		</div>
	);
};

export default ActiveTags;
