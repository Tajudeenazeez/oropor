import { Community } from "@/atoms/communityAtom";
import CommunityNotFound from "@/components/Community/NotFound";
import { db } from "@/firebase/ClientApp";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSidePropsContext } from "next";
import React from "react";
import safeJsonStringify from "safe-json-stringify";


type communityPageProps = {
  communiydata: Community
};

const communityPage: React.FC<communityPageProps> = ({communiydata}) => {
  if(!communiydata){
    return <CommunityNotFound/>
  }
  return <>
    <div>
      welcome to {communiydata.id}
    </div>
  </>;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    

  } catch (error) {
    console.log("Getserverside props error", error)
  }
  console.log(db, "this is real ooo")
  const communityRef = doc(
    db,
    "communities",
    context.query.commuityid as string
  );
  const communityDoc = await getDoc(communityRef)
  return { 
    props:{
      communityData: communityDoc.exists() ? 
      JSON.parse(safeJsonStringify({id:communityDoc.id, ...communityDoc.data()}))
      : ""
    }
  };
}
export default communityPage;