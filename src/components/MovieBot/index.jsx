import { useState } from "react";
import { useFindMovie } from "../../hooks";
import { LoadingSpinner } from "../LoadingSpinner";
import { TitleCard } from "../TitleCard";
import { MovieBotHeader } from "./MovieBotHeader";
import { MovieBotMessageForm } from "./MovieBotMessageForm";
import { MovieBotMessages, YOU_OWNER } from "./MovieBotMessages";
import styles from "./style.module.css";

export function MovieBot({ handleClose, ...props }) {
  const [messages, setMessages] = useState([
    {
      owner: "Movie bot",
      text: "Busque um filme pelo nome",
      movie: null,
      datetime: new Date(),
    },
  ]);

  const { isLoading, error, fn: findMovie } = useFindMovie();

  return (
    <section className={styles.movieBot} {...props}>
      <MovieBotHeader onClose={handleClose} />

      {isLoading || error ? (
        <LoadingSpinner size="3rem" color="var(--primary)" />
      ) : (
        <>
          <MovieBotMessages messages={messages} />
          <MovieBotMessageForm
            onSendMessage={async (message) => {
              setMessages((prevMessages) => [
                ...prevMessages,
                {
                  owner: YOU_OWNER,
                  text: message,
                  datetime: new Date(),
                },
              ]);

              setTimeout(() => {
                setMessages((prevMessages) => [
                  ...prevMessages,
                  {
                    owner: "Movie bot",
                    text: "Buscando filmes...",
                    datetime: new Date(),
                  },
                ]);
              }, 800);

              setTimeout(async () => {
                const movie = await findMovie(message);
                setMessages((prevMessages) => [
                  ...prevMessages,
                  {
                    owner: "Movie bot",
                    text: movie
                      ? `Encontrei o filme ${movie.title}`
                      : "Não encontrei nenhum filme",
                    datetime: new Date(),
                    movie: movie ? (
                      <TitleCard
                        posterPath={movie.posterPath}
                        linkPrefix="/movies/"
                        id={movie.id}
                      />
                    ) : null,
                  },
                ]);
              }, 1600);
            }}
          />
        </>
      )}
    </section>
  );
}
