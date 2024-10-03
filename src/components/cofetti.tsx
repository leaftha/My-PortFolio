import canvasConfetti, {
  CreateTypes,
  GlobalOptions,
  Options,
} from "canvas-confetti";
import { useRef, useEffect } from "react";

export interface IProps extends Options, GlobalOptions {
  fire?: any;
  reset?: any;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  refConfetti?: (confetti: CreateTypes | null) => void;
  onDecay?: () => void;
  onFire?: () => void;
  onReset?: () => void;
}

const Confetti: React.FC<IProps> = (props) => {
  const {
    fire,
    reset,
    width,
    height,
    className,
    style,
    refConfetti,
    onDecay,
    onFire,
    onReset,
    ...confettiProps
  } = props;
  const refCanvas = useRef<HTMLCanvasElement>(null);
  const confettiRef = useRef<CreateTypes | null>(null);

  useEffect(() => {
    if (!refCanvas.current) return;

    const globalOptions: GlobalOptions = {
      resize: typeof props.resize === "undefined" ? true : props.resize,
      useWorker:
        typeof props.useWorker === "undefined" ? true : props.useWorker,
    };

    confettiRef.current = canvasConfetti.create(
      refCanvas.current,
      globalOptions
    );

    if (refConfetti) {
      refConfetti(confettiRef.current);
    }

    return () => {
      if (refConfetti) refConfetti(null);
    };
  }, [props.resize, props.useWorker, refConfetti]);

  useEffect(() => {
    if (fire && confettiRef.current) {
      onFire?.();
      const promise = confettiRef.current(confettiProps);

      promise?.then(() => {
        onDecay?.();
      });
    }
  }, [fire, confettiProps, onFire, onDecay]);

  useEffect(() => {
    if (reset && confettiRef.current) {
      confettiRef.current.reset();
      onReset?.();
    }
  }, [reset, onReset]);

  return (
    <canvas
      ref={refCanvas}
      style={style}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default Confetti;
