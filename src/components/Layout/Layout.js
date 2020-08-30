import React from 'react';

import './Layout.scss';

export function Container(props) {
  return <div className={`container ${props.className || ''}`}>{props.children}</div>
}

export function Row({ children }) {
  return <div className="row">{children}</div>
}

export function Col(props) {
  const classList = []
  if (props.md) {
    classList.push(`col-md-${props.md}`)
  }
  if (props.sm) {
    classList.push(`col-sm-${props.sm}`)
  }
  return <div className={classList.join(' ')}>{props.children}</div>
};
