import { chakra, Heading } from "@chakra-ui/react";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="404 Page Not Found" />
      </Head>

      <Heading as="h1" size="xl" mb={4}>
        About us
      </Heading>
      <chakra.p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        optio ducimus officia tempora, et pariatur expedita impedit eligendi
        delectus nisi fuga sapiente, velit voluptatem, quo accusamus suscipit.
        Ab, nihil optio? Eligendi, animi quos incidunt nulla iure saepe possimus
        itaque nobis blanditiis! Eligendi odit accusamus ratione excepturi rerum
        similique, cumque officiis eaque sint. Enim, ab eius quisquam odio
        incidunt animi deleniti. Distinctio deleniti porro deserunt atque unde,
        nesciunt animi corrupti minus maxime eum quis, recusandae ducimus harum
        illo! Atque quasi excepturi perspiciatis beatae earum error sit,
        dignissimos eveniet, aliquam blanditiis illum. Vel qui deserunt itaque,
        iusto ex, officiis ratione minus porro temporibus libero, obcaecati
        numquam totam earum veniam rerum quidem nihil. Placeat, facere ut esse
        nulla reprehenderit nemo explicabo nobis eum. Iusto beatae doloribus
        culpa, autem animi blanditiis laboriosam inventore commodi minus dolorum
        aperiam quas delectus at dignissimos consectetur ea porro cum
        voluptates! Voluptatibus omnis assumenda eaque. Deleniti rem odit quasi!
      </chakra.p>
      <br />
      <chakra.p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        optio ducimus officia tempora, et pariatur expedita impedit eligendi
        delectus nisi fuga sapiente, velit voluptatem, quo accusamus suscipit.
        Ab, nihil optio? Eligendi, animi quos incidunt nulla iure saepe possimus
        itaque nobis blanditiis! Eligendi odit accusamus ratione excepturi rerum
        similique, cumque officiis eaque sint. Enim, ab eius quisquam odio
        incidunt animi deleniti. Distinctio deleniti porro deserunt atque unde,
        nesciunt animi corrupti minus maxime eum quis, recusandae ducimus harum
        illo! Atque quasi excepturi perspiciatis beatae earum error sit,
        dignissimos eveniet, aliquam blanditiis illum. Vel qui deserunt itaque,
        iusto ex, officiis ratione minus porro temporibus libero, obcaecati
        numquam totam earum veniam rerum quidem nihil. Placeat, facere ut esse
        nulla reprehenderit nemo explicabo nobis eum. Iusto beatae doloribus
        culpa, autem animi blanditiis laboriosam inventore commodi minus dolorum
        aperiam quas delectus at dignissimos consectetur ea porro cum
        voluptates! Voluptatibus omnis assumenda eaque. Deleniti rem odit quasi!
      </chakra.p>
    </>
  );
}

export default About