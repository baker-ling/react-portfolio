import React from 'react';

export default function About(props) {
  return (
    <main>
      <img src="/img/AvatarMaker.svg" alt="Brian's avatar" className='rounded-full border-2 h-28 sm:h-52 lg:h-72 float-right m-2' />
      <h2 >About Me</h2>
      <div>
        <p>My name is Brian Baker (he/him/his/ベーカー). I was educated as a historical linguist, and I currently work as a professional translator and interpreter of Japanese and English.</p>

        <p>I've dabbled in programming and tech several times over my education and career, and this page is meant to collect my past work into one place for easy viewing. Programming and tech development has always immensely satisfying any time I did it, and now I am in the process of transitioning to make software development my career.</p>

        <p>My specific interests in programming, tech, and development include the following.</p>

        <ul className='list-disc list-outside ml-6'>
          <li>Application development (web, mobile, and desktop)</li>
          <li>Productivity improvement through automation</li>
          <li>Machine learning</li>
          <li>Language technology (NLP, machine translation)</li>
          <li>Internationalization and localization (specifically relating to Japanese)</li>
        </ul>

        <p>I am primarily seeking fulltime employment as an application developer, but I am interested in freelance or part-time web development work. If you have any jobs and are seeking a developer with my skillset, please contact me via the Contact page, by email, or on one of my social media links. </p>

        <p>Outside of linguistics and technology, I enjoy specialty coffee (esp. coffee heavy on fruity or floral notes), tea, soccer (watching and playing, though not so good at the latter), tennis (watching and playing, though pretty bad at the latter), video games. I have a modest collection of fountain pens, neckties that I almost never wear, and tenuguis that I collected while living in and travelling to Japan.</p>

      </div>
    </main>
  );
}