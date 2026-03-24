import React, { useState, useEffect, useCallback } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

type SlideImage = {
  src: string;
  alt?: string;
  caption?: string;
};

type Props = {
  images: SlideImage[];
};

export default function ImageSlider({ images }: Props) {
  const { siteConfig } = useDocusaurusContext();
  const base = siteConfig.baseUrl.replace(/\/$/, '');
  const resolved = images.map((img) => ({
    ...img,
    src: img.src.startsWith('http') ? img.src : `${base}${img.src}`,
  }));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const close = () => setLightboxOpen(false);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  if (!images || images.length === 0) return null;

  return (
    <>
      {/* Compact thumbnail strip */}
      <div className={styles.strip}>
        {resolved.map((img, i) => (
          <button
            key={i}
            className={styles.thumb}
            onClick={() => open(i)}
            aria-label={img.alt || `Pilt ${i + 1}`}
            title={img.alt || `Pilt ${i + 1}`}
          >
            <img src={img.src} alt={img.alt || ''} loading="lazy" />
            <span className={styles.thumbOverlay}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </span>
          </button>
        ))}
        <span className={styles.count}>{resolved.length} pilt{resolved.length !== 1 ? 'i' : ''}</span>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className={styles.overlay} onClick={close} role="dialog" aria-modal="true">
          {/* Close */}
          <button className={styles.closeBtn} onClick={close} aria-label="Sulge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className={styles.counter}>{activeIndex + 1} / {resolved.length}</div>

          {/* Main image */}
          <div className={styles.imageWrap} onClick={(e) => e.stopPropagation()}>
            <img
              src={resolved[activeIndex].src}
              alt={resolved[activeIndex].alt || ''}
              className={styles.mainImage}
            />
            {resolved[activeIndex].caption && (
              <p className={styles.caption}>{resolved[activeIndex].caption}</p>
            )}
          </div>

          {/* Prev / Next */}
          {resolved.length > 1 && (
            <>
              <button
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Eelmine"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Järgmine"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {/* Dot indicators */}
          {resolved.length > 1 && (
            <div className={styles.dots} onClick={(e) => e.stopPropagation()}>
              {resolved.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Pilt ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
