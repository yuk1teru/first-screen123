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
  { selector: '.left', scale: 1.4 },
  { selector: '.left-orange-with-shapes', scale: 1.44 },
  { selector: '.left-beige-above-pink', scale: 1.44 },
  { selector: '.center', scale: 3.03 },
  { selector: '.left-pink', scale: 1.44 },
  { selector: '.left-bottom-teal', scale: 1.44 },
  { selector: '.pink-under-top-potato', scale: 1.435 },
  { selector: '.left-small-teal', scale: 1.44 },
  { selector: '.left-bottom-orange', scale: 1.44 },
  { selector: '.top-small-dark-teal', scale: 1.44 },
  { selector: '.bottom-green', scale: 1.44 },
  { selector: '.bottom-center-teal', scale: 1.44 },
  { selector: '.bottom-dark-teal', scale: 1.44 },
  { selector: '.bottom-beige', scale: 1.44 },
  { selector: '.lime', scale: 1.44 },
  { selector: '.left-top-transparent', scale: 1.43 },
  { selector: '.green-banana', scale: 1.44 },
  { selector: '.top-teal', scale: 1.44 },
  { selector: '.top-potato', scale: 1.43 },
  { selector: '.right-center-orange', scale: 1.44 },
  { selector: '.right-pink-with-shapes', scale: 1.44 },
  { selector: '.bottom-right-transparent', scale: 1.44 },
  { selector: '.right-top-beige', scale: 1.44 },
  { selector: '.right-dark-teal', scale: 1.44 },
];

tl.to(
  elements.map(el => `.hero__animation-block ${el.selector}`),
  {
    xPercent: 100, // Замість `calc(100vw * (1 - var(--progress)))`
    yPercent: 40, // Замість `calc(40% * (1 - var(--progress)))`
    scale: i => elements[i].scale, // Використовуємо `scale` напряму
    duration: animationDuration,
    ease: 'power2.out',
  },
);

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
