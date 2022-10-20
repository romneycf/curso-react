import React from "react";

type ListItemProps = {
  link: string;
  meuTopic: string;
  meuEstado: string;
};

export default function Listitem(props: ListItemProps) {
  return (
    <li>
      <a href={props.link} target="_blank">
        {props.meuTopic}
      </a>
    </li>
  );
}
