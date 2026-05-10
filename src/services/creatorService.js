import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../firebase";

export async function fetchCreatorsWithWorks() {
  const snapshot = await getDocs(collection(db, "Creators"));
  const creators = snapshot.docs.map((doc) => doc.data());
  
  console.log("All creators:", creators.length);
  console.log("Sample status values:", creators.slice(0,5).map(c => c.status));
  
  return creators.filter((c) => c.previousWork?.length > 0 && c.status=="active");
}