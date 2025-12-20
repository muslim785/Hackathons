import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';

function Footer() {
  const { footer } = useThemeConfig();

  if (!footer) {
    return null;
  }

  const { copyright, links = [], style } = footer;

  // Custom footer links structure
  const customLinks = [
    {
      title: 'Docs',
      items: [
        {
          label: 'Textbook',
          to: '/docs/modules/ros2-textbook/chapter-1-foundations',
        },
        {
          label: 'Module 2: Digital Twin',
          to: '/docs/module-2/intro',
        },
        {
          label: 'Module 3: AI Brain',
          to: '/docs/module-3/intro',
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          label: 'Stack Overflow',
          href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        },
        {
          label: 'Discord',
          href: 'https://discordapp.com/invite/docusaurus',
        },
        {
          label: 'Twitter',
          href: 'https://twitter.com/docusaurus',
        },
      ],
    },
    {
      title: 'More',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/facebook/docusaurus',
        },
      ],
    },
  ];

  return (
    <footer className={clsx('footer', 'ai-card', {
      'footer--dark': style === 'dark',
    })}>
      <div className="container container-fluid">
        <div className="row footer__links">
          {customLinks.map((linkItem, i) => (
            <div key={i} className="col col--4">
              <motion.div
                className="footer__col"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {linkItem.title != null ? (
                  <h4 className="footer__title gradient-text">{linkItem.title}</h4>
                ) : null}
                <ul className="footer__items">
                  {linkItem.items.map((item, key) => (
                    <li key={item.href || item.to} className="footer__item">
                      {item.to ? (
                        <Link
                          className="footer__link-item interactive-element"
                          to={item.to}
                          {...item}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          className="footer__link-item interactive-element"
                          {...item}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {(copyright) && (
          <motion.div
            className="footer__bottom text--center padding-top--md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="footer__copyright">
              {copyright}
            </div>
            <div className="footer__branding margin-top--sm">
              <div className="footer-logo">
                🤖 Physical AI & Humanoid Robotics
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </footer>
  );
}

export default React.memo(Footer);