import { Heading } from "@chakra-ui/react";
import Masonry from "react-masonry-css";
import PersonCard from "./PersonCard";

const breakpointColumnsObj = {
  default: 4,
  992: 2,
  576: 1,
};

export default function () {
  return (
    <>
      <Heading mb={4}>Developer Team</Heading>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid--col"
      >
        <PersonCard
          url="jinzhou"
          photoURL="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fhead.jpg?alt=media&token=80050b1f-4925-4170-ad98-3ca295bac21b"
          name="Jinzhou Wu"
          intro="Founder"
        />
        <PersonCard url="cole-bulger" name="Cole Bulger" intro="Co-Founder" />
        <PersonCard
          url="mario-evangjeli"
          photoURL="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fimages%2Fmario-evengjeli.png?alt=media&token=4cc8e88d-a471-410c-b28b-8d749e887948"
          name="Mario Evangjeli"
          intro="Co-Founder"
        />
        <PersonCard url="ewen-wang" name="Ewen Wang" intro="Developer" />
        {/* <PersonCard /> */}
      </Masonry>
      <Heading mb={4} mt={6}>
        Content Generation Team
      </Heading>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid--col"
      >
        <PersonCard
          url="author-yang"
          photoURL="https://firebasestorage.googleapis.com/v0/b/school-of-athens-122422.appspot.com/o/projectFiles%2Fmisc%2Fauthor-yang.jpg?alt=media&token=99bf1792-014c-4c2e-b75c-cf6c84021dfd"
          name="Author Yang"
          intro="Environmentalist"
        />
        <PersonCard intro="Become an editor" />
      </Masonry>
      <Heading mb={4} mt={6}>
        Design Team
      </Heading>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid--col"
      >
        <PersonCard intro="Become a designer" />
      </Masonry>
      <Heading mb={4} mt={6}>
        Outreach Team
      </Heading>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid--col"
      >
        <PersonCard intro="Become an influencer" />
      </Masonry>
    </>
  );
}
