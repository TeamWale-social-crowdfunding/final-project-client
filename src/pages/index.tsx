"use client";
import DefaultLayout from "@/src/layouts/DefaultLayout";
import { ThemeProvider } from "next-themes";
import Feed from "./home/components/Feed";
import FeedBody from "./home/components/FeedBody";

const index = () => {
  return (
    <ThemeProvider attribute="class">
      <DefaultLayout>
        <FeedBody>
          <Feed></Feed>
        </FeedBody>
      </DefaultLayout>
    </ThemeProvider>
  );
};

export default index;
