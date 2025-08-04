import React from 'react';
import s from './AboutUs.module.css';
// если будут иконки — раскомментируй и прокидывай в данные карточек
import icon18 from '@/assets/img/Icon-18.png';
import icon19 from '@/assets/img/Icon-19.png';

const CARDS = [
    {
        id: 'who-we-are',
        number: '01',
        title: 'Who we are?',
        descriptions: [
            'We revolutionize the way freelancers connect with workspaces and clients, enabling service providers to work flexibly and businesses to maximize their potential.',
            'Our platform seamlessly integrates people, services, workspaces—breaking barriers, optimizing opportunities, and shaping the future of the service economy.',
        ],
        icon: icon18,
        alt: 'Icon representing who we are',
        iconClass: 'icon18', // если в css module есть отдельный класс
    },
    {
        id: 'our-mission',
        number: '02',
        title: 'Our mission',
        descriptions: [
            'Our mission is to empower talents and entrepreneurs in the service industry—helping freelancers thrive, business owners maximize earnings, and customers seamlessly organize their lifestyle.',
            'We create a smart, supportive ecosystem that connects professionals with opportunities and ensures effortless access to services, anytime and anywhere.',
        ],
        icon: icon19,
        alt: 'Icon representing our mission',
        iconClass: 'icon19',
    },
];

const makeTitleId = (title) =>
    'aboutus-' + title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

const AboutCard = ({ number, title, descriptions, icon, alt, iconClass }) => (
    <article className={s.aboutUsCard} aria-labelledby={makeTitleId(title)}>
        <div className={s.content}>
            <span className={s.number}>{number}</span>
            <h3 className={s.title} id={makeTitleId(title)}>
                {title}
            </h3>
            <div className={s.descriptionWrapper}>
                {descriptions.map((d, i) => (
                    <p key={i} className={s.description}>
                        {d}
                    </p>
                ))}
            </div>
        </div>
        {icon && (
            <img
                className={iconClass ? s[iconClass] : undefined}
                src={icon}
                alt={alt || ''}
                loading="lazy"
                aria-hidden={alt ? undefined : true}

            />
        )}
    </article>
);

export const AboutUs = React.memo(() => (
    <section id="section4" className={s.aboutUs} aria-labelledby="aboutus-heading">
        <div className={s.container}>
            <h2 id="aboutus-heading">About us</h2>
            <div className={s.aboutUsCardWrap}>
                {CARDS.map((c) => (
                    <AboutCard key={c.id} {...c} />
                ))}
            </div>
        </div>
    </section>
));
