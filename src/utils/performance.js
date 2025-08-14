// Performance utilities for mobile optimization

// Intersection Observer for lazy loading heavy content
export function createIntersectionObserver(callback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  const observerOptions = { ...defaultOptions, ...options };
  
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver(callback, observerOptions);
  }
  
  // Fallback for older browsers
  return {
    observe: (element) => {
      // Immediately trigger callback for fallback
      callback([{ target: element, isIntersecting: true }]);
    },
    unobserve: () => {},
    disconnect: () => {}
  };
}

// Debounce function for scroll events
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Check if device is mobile
export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768;
}

// Optimize images based on device capabilities
export function getOptimizedImageSrc(baseName, extension = 'jpg') {
  const supportsAvif = 'avif' in new Image();
  const supportsWebp = 'webp' in new Image();
  
  if (supportsAvif) {
    return `/${baseName}.avif`;
  } else if (supportsWebp) {
    return `/${baseName}.webp`;
  }
  return `/${baseName}.${extension}`;
}

// Preload critical resources
export function preloadCriticalResources() {
  const criticalImages = [
    '/credigestor.svg',
    '/header.avif'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Reduce animations on low-end devices
export function optimizeAnimationsForDevice() {
  const isLowEndDevice = navigator.hardwareConcurrency <= 2 || 
                        navigator.deviceMemory <= 2;
  
  if (isLowEndDevice) {
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
    document.documentElement.style.setProperty('--transition-duration', '0.15s');
  }
}