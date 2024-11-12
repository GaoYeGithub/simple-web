import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleMouseMove = (e, sectionId) => {
      const section = sectionRefs.current[sectionId];
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      section.style.setProperty('--mouse-x', `${x}px`);
      section.style.setProperty('--mouse-y', `${y}px`);
    };

    Object.keys(sectionRefs.current).forEach(sectionId => {
      const section = sectionRefs.current[sectionId];
      if (section) {
        section.addEventListener('mousemove', (e) => handleMouseMove(e, sectionId));
      }
    });

    return () => {
      Object.keys(sectionRefs.current).forEach(sectionId => {
        const section = sectionRefs.current[sectionId];
        if (section) {
          section.removeEventListener('mousemove', (e) => handleMouseMove(e, sectionId));
        }
      });
    };
  }, []);

  const sections = [
    {
      id: 'Scrapbook',
      title: 'Summer Scrapbook',
      description: 'For everyday of summer I made a tiny coding project',
      image: 'https://cloud-cb21g966g-hack-club-bot.vercel.app/0image.png',
      link: 'https://scrapbook.hackclub.com/YeGao',
      gridClass: 'col-start-1 col-end-5 row-start-1 row-end-3'
    },
    {
      id: '3D SnowMan',
      title: '3D SnowMan',
      description: 'Made a cool Snow Man with three.js',
      image: 'https://cloud-3juezbtaj-hack-club-bot.vercel.app/0image.png',
      link: 'https://gaoyegithub.github.io/Snowmen/',
      gridClass: 'col-start-5 col-end-7 row-start-1 row-end-3'
    },
    {
      id: 'VRM',
      title: 'Cool VRM model',
      description: 'Learned more about 3d modeling in programming',
      image: 'https://cloud-4bxsz99ys-hack-club-bot.vercel.app/0image.png',
      gridClass: 'col-start-7 col-end-9 row-start-1 row-end-3'
    },
    {
      id: 'Discord',
      title: 'Discord Manger, Bot tester, and Programmer',
      description: 'Part of the mangment team of a discord server of 68 members',
      image: 'https://cloud-p33dhdk9s-hack-club-bot.vercel.app/0image.png',
      link: 'https://discord.gg/cusHPQqW',
      gridClass: 'col-start-9 col-end-13 row-start-1 row-end-4'
    },
    {
      id: 'CounterSpell Toronto',
      title: 'Hackathon Webdev, Co-Organizor, Finace Member',
      description: 'One of the Organizor for CounterSpell, a hackathon taking place downtown Spoify Toronto',
      image: 'https://cloud-1ca25vtvd-hack-club-bot.vercel.app/0image.png',
      link: 'https://counterspell.hackclub.com/toronto',
      gridClass: 'col-start-1 col-end-5 row-start-3 row-end-5'
    },
    {
      id: 'Portfolio',
      title: 'Cool Portfolio',
      description: 'Made a cool Cool Portfolio',
      image: 'https://cloud-jc53abhlb-hack-club-bot.vercel.app/0image.png',
      link: 'https://ye-gao-website.vercel.app/',
      gridClass: 'col-start-9 col-end-13 row-start-4 row-end-7'
    },
    {
      id: 'WanderWise',
      title: 'WanderWise Hackathon Submission',
      description: 'My hackathon submission to PeddieHacks 2024. Both Frontend and Backend Developer. But mostly focas on implementing the database, and ai integration',
      image: 'https://cloud-1t0d1a0qd-hack-club-bot.vercel.app/0image.png',
      link: 'https://youtu.be/7AOV1ljGYtA',
      gridClass: 'col-start-1 col-end-6 row-start-5 row-end-7'
    },
    {
      id: '3D',
      title: '3D website',
      description: 'Made a fun 3d website',
      image: 'https://cloud-mdxeik0v2-hack-club-bot.vercel.app/0image.png',
      gridClass: 'col-start-6 col-end-9 row-start-5 row-end-7'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="grid grid-cols-12 gap-4 relative h-screen">

        {[1, 2, 3].map((_, i) => (
          <motion.img
            key={i}
            src="/star.png"
            alt="star"
            className="absolute"
            style={{
              height: '200px',
              objectFit: 'cover',
              filter: 'drop-shadow(0 0 10px rgba(255, 17, 119, 0.5))',
              zIndex: 1,
              rotate: '20deg'
            }}
            initial={{ x: '-100%', y: '10%' }}
            animate={{
              x: '100%',
              y: ['10%', '30%', '10%'],
              rotateZ: [20, 25, 20]
            }}
            transition={{
              duration: 30,
              delay: i * 0.25,
              repeat: Infinity,
              ease: "linear",
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        ))}

        {sections.map((section) => (
          <motion.div
            key={section.id}
            ref={el => sectionRefs.current[section.id] = el}
            className={`${section.gridClass} neon-container rounded-2xl overflow-hidden relative cursor-pointer`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href={section.link} target="_blank" rel="noopener noreferrer">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 neon-image"
                style={{ backgroundImage: `url(${section.image})`, zIndex: 10 }}
              />
              <div className="neon-info">
                <h3 className="text-xl font-bold text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-300">
                  {section.description}
                </p>
              </div>
            </a>
          </motion.div>
        ))}

        <div className="col-start-5 col-end-9 row-start-3 row-end-5 bg-black rounded-2xl neon-title-container relative overflow-hidden p-4">
          <motion.h1
            className="lg:text-9xl md:text-7xl text-3xl font-black text-transparent"
            style={{
              backgroundImage: 'url(https://cloud-g9mlci1wy-hack-club-bot.vercel.app/0image.png)',
              WebkitBackgroundClip: 'text',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ye<br />Aspiring<br />VP<br />
          </motion.h1>
        </div>
      </div>

      <style jsx global>{`
        .neon-container {
          box-shadow: 0 0 20px rgba(255, 20, 147, 0.6), 0 0 40px rgba(0, 191, 255, 0.6);
        }
        .neon-image {
          transition: transform 0.4s ease;
        }
        .neon-title-container {
          background: rgba(0, 0, 0, 0.7);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.6), 0 0 40px rgba(255, 20, 147, 0.6);
        }
        .neon-info {
          clip-path: circle(0% at var(--mouse-x, 50%) var(--mouse-y, 50%));
          transition: clip-path 0.35s ease, opacity 0.35s ease;
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.8);
          padding: 1rem;
          opacity: 0;
          z-index: 20;
        }
        .neon-container:hover .neon-info {
          clip-path: circle(150% at var(--mouse-x, 50%) var(--mouse-y, 50%));
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
