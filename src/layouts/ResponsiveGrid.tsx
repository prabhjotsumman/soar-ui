import React from 'react';

const ResponsiveGrid: React.FC = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-gray-200 p-6 rounded shadow">Item 1</div>
        <div className="bg-gray-200 p-6 rounded shadow">Item 2</div>
        <div className="bg-gray-200 p-6 rounded shadow">Item 3</div>
        <div className="bg-gray-200 p-6 rounded shadow">Item 4</div>
      </div>
    );
  };

export default ResponsiveGrid