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
        <div className="score">score</div>
        <div className="score">score</div>
        <div className="score">score</div>
      </div>
      <div className="board board--bottom">
        <div className="score">score</div>
        <div className="score">score</div>
        <div className="score">score</div>
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
