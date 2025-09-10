import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Projects from "components/projects/Projects";
import Page from "components/utility/Page";

export const metadata = {
    title: "Projects - Saurabh Biware",
    description:
        "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
    alternates: {
        canonical: "https://saurabhbiware.netlify.app",
    },
    openGraph: {
        title: "Projects - Saurabh Biware",
        description:
            "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
        url: "https://saurabhbiware.netlify.app",
    },
    twitter: {
        title: "Projects - Saurabh Biware",
        description:
            "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
        url: "https://saurabhbiware.netlify.app",
    },
};

function projects() {
    return (
        <Page
            currentPage="Projects"
            meta={{
                title: "Projects",
                desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
            }}
        >
            <Heading />
            <Projects />
            <More />
        </Page>
    );
}

export default projects;
