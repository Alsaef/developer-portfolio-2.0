/* eslint-disable no-unused-vars */
import React from 'react';
import html from '../../assets/icon/html.png';
import css from '../../assets/icon/css.png';
import js from '../../assets/icon/Javascript.png';
import bootstrap from '../../assets/icon/bootstrap.png';
import tailwind from '../../assets/icon/tailwind.png';
import react from '../../assets/icon/react.js.png';
import next from '../../assets/icon/Nextjs.png';
import redux from '../../assets/icon/Redux.png';
import git from '../../assets/icon/git.png';
import github from '../../assets/icon/github.png';

const MySkill = () => {
    return (
        <section className='mt-24'>
            <p className='text-xl text-orange-600 text-center py-2'>What I Know</p>
            <h3 className='text-4xl font-bold text-center py-2'>Front-end Skill And Git Tools</h3>
            <div className='mt-6 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-y-7 justify-items-center items-center'>
                <div>
                    <img className='w-20 h-20 object-contain' src={html} alt="HTML" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={css} alt="CSS" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={bootstrap} alt="Bootstrap" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={tailwind} alt="Tailwind" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={git} alt="Git" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={github} alt="GitHub" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={js} alt="JavaScript" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={react} alt="React" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={next} alt="Next.js" />
                </div>
                <div>
                    <img className='w-20 h-20 object-contain' src={redux} alt="Redux" />
                </div>
            </div>
        </section>
    );
};

export default MySkill;
