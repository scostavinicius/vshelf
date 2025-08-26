import "./CircleProgress.css";

const CircleProgress = ({ value }) => {
	value = Math.round(value * 10);

	const cicleColor =
		value >= 70
			? "#5CB338"
			: value >= 50
			? "#ECE852"
			: value >= 25
			? "#FFC145"
			: "#FB4141";

	return (
		<div className="circle-progress">
			<div className="circle-progress__extern" />

			<div className="circle-progress__intern-wrapper">
				<div className="circle-progress__intern">
					<div
						className="circle-progress__value"
						style={{
							background: `conic-gradient(${cicleColor} 0% ${value}%, #e6e6e6 ${value}% 100%)`,
						}}
					/>
					<div className="circle-progress__center">
						<h3>{value}%</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CircleProgress;
