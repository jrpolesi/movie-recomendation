import { MovieBotHeader } from "./MovieBotHeader";
import { MovieBotMessageForm } from "./MovieBotMessageForm";
import { MovieBotMessages } from "./MovieBotMessages";
import { MovieBotResponseOptions } from "./MovieBotResponseOptions";
import "./style.css";

export function MovieBot() {
  return (
    <section className="movie-bot">
      <MovieBotHeader />

      <MovieBotMessages />

      <MovieBotResponseOptions />

      <MovieBotMessageForm />
    </section>
  );
}
