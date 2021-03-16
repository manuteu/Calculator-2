import React from 'react';
import Calculator from './containers/calculator';
import './app.css';

export function App() {
  return (
    <div className="screen">
      <div className={'divSuperior'} />
      <div className={'divSuperior'} />
      <div className={'divSuperior'} />
      <div className={'divLateral'} />
      <Calculator />
      <div className={'divLateral'} />
      <div className={'divInferior'} />
      <div className={'divInferior'} />
      <div className={'divInferior'} />
    </div>
  );
}
