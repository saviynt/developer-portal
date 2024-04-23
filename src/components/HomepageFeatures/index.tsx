import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Guide",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    iconName: "auto_stories", // This is an example icon name
    description: (
      <>
        Designed to empower developers, Saviynt's robust API facilitates the creation of custom applications, automation of interactions, and crafting of integrations that leverage the advanced capabilities of Saviynt Cloud. Here, you will find comprehensive documentation detailing the available RESTful resources, complete with guidance on HTTP response codes as well as illustrative examples of requests and responses to ensure a smooth development experience. 
      </>
    ),
  },
  {
    title: "Tools and Extensions",
    //Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    iconName: "api", // This is an example icon name
    description: (
      <>
        Whether you’re looking to extend the functionality of Saviynt through custom extensions, build reports, extend workflows, build email templates, or tap into advanced features, our curated selection of resources is here to support your journey. Explore our comprehensive suite of developer resources and start building more powerful, efficient, and seamless solutions today..
      </>
    ),
  },
  {
    title: "Connectors and Integrations",
    //Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    iconName: "webhook", // This is an example icon name
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ iconName, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <span className={`material-icons ${styles.featureIcon}`}>{iconName}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
