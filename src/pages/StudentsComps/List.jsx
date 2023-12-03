import React from 'react';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];

const List = () => {
  return (
    <div className="list-container">
      <div className="scrollable-list">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
