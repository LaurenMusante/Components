import React from 'react';

const ApprovalCard = props => {

	return (
		<div className="ui card">
			<div className="content"> {props.children}</div>
			{/* "Children" is a built-in property. We use it because CommentDetail is a child of ApprovalCard in our App.js */}
			<div className="extra content">
				<div className="ui two buttons">
					<div className="ui basic green button">Approve</div>
					<div className="ui basic red button">Reject</div>
				</div>
			</div>
		</div>
	);
};

export default ApprovalCard;