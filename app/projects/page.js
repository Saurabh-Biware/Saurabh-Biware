import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Projects from "components/projects/Projects";
import Page from "components/utility/Page";

export const metadata = {
    title: "Projects - Saurabh Biware",
    description:
        "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
    alternates: {
        canonical: "https://miteshtagadiya.js.org/projects",
    },
    openGraph: {
        title: "Projects - Saurabh Biware",
        description:
            "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
        url: "https://miteshtagadiya.js.org/projects",
    },
    twitter: {
        title: "Projects - Saurabh Biware",
        description:
            "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
        url: "https://miteshtagadiya.js.org/projects",
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
