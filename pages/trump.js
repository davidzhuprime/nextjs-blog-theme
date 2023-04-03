import { useSpring, animated } from 'react-spring';

export default function TrumpGuitar() {
  const styles = useSpring({
    from: { transform: 'translate3d(-100%,0,0)' },
    to: { transform: 'translate3d(0,0,0)' },
  });

  return (
    <animated.div style={styles}>
      <h1>Trump playing guitar!</h1>
      <img src="/trump-guitar.jpg" alt="Trump playing guitar" />
    </animated.div>
  );
}
