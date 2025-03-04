const animationDuration = 2;

const tl = gsap.timeline();

tl.to('.hero__animation-block', {
  x: (i, target) =>
    `calc(100vw * (1 - ${getComputedStyle(target).getPropertyValue(
      '--progress',
    )}))`,
  y: (i, target) =>
    `calc(40% * (1 - ${getComputedStyle(target).getPropertyValue(
      '--progress',
    )}))`,
  rotate: 0,
  duration: 3,
  ease: 'power2.out',
});

const elements = [
  { selector: '.left', scale: 1.4, x: 195, y: -364 },
  { selector: '.left-orange-with-shapes', scale: 1.44, x: 149, y: -242 },
  { selector: '.left-beige-above-pink', scale: 1.44, x: 98, y: -422 },
  { selector: '.center', scale: 3.03, x: -1178, y: -1044 },
  { selector: '.left-pink', scale: 1.44, x: 166, y: -446 },
  { selector: '.left-bottom-teal', scale: 1.44, x: -94, y: -405 },
  { selector: '.pink-under-top-potato', scale: 1.435, x: -1, y: -113 },
  { selector: '.left-small-teal', scale: 1.44, x: -19, y: -276 },
  { selector: '.left-bottom-orange', scale: 1.44, x: -149, y: -297 },
  { selector: '.top-small-dark-teal', scale: 1.44, x: -146, y: -50 },
  { selector: '.bottom-green', scale: 1.44, x: -263, y: -443 },
  { selector: '.bottom-center-teal', scale: 1.44, x: -304, y: -349 },
  { selector: '.bottom-dark-teal', scale: 1.44, x: -357, y: -446 },
  { selector: '.bottom-beige', scale: 1.44, x: -398, y: -324 },
  { selector: '.lime', scale: 1.44, x: -413, y: -219 },
  { selector: '.left-top-transparent', scale: 1.43, x: 254, y: -56 },
  { selector: '.green-banana', scale: 1.44, x: 40, y: 29 },
  { selector: '.top-teal', scale: 1.44, x: -117, y: 139 },
  { selector: '.top-potato', scale: 1.43, x: 103, y: 101 },
  { selector: '.right-center-orange', scale: 1.44, x: -198, y: 17 },
  { selector: '.right-pink-with-shapes', scale: 1.44, x: -400, y: 16 },
  { selector: '.bottom-right-transparent', scale: 1.44, x: -472, y: -344 },
  { selector: '.right-top-beige', scale: 1.44, x: -283, y: 193 },
  { selector: '.right-dark-teal', scale: 1.44, x: -283, y: 134 },
];
tl.to(
  elements.map(el => el.selector),
  {
    x: (i, target) =>
      `calc(40% * (1 - ${getComputedStyle(target).getPropertyValue(
        '--progress',
      )}))`,
    y: (i, target) => gsap.getProperty(target, 'y') + elements[i].y,
    // scale: i => elements[i].scale,
    duration: 2,
    ease: 'power2.out',
  },
);

// tl.to(
//   elements.map(el => el.selector),
//   {
//     x: (i, target) => {
//       if (i === 1) {
//         console.log(
//           `calc(${elements[i].x}px * ( ${getComputedStyle(
//             target,
//           ).getPropertyValue('--progress')}))`,
//         );
//       }

//       return `calc(${elements[i].x}px * (1 - ${getComputedStyle(
//         target,
//       ).getPropertyValue('--progress')}))`;
//     },
//     y: (i, target) =>
//       `calc(${elements[i].y}px * (1 - ${getComputedStyle(
//         target,
//       ).getPropertyValue('--progress')}))`,
//     scale: i => elements[i].scale,
//     duration: 2,
//     ease: 'power2.out',
//   },
// );

tl.to(
  '.hero__animation-block .connect',
  {
    opacity: 1,
    duration: 2,
    ease: 'power2.out',
  },
  '-=1',
);

tl.to(
  '.animation-ripple',
  {
    opacity: 1,
    duration: 0.7,
    ease: 'power2.out',
  },
  '-=2',
)
  .to(
    '.animation-ripple',
    {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out',
    },
    '-=0.5',
  )
  .to(
    '.animation-ripple',
    {
      '--progress': 0.6,
      duration: 2.5,
      ease: 'power2.out',
    },
    '-=2.3',
  );
