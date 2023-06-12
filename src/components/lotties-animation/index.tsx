import { Player } from "@lottiefiles/react-lottie-player";

type LottiesAnimationProps = {
  className?: string;
  height?: string;
  width?: string;
  src: string;
};

function LottiesAnimation({
  className,
  height = "300px",
  width = "300px",
  src,
}: LottiesAnimationProps) {
  return (
    <div className={className}>
      <Player autoplay loop src={src} style={{ height, width }} />
    </div>
  );
}

export default LottiesAnimation;
