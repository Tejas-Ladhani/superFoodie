import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import imageradio from "../../assets/beach-radioo.jpg";
import radioimg from "../../assets/beach-radio.jpg";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "./radio.css";

export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");
  const [img, setimg] = useState(true);
  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      console.log(data);
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api
      .searchStations({
        language: "english",
        tag: stationFilter,
        limit: 40,
      })
      .then((data) => {
        return data;
      });

    return stations;
  };

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];

  const setDefaultSrc = (event) => {
    if (img) {
      event.target.src = radioimg;
      setimg(!img);
    }
    else{
        event.target.src = imageradio;
        setimg(!img);
    }
  };

  return (
    <div className="radio">
      {/* <div className="filters">
        {filters.map((filter) => (
          <span
            className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div> */}
      <div className="stations">
        {stations &&
          stations.map((station, index) => {
            return (  
              <div className="station" key={index}>
                <div className="stationName">
                  <img
                    className="logo"
                    src={station.favicon}
                    alt="station logo"
                    onError={setDefaultSrc}
                  />
                </div>
                <div className="name">{station.name}</div>
                <AudioPlayer
                  className="player"
                  src={station.urlResolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={true}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
