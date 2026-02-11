type VidImgProps = {
  source: string;
  title: string;
  isVideo: boolean;
};

function VidImg({title,source,isVideo }: VidImgProps) {
  return (
    <div className="banner-media">
      {isVideo ? (
        <video 
          src={source}
          autoPlay
          muted
          loop
          playsInline
          className="mt-10 border-2 rounded-2xl"
        />
      ) : (
        <img
          src={source}
          alt={title}
        />
      )}
    </div>
  );
}

export default VidImg;
