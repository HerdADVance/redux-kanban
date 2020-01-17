import React from 'react';

//import Card from './Card';
import CreateCard from './CreateCard';

import CardContainer from '../containers/CardContainer'
import CreateCardContainer from '../containers/CreateCardContainer'

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCardContainer listId={list.id} />
      <div>
        {list.cards.map(cardId => (
          //<Card key={cardId} cardId={cardId} listId={list.id} />
          <CardContainer key={cardId} cardId={cardId} />
        ))}
      </div>
    </article>
  );
};

export default List;
