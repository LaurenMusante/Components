import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
    <div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ham"
          timeAgo="Today at 4:45pm"
          content="Please hold my hand"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      {/* dot notation faker.image.avatat from faker documentation */}
      {/* We nested Comment Detail into ApprovalCard here instead of hardcoding it in ApprovalCard.js for reusability. What if we want something other than a comment to show up on the approval card? */}
      {/* NOTE that ApprovalCard is not selt-closing because it's contianing CommentDetail */}
      <ApprovalCard>
        <CommentDetail
          author="Douglas"
          timeAgo="Today at 1:31pm"
          content="Frenulum"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 2:00am"
          content="Nice mousse cake"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );

}

ReactDom.render(<App />, document.querySelector('#root'))