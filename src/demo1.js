import React from "react";

export class Demo1 extends React.Component {
    render() {
        return (
            <button className="square">
                {/* TODO */}
            </button>
        );
    }
}

export class Board extends React.Component {
    renderSquare(i) {
        return <Demo1/>;
    }

    render() {
        return (<div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
               <div className="game-info">
                    <div> status</div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}
/*
Demo1.defaultProps={
    color:blue
};*/
