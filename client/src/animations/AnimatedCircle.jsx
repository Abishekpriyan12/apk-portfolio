import { useEffect, useRef } from 'react';
import {
  animate,
  createScope,
  createSpring,
  createDraggable,
} from 'animejs';
import illustration from "../assets/images/abi.png";

const AnimatedCircle = () => {
  const circleRef = useRef(null);
  const scopeRef = useRef(null);

  useEffect(() => {
    if (!circleRef.current) return;

    // Create the Anime.js scope.
    scopeRef.current = createScope({ root: circleRef.current }).add((scope) => {
      // Use a single animate(...) call with keyframes instead of animate.timeline(...)
      animate(circleRef.current, {
        keyframes: [
          // 1) Stretch horizontally / compress vertically
          { scaleX: 1.05, scaleY: 0.95, duration: 300 },
          // 2) Reverse: compress horizontally / stretch vertically
          { scaleX: 0.95, scaleY: 1.05, duration: 300 },
          // 3) Return to normal
          { scaleX: 1, scaleY: 1, duration: 300 },
        ],
        loop: true,            // repeat indefinitely
        easing: 'easeInOutSine',
        direction: 'normal',   // if you want to alternate direction, you can do 'alternate'
      });

      // Draggable (optional)
      createDraggable(circleRef.current, {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 }),
      });

      // You can still add methods like rotateCircle if you want:
      scope.add("rotateCircle", () => {
        animate(circleRef.current, {
          rotate: '360',
          duration: 1500,
          easing: 'easeOutSine',
        });
      });
    });

    // Cleanup on unmount
    return () => scopeRef.current?.revert();
  }, []);

  return (
    <div
      ref={circleRef}
      className="w-[380px] h-[380px] rounded-full bg-[#FE4F2D] flex items-center justify-center"
      style={{ transformOrigin: 'center center' }}
    >
      <img src={illustration} alt="avatar" className="z-10" />
    </div>
  );
};

export default AnimatedCircle; 