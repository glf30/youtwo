import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Button from "~/components/Buttons/Button";
import { ErrorMessage, Layout, LoadingMessage, MultiColumnVideo } from "~/components/Components";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data, isLoading, error } = api.video.getRandomVideos.useQuery(40);

  const Error = () => {
    if (isLoading) {
      return <LoadingMessage />;
    } else if (error || !data) {
      return (
        <ErrorMessage
          icon="VioletPlay"
          message="No Videos"
          description="Sorry there are no videos at this time."
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <>
      <Head>
        <title>YouTwo</title>
        <meta name="description" content="You too can watch videos with YouTwo! The 2nd best video platform around!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout closeSidebar={false}>
        {!data ? (
          <Error />
        ) : (
          <>
            <MultiColumnVideo
              videos={data.videos.map((video) => ({
                id: video?.id || "",
                title: video?.title || "",
                thumbnailUrl: video?.thumbnailUrl || "",
                createdAt: video?.createdAt || new Date(),
                views: video?.views || 0,
              }))}
              users={data.users.map((user) => ({
                name: user?.name || "",
                image: user?.image || "",
              }))}
            />
          </>
        )}
      </Layout>
    </>
  );
};

export default Home;

function AuthShowcase() {
  const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.video.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <Button variant="primary" size="md"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </Button> */}
    </div>
  );
}
