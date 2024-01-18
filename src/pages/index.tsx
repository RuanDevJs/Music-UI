import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import Icon from "@/assets/Icon.svg";
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretDown,
  Heart,
  House,
  MagnifyingGlass,
  Pause,
  Play,
  Playlist,
  Plus,
  User,
} from "phosphor-react";

import Picture from "../assets/picture.png";
import PosterOne from "../assets/posters/playlist-1.png";
import PosterTwo from "../assets/posters/playlist-2.png";

// @ts-ignore
import PlaylistOne from "../assets/playlists/playlist-1.mp4";
// @ts-ignore
import PlaylistTwo from "@/assets/playlists/playlist-2.mp4";

import * as Styled from "@/styles";

const MUSICS = [
  {
    title: "Calm Your Anxiety",
    description: `Lorem Ipsum is simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it to make a type
    specimen book.`,
    src: PlaylistOne,
    poster: PosterOne,
  },
  {
    title: "Lonely Day",
    description: `It has survived not only five centuries, but also the leap
    into electronic typesetting, remaining essentially unchanged.`,
    src: PlaylistTwo,
    poster: PosterTwo,
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playlist: string[] = [PlaylistOne, PlaylistTwo];

  const [playing, setPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(playlist[0]);

  const findCurrentMusic = MUSICS.find((music) => music.src === currentMusic);
  const [playbackRate, setPlaybackRate] = useState(1);

  const [nextMusic, setNextMusic] = useState<string | null>();

  function playMusic() {
    setPlaying(true);
    videoRef.current?.play();
  }

  function pauseMusic() {
    setPlaying(false);
    videoRef.current?.pause();
  }

  function togglePlaying() {
    playing ? pauseMusic() : playMusic();
  }

  function handlePlayMusic(source: string) {
    setCurrentMusic((oldValue) => {
      togglePlaying();

      if (oldValue !== source) {
        setTimeout(() => {
          playMusic();
          return source;
        }, 100);
      }
      return source;
    });
  }

  function handleAccelerateMusic() {
    if (videoRef.current && playbackRate >= 2) {
      setPlaybackRate(1);
      videoRef.current.playbackRate = 1;
      return;
    }

    setPlaybackRate((oldValue) => oldValue + 0.5);
    if (videoRef !== null && videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }

  function handleSlowDownMusic() {
    if (videoRef.current && playbackRate === 0.125) {
      setPlaybackRate(1);
      videoRef.current.playbackRate = 1;
      return;
    }

    setPlaybackRate((oldValue) => oldValue * 0.5);
    if (videoRef !== null && videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }

  function handleNextMusic(source: string) {
    setNextMusic(source);
  }

  function handleEndedMusic() {
    handlePlayMusic(MUSICS[1].src);
  }

  function handleClick(source: string) {
    handlePlayMusic(source);
  }

  return (
    <Styled.Container>
      <Styled.Sidenav>
        <Styled.Heading>
          <Image
            src={Icon}
            alt="MUSIC UI - Icon"
            width={80}
            height={80}
            draggable={false}
          />
          <p>Music UI</p>
        </Styled.Heading>
        <Styled.Navigation>
          <h2>Musics</h2>
          <div className="navigation-link active-link">
            <House size={24} weight="fill" color="#fff" />
            <a href="#">House</a>
          </div>
          <div className="navigation-link">
            <MagnifyingGlass size={24} weight="fill" color="#000" />
            <a href="#">Browser</a>
          </div>
          <div className="navigation-link">
            <Heart size={24} weight="fill" color="#000" />
            <a href="#">For You</a>
          </div>
        </Styled.Navigation>
        <Styled.Navigation>
          <h2>Library</h2>
          <div className="navigation-link">
            <Playlist size={24} weight="fill" color="#000" />
            <a href="#">My Playlist</a>
          </div>
          <div className="navigation-link">
            <User size={24} weight="fill" color="#000" />
            <a href="#">Author</a>
          </div>
          <div className="navigation-link">
            <Heart size={24} weight="fill" color="#000" />
            <a href="#">Favourites</a>
          </div>
        </Styled.Navigation>
      </Styled.Sidenav>
      <Styled.Content>
        <Styled.Header>
          <Styled.Input>
            <button>
              <MagnifyingGlass size={32} />
            </button>
            <input type="text" placeholder="Search Music" />
          </Styled.Input>
          <Styled.Account>
            <Image src={Picture} width={45} height={45} alt="Picture" />
            <div>
              <p>Ruan Vitor,</p>
              <CaretDown size={14} />
            </div>
          </Styled.Account>
        </Styled.Header>
        <Styled.Discover>
          <h1>Discover</h1>
          <Styled.DiscoverContainer>
            <Styled.DiscoverCard>
              <h2>Working Day</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                ipsa eius doloremque laborum illum totam perferendis sint est
                consequatur aspernatur.
              </p>
            </Styled.DiscoverCard>
            <Styled.DiscoverCard>
              <h2>Lonely Nights</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                ipsa eius doloremque laborum illum totam perferendis sint est
                consequatur aspernatur.
              </p>
            </Styled.DiscoverCard>
            <Styled.DiscoverCard>
              <h2>Studying</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                ipsa eius doloremque laborum illum totam perferendis sint est
                consequatur aspernatur.
              </p>
            </Styled.DiscoverCard>
            <Styled.DiscoverCard>
              <h2>A Raining Sunday</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                ipsa eius doloremque laborum illum totam perferendis sint est
                consequatur aspernatur.
              </p>
            </Styled.DiscoverCard>
          </Styled.DiscoverContainer>
        </Styled.Discover>
        <Styled.Playslist>
          <h1>Popular Playlist</h1>
          <Styled.PlayslistContainer>
            {MUSICS.map((music, index) => {
              return (
                <Styled.PlayslistCard key={index}>
                  <Image
                    src={music.poster}
                    alt={music.title}
                    draggable={false}
                  />
                  <div className="info-play">
                    <h3>{music.title}</h3>
                    <p>{music.description}</p>
                    <div className="play-section">
                      <CaretDoubleLeft
                        size={24}
                        onClick={handleSlowDownMusic}
                      />
                      {playing && currentMusic === music.src ? (
                        <Pause
                          size={32}
                          onClick={() => handleClick(music.src)}
                        />
                      ) : (
                        <Play
                          size={32}
                          onClick={() => handleClick(music.src)}
                        />
                      )}
                      <CaretDoubleRight
                        size={24}
                        onClick={handleAccelerateMusic}
                      />
                      <Plus size={24} onClick={handleNextMusic} />
                    </div>
                  </div>
                </Styled.PlayslistCard>
              );
            })}
          </Styled.PlayslistContainer>
        </Styled.Playslist>
      </Styled.Content>
      <Styled.Playing>
        {findCurrentMusic && (
          <Image
            src={findCurrentMusic?.poster}
            alt={findCurrentMusic?.title}
            draggable={false}
          />
        )}
        <span>{findCurrentMusic?.title}</span>
      </Styled.Playing>
      <video
        src={currentMusic}
        ref={videoRef}
        onEnded={handleEndedMusic}
        controls
      />
    </Styled.Container>
  );
}
