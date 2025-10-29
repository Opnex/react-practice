import React, {useState, useEffect} from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts')
  console.log('render')

  useEffect(() => {
    console.log('Resource type change')
  },[resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('post')}>Post</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}

export default App;