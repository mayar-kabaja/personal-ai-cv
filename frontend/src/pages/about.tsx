import React from 'react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | AI CV Assistant</title>
        <meta name="description" content="About this project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page">
        <header className="cv-header">
          <h1>About</h1>
          <p>Learn more about this AI CV Assistant</p>
        </header>
        <div className="about-intro">
          <p>
            This site is an AI-powered CV assistant. You can ask questions about my experience, skills, and background, and get answers generated from my resume and professional history.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Use the home page to ask anything—about technologies I use, past roles, or what I’m looking for in my next opportunity. Try the quick question chips or type your own.
          </p>
        </div>
      </div>
    </>
  );
}
