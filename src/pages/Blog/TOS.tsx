import { type NextPage } from "next";
import Head from "next/head";
import { Content, Layout } from "~/components/Components";
const TOS: NextPage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "When you use YouTwo, you’re agreeing to our ToS. We provide the service to you, but you need to follow some rules in return. If you fail to comply with these rules, we may take action on your account, which could include termination.",
    },
    {
      title: "Changes to Our Service",
      content:
        "The online world is always evolving, and so is YouTwo. We’re continuously working on improving and expanding our services, and this could mean adding or removing features, or suspending or terminating certain aspects of our service.",
    },
    {
      title: "Your YouTwo Account",
      content:
        "You need a YouTwo account to upload content, comment on videos, or engage in most activities on the platform. You are responsible for safeguarding your account, and any activities that occur through your account are your responsibility. In the event of unauthorized use of your account, notify us immediately.",
    },
    {
      title: "YouTwo’s Licensing Agreement",
      content:
        "When you upload content to YouTwo, you retain your rights to your content. However, by uploading, you grant YouTwo a worldwide, non-exclusive, royalty-free license to use, reproduce, distribute, display, and publish your content in connection with the service. This license continues even if you stop using our services, primarily because of shared or embedded content on other websites.",
    },
    {
      title: "Content Restrictions",
      content:
        "YouTwo is a platform for a wide variety of content, but certain types of content are not allowed. This includes content that promotes hate speech, violence, or illegal activities, or infringes on others' rights. We will remove such content, and may take action against the account, including termination.",
    },
    {
      title: "Copyright Infringement",
      content:
        "YouTwo complies with copyright laws. We will remove content that infringes on others' copyright. If you believe your copyright has been violated on YouTwo, you can file a copyright infringement notification.",
    },
    {
      title: "Liability for YouTwo Content",
      content:
        "While we strive to ensure that all content on YouTwo adheres to our Community Guidelines, YouTwo isn't liable for any content uploaded by users. You understand that when using YouTwo, you may be exposed to content that you may find offensive, indecent, or objectionable.",
    },
    {
      title: "Advertising on YouTwo",
      content:
        "Some of our services are supported by advertising. In exchange for access to free content, you agree that we can display ads on the YouTwo service.",
    },
    {
      title: "Using YouTwo on Your Devices",
      content:
        "YouTwo is accessible on various devices. Do not use our services in a way that distracts you and prevents you from obeying traffic or safety laws.",
    },
    {
      title: "Age Requirements",
      content:
        "You must be at least 13 years old to create a YouTwo account. If you are under 18, you must have your parent or legal guardian's permission to use YouTwo.",
    },
    {
      title: "Termination",
      content:
        "If you violate the ToS, we may terminate or suspend your access to YouTwo. We also reserve the right to terminate or suspend your access at any time, without notice, for operational, regulatory, legal, or other reasons.",
    },
    {
      title: "Applicable Law and Jurisdiction",
      content:
        "Your relationship with YouTwo is governed by U.S. law. Any legal suit, action, or proceeding arising out of, or related to, these ToS or the YouTwo service will be instituted exclusively in the federal courts of the United States.",
    },
    {
      title: "Conclusion",
      content:
        "At YouTwo, we strive to provide a platform that fosters creativity, collaboration, and community. This mission depends on users like you understanding and complying with our Terms of Service. While our ToS may seem comprehensive, it's essential for maintaining a healthy digital environment where everyone feels safe and welcomed. Remember, using YouTwo's services is always subject to these Terms of Service. If you have any questions or concerns, please reach out to our support team, who are committed to assisting you.",
    },
  ];

  return (
    <>
      <Head>
        <title>Terms and conditions - VidChill</title>
        <meta
          name="description"
          content="By accessing our website, you are agreeing to be bound by these
              terms of service, and agree that you are responsible for
              compliance with any applicable local laws."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout closeSidebar={true}>
        <div className="mt-4">
          <div className="mx-auto max-w-2xl text-center ">
            <p className="text-base font-semibold leading-7 text-violet-600">
              Current as of{" "}
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Terms and conditions{" "}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              By accessing our website, you are agreeing to be bound by these
              terms of service, and agree that you are responsible for
              compliance with any applicable local laws.
            </p>
          </div>
          <Content sections={sections} />
        </div>
      </Layout>
    </>
  );
};

export default TOS;
