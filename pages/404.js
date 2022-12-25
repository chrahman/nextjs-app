import { chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function NotFound() {
  const router = useRouter();
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  if (timeRemaining <= 0) {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>404 Page Not Found</title>
        <meta name="description" content="404 Page Not Found" />
      </Head>

      <chakra.div my="10.8rem">
        <chakra.h1
          fontSize="7xl"
          fontWeight="bold"
          color="gray.600"
          mb={4}
          textAlign="center"
        >
          404
        </chakra.h1>
        <chakra.p
          fontSize="3xl"
          fontWeight="bold"
          color="gray.600"
          mb={4}
          textAlign="center"
        >
          Page Not Found
        </chakra.p>
        <chakra.p textAlign="center">
          {timeRemaining > 0
            ? `Redirecting in ${timeRemaining} seconds...`
            : "Redirecting to the homepage..."}
        </chakra.p>
      </chakra.div>
    </>
  );
}

export default NotFound;
