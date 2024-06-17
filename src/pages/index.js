import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common'; // Import useColorMode
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode(); // Get current color mode

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, {
      [styles.heroBackgroundImage]: colorMode === 'light', // Apply normal background in light mode
      [styles.heroBackgroundImageInverted]: colorMode === 'dark' // Apply inverted background in dark mode
    })}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
         <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
 
export default Home;