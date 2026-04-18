import VideoPlayer from "./ui/video-player";

const VideoPlayerDemo = () => {
  return (
    <VideoPlayer src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4" />
  );
};

export { VideoPlayerDemo };

export default function ProductDemoSection() {
  return (
    <div className="text-white">
      <h2 className="mb-4 text-center text-3xl font-semibold sm:text-4xl md:text-5xl">
        See Bar-IQ in action
      </h2>

      <p className="mx-auto mb-8 max-w-2xl text-center text-base text-white/70 sm:text-lg">
        Watch how Bar-IQ helps teams move from slow manual counts to fast,
        guided inventory workflows.
      </p>
      <VideoPlayerDemo />
    </div>
  );
}
