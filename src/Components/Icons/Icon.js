import React from 'react';

export const Icon = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.icon}
    </a>
  )
}