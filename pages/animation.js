import { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimationPage = () => {
  const ref = useRef(null);

  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  useEffect(() => {
    const handleMouseMove = (event) => {
      const width = ref.current.offsetWidth;
      const mouseX = event.clientX;
      const diff = mouseX - width / 2;
      set({ x: diff / 20 });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [set]);

  return (
    <div className="container">
      <div className="box" ref={ref}>
        <animated.div
          className="content"
          style={{ transform: x.interpolate((val) => `translateX(${val}px)`) }}
        >
          <h1>Animation Page</h1>
          <p>Move your mouse to see the animation!</p>
        </animated.div>
      </div>
    </div>
  );
};

export default AnimationPage;
