import { useEffect, useState } from 'react'

export const Jokes = () => {
  const [joke, setJoke] = useState({
    categories: [],
    created_at: "",
    icon_url: "",
    id: "",
    updated_at: "",
    url: "",
    value: ""
  });

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data);
    }
    fetchJoke();
  }, []);

  return (
    <section>
      <p>{joke.value}</p>
      <p>-{joke.url}</p>
      <p>{joke.categories}</p>
    </section>
  )
}
