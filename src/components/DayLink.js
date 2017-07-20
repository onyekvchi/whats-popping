import React from "react";
import moment from "moment";

const DayLink = ({ active, day, onClick }) => {
	return (
		<a
			className={`header__link ${active && "header__link--active"}`}
			onClick={onClick}
			key={day}
		>
			{moment(day, "YYYYMMDD").format("ddd")}
			<span className="header__date">
				{moment(day, "YYYYMMDD").format("MMM DD")}
			</span>
		</a>
	);
};

export default DayLink;
