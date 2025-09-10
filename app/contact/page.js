import Contact from "components/contact";
import Heading from "components/designs/Heading";
import Page from "components/utility/Page";

export const metadata = {
    title: "Get in Touch - Connect with Me - Saurabh Biware",
    description:
        "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond.",
    alternates: {
        canonical: "https://saurabhbiware.netlify.app/",
    },
    openGraph: {
        title: "Get in Touch - Connect with Me - Saurabh Biware",
        description:
            "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond.",
        url: "https://saurabhbiware.netlify.app/",
    },
    twitter: {
        title: "Get in Touch - Connect with Me - Saurabh Biware",
        description:
            "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond.",
        url: "https://saurabhbiware.netlify.app/",
    },
};

function designs() {
    return (
        <Page
            currentPage="Contact"
            meta={{
                desc: "Let's collaborate! Reach out to discuss projects, opportunities, or just to say hello. I'm excited to connect and explore potential collaborations in the world of web development and beyond.",
            }}
        >
            <Heading />
            <Contact />
        </Page>
    );
}

export default designs;
