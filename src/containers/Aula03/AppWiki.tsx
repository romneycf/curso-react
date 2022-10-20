import React, { useEffect, useState } from "react";
import styles from "./AppWiki.module.css";
import Input from "../../components/Input";
import Listitem from "../../components/List-item";
import Listul from "../../components/List-ul";

type RequestResult = [string, string[], string[], string[]];

type ResultsParsed = {
  topics: string[];
  links: string[];
};

export default function AppWiki() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<ResultsParsed>({} as ResultsParsed);

  async function getWikipediaData() {
    const request = await fetch(
      `https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&format=json&origin=*`
    );
    const data = (await request.json()) as RequestResult;
    setResults({ topics: data[1], links: data[3] });
  }

  useEffect(() => {
    if (input.length >= 3) {
      getWikipediaData();
    }
  }, [input]);

  return (
    <div className={styles.appwiki}>
      <p>AppWiki</p>
      <Input
        placeholder="Search"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <div className="list-wrapper">

            <Listul>
          {results.topics &&
            results.links &&
            results.topics.map((topic, index) => (
              <Listitem
                meuTopic={topic}
                link={results.links[index]}
                key={index}
                meuEstado={input}
              />
            ))}
            </Listul>

      </div>
    </div>
  );
}
