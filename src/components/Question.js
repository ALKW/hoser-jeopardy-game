import React from 'react';

// Made into a pure function, as class notation was not necessary

function toEmbededLink(youtubeLink) {
  return "https://www.youtube.com/embed/" + getYoutubeVideoId(youtubeLink);
}

function getYoutubeVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11)
    ? match[2]
    : null;
}

export default props => {
  var questionType = "text";
  if (props.question.question) {
    questionType = "text";
  } else if (props.question.youtubeLink) {
    questionType = "video";
    props.question.youtubeLink = toEmbededLink(props.question.youtubeLink);
    console.log(`embeded link: ${toEmbededLink(props.question.youtubeLink)}`);
  } else if (props.question.imageLink) {
    questionType = "image";
  }
  return (
    <div className='question'>
      {questionType === "text" && <span>{props.question.question}</span>}
      {questionType === "video" && <iframe width="80%" height="80%" src={props.question.youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
      {questionType === "image" && <img src={props.question.imageLink} alt="Your Link is Fucked Up dude"></img>}
    </div>
  );
}