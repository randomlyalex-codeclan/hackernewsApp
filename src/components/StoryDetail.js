import React, {useState, useEffect} from 'react';

const StoryDetail = ({story}) => {
  
  const [comments, setComments] = useState([]);

  const concatPromiseComments = () => {
    const promises = story.kids.map(kidId => {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${kidId}.json`)
      .then(res => res.json())
    })
    // console.log(promises);
      Promise.all(promises)
      .then(data => {
        const allComments = data.reduce((fetchedComments, commentToAdd) => {
          return fetchedComments.concat(commentToAdd)
        },[])
        // console.log(allComments);
        setComments(allComments);
      })
    }

    useEffect(() => {
      concatPromiseComments() 
      return () => {
        console.log("cleanup")
      }
    }, [])

    const commentNodes = comments.map((comment) => {
      return <li key={comment.id}>{comment.text}</li>
    })

  return (
    <ul className="comment">
      {commentNodes}
    </ul>
  )
}

export default StoryDetail;
