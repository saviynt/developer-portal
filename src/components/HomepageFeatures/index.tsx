import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "APIs",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    iconName: "auto_stories", // This is an example icon name
    description: (
      <>
        The EIC REST API enables you to interact with Saviynt programmatically. Use this API to build apps, script interactions with Saviynt, or develop any other type of integration. 
        This page documents the REST resources available in Saviynt Cloud, including the HTTP response codes and example requests and responses.
      </>
    ),
  },
  {
    title: "Extensions",
    //Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    iconName: "api", // This is an example icon name
    description: (
      <>
        Whether you’re looking to extend the functionality of Saviynt through custom extensions, build reports, extend workflows, build email templates, or tap into advanced features, our curated selection of resources is here to support your journey. Explore our comprehensive suite of developer resources and start building more powerful, efficient, and seamless solutions today..
      </>
    ),
  },
  {
    title: "Connectors",
    //Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    iconName: "webhook", // This is an example icon name
    description: (
      <>
       Dive into our comprehensive collection of connectors, apps, and integrations from Saviynt and our community. Harness seamless integrations that bridge on-premises systems and modern cloud applications. Effortlessly explore, implement, and customize to enhance your Saviynt Identity Cloud and achieve greater efficiency and control.
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
