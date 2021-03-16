import React from 'react';

export default function Iframe() {
  return (
    <div className="iframe-container">
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<iframe src='https://www.youtube.com/embed/_6D55Ji4gl8' width='560' height='315' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen poster={ebookCapa}/>",
        }}
      />
    </div>
  );
}
