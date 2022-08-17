import React from "react";

function Arena() {
  return (
    <div className="Arena">
      <div className="board board--top">
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="score">5</div>
        <div className="score">2</div>
        <div className="score">4</div>
      </div>
      <div className="board board--bottom">
        <div className="score">1</div>
        <div className="score">25</div>
        <div className="score">36</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
        <div className="tile">tile</div>
      </div>
    </div>
  );
}

export default Arena;
