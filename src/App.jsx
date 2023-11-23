import "./index.css";
import Peacock from "./assets/peacock";
import TopCorner from "./assets/top";
import BottomCorner from "./assets/bottom";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
const collRef = collection(db, "wedding");

const searchParams = new URLSearchParams(document.location.search);

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchDataFromFirebase();
  }, [searchParams.get("user")]);

  const fetchDataFromFirebase = async () => {
    const res = await getDocs(
      query(collRef, where("phoneNumber", "==", searchParams.get("user")))
    );
    let data = [];
    try {
      res.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      setData(data[0]);
    } catch (_) {}
  };

  return (
    <div className="main-box">
      <div className="first-card">
        <div className="svg-container">
          <Peacock />
          {data && (
            <div className="text-above-svg">
              <p>{data.firstName}</p>
              <span>Weds</span>
              <p>{data.lastName}</p>
            </div>
          )}
        </div>
        <div className="wedding">Wedding</div>
        <div className="wedding-date">{data?.date}</div>
      </div>
      <div className="video-card">
        <TopCorner />
        {data?.videoId && (
          <iframe
            width="80%"
            height="166"
            className="video-box"
            src={`https://www.youtube.com/embed/${data.videoId}?modestbranding=0&rel=0&showinfo=0`}
            frameBorder="0"
            allowFullScreen="allowFullScreen"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        )}
        <BottomCorner />
      </div>
    </div>
  );
}
