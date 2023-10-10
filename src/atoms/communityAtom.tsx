import { Timestamp } from "firebase/firestore";
import { atom } from "recoil";


export interface Community  {
    id: string
    creatorId: string
    privacyType: "public" | "restricted" | "private"
    createdAt?: Timestamp
    numberOfMembers: number
    imageUrl?: string
}