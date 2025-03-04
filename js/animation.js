// import { SplitText } from './libs/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener('DOMContentLoaded', function () {
  gsap.utils.toArray('.s-animated').forEach(element => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 70%',
        toggleClass: 'animated-active',
        once: true,
      },
    });
  });

  gsap.utils.toArray('.transform-up').forEach(element => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        toggleClass: 'transform-up-active',
        once: true,
      },
    });
  });

  // =========

  const serviceTitles = document.querySelectorAll('.services__title');
  const serviceTabs = document.querySelectorAll('.services__tablinks');

  function resetAnimations() {
    serviceTitles.forEach(serviceTitle => {
      const titleText = serviceTitle.innerText;
      serviceTitle.innerHTML = '';

      const titleLetters = titleText.split('');
      const titleSpans = titleLetters.map(letter => {
        const span = document.createElement('span');
        span.innerText = letter;
        span.style.opacity = 0;
        serviceTitle.appendChild(span);
        return span;
      });

      gsap.to(titleSpans, {
        opacity: 1,
        stagger: 0.07,
        stagger: 0.05,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: serviceTitle,
          start: 'top 90%',
          end: 'top 30%',
          toggleActions: 'play none none none',
        },
      });
    });

    gsap.to('.services', {
      scrollTrigger: {
        trigger: '.services',
        start: 'top 50%',
        toggleClass: 'services-active',
        once: true,
      },
    });
  }

  resetAnimations();
  serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      serviceTabs.forEach(tab => tab.classList.remove('active'));
      tab.classList.add('active');
      const serviceSection = document.querySelector('.services');
      serviceSection.classList.remove('services-active');
      resetAnimations();
    });
  });

  // ========

  const featuresTextContainers = document.querySelectorAll(
    '.features-intro .text',
  );
  featuresTextContainers.forEach((container, containerIndex) => {
    const textAnimations = container.querySelectorAll('.element-text');

    textAnimations.forEach((textAnimation, textIndex) => {
      const textContent = textAnimation.innerText.trim();
      textAnimation.innerHTML = '';

      const textSpans = [...textContent].map(letter => {
        const span = document.createElement('span');
        span.innerText = letter;
        span.style.opacity = 0;
        textAnimation.appendChild(span);
        return span;
      });

      gsap.to(textSpans, {
        opacity: 1,
        duration: 0.1,
        stagger: 0.05,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 100%',
          // end: 'top 30%',
          toggleActions: 'play none none none',
        },
        delay: containerIndex * 0.3 + textIndex * 0.1,
      });
    });
  });
  document.querySelectorAll('.animated-text-svg').forEach(animatedElement => {
    const textElement = animatedElement.querySelector('span');
    const text = textElement.innerText.trim();
    textElement.innerText = '';

    const letters = text.split('');
    const spanElements = letters.map(letter => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.opacity = 0;
      textElement.appendChild(span);
      return span;
    });

    gsap.to(spanElements, {
      opacity: 1,
      duration: 0.08,
      stagger: 0.05,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: animatedElement,
        start: 'top 75%',
        end: 'top 30%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        const svgPath = animatedElement.querySelector('svg path');
        if (svgPath) {
          gsap.to(svgPath, {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power1.out',
          });
        }
      },
    });
  });

  document.querySelectorAll('.animated-text').forEach(animatedElement => {
    const textElement = animatedElement;
    const text = textElement.textContent.trim();
    textElement.textContent = '';

    const fragment = document.createDocumentFragment();
    const spanElements = text.split('').map(letter => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = 0;
      fragment.appendChild(span);
      return span;
    });

    textElement.appendChild(fragment);

    gsap.to(spanElements, {
      opacity: 1,
      stagger: 0.08,
      stagger: 0.05,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: animatedElement,
        start: 'top 100%',
        // end: 'top 30%',
        toggleActions: 'play none none none',
      },
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('header').classList.add('active');
    // document.querySelector('.main').style.overflow = 'hidden';
    const heroTitle = document.querySelector('.hero__title span');
    heroTitle.style.opacity = 1;
    const heroDescription = document.querySelector('.hero__description');
    const heroButton = document.querySelector('.hero__button');
    const svgPath = document.querySelector('.hero__title svg path');

    if (!heroTitle || !heroDescription || !heroButton || !svgPath) return;

    const text = heroTitle.innerText.trim();
    heroTitle.innerText = '';

    const spanElements = text.split('').map(letter => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.opacity = 0;
      return span;
    });

    spanElements.forEach(span => heroTitle.appendChild(span));

    gsap.to(spanElements, {
      opacity: 1,
      duration: 0.08,
      stagger: 0.05,
      ease: 'power1.out',
      onComplete: () => {
        gsap.to(heroDescription, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            gsap.to(heroButton, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              onComplete: () => {
                gsap.to(svgPath, {
                  strokeDashoffset: 0,
                  duration: 2,
                  ease: 'power1.out',
                });
              },
            });
          },
        });
      },
    });
  }, 3000);
});
