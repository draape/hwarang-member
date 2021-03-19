import React from "react";

export interface VimeoVideoProps {
  className?: string;
  id: number;
  title: string;
}

const VimeoVideo: React.FC<VimeoVideoProps> = ({ className, id, title }) => {
  return (
    <div className={`vimeo-video ${className}`}>
      <div className="vimeo-video__inner">
        <iframe
          className="vimeo-video__video"
          src={`https://player.vimeo.com/video/${id}`}
          title={title}
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VimeoVideo;
