import React from 'react';
import Card from './Card';

function CardList({filteredRobots}) {

	return (
		<div>
			{
				filteredRobots.map((robot) => {
					return (<Card 
							key={robot.id} 
							id={robot.id} 
							username={robot.username} 
							email={robot.email}/>
					)
				})
			}
		</div>
	);
};

export default CardList;

