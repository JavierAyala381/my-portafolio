import { classy } from "@javierayala381/aurora-components";
import React, { useCallback } from "react";
import { useEffect, useRef } from "react";
import { useOnce } from "@javierayala381/aurora-components/dist/Api/stateApi"

const WIDTH = 300;
const HEIGHT = 300;
const CELL_SIZE = 10;
const NUM_ROWS = Math.floor(WIDTH / CELL_SIZE);
const NUM_COLS = Math.floor(HEIGHT / CELL_SIZE);

const colors = ["black", "white"];

type Board = number[][];
function createBoard(): Board {
    return Array.from({ length: NUM_ROWS }, () => new Array(NUM_ROWS).fill(0));
}

interface IGame {
  boardState: Board,
  isPlaying: boolean
}

export const GameOfLife =  classy.state.component`conway's-game-of-life`
  .setStates<IGame>({
    boardState: createBoard(),
    isPlaying: false
  })
  .from(({ id, react })  => {
    const { boardState, isPlaying } = react.state
    const canvasRef = useRef<null | HTMLCanvasElement>(null);
    
    const logic = useOnce(() => {
      return ({
        countNbors: (r0: number, c0: number) => {
          let count = 0;
          for (let dr = -1; dr <= 1; ++dr) {
            for (let dc = -1; dc <= 1; ++dc) {
              if (dr != 0 || dc != 0) {
                const r = (r0 + dr + NUM_ROWS) % NUM_ROWS;
                const c = (c0 + dc + NUM_COLS) % NUM_COLS;
                if (react.curr.boardState[r][c] === 1) {
                  ++count;
                }
              }
            }
          }
          return count;
        },
        computeNextBoardSeeds: () => react.dispatch("boardState", (prevBoardState) => {
          let newBoard = prevBoardState.map((row) => [...row]);
    
          for (let r = 0; r < NUM_ROWS; ++r) {
            for (let c = 0; c < NUM_COLS; ++c) {
              const aliveCount = logic.countNbors(r, c);
              if (prevBoardState[r][c] === 0) {
                if (aliveCount === 2) {
                  newBoard[r][c] = 1;
                }
              } else {
                newBoard[r][c] = 0;
              }
            }
          }
          return newBoard;
        }),
        resetBoard: () => {
          const board = createBoard();
          react.dispatch("boardState",board);
        }
      })
    })

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(logic.computeNextBoardSeeds, 100);
    return () => clearInterval(interval);
  }, [isPlaying, logic.computeNextBoardSeeds]);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      ctx.strokeStyle = "gray";
      ctx.lineWidth = 0.1;

      for (let r = 0; r < NUM_ROWS; ++r) {
        for (let c = 0; c < NUM_COLS; ++c) {
          ctx.fillStyle = colors[boardState[r][c]];

          ctx.fillRect(
            Math.floor((WIDTH / NUM_ROWS) * r),
            Math.floor((HEIGHT / NUM_COLS) * c),
            CELL_SIZE,
            CELL_SIZE
          );

          ctx.strokeRect(
            Math.floor((WIDTH / NUM_ROWS) * r),
            Math.floor((HEIGHT / NUM_COLS) * c),
            CELL_SIZE,
            CELL_SIZE
          );
        }
      }
    }
  }, [boardState, canvasRef]);

  return (
    <div id={id} style={{ margin: "0 50px 0 50px"}}>
      <h1 className="text-3xl text-center font-mono mt-4">Game of Life</h1>

      <div className="flex justify-center flex-col items-center">
        <div className="flex space-x-3">
          <button
            className="py-4"
            onClick={ logic.computeNextBoardSeeds }
          >
            Next
          </button>
          <button
            className="py-4"
            onClick={ logic.resetBoard }
          >
            Reset
          </button>
          <button
            className="py-4"
            onClick={() => react.dispatch("isPlaying",!isPlaying)}
          >
            {isPlaying ? "Stop" : "Play"}
          </button>
        </div>
        <canvas
          onClick={(e) => {
            const x = Math.floor(e.nativeEvent.offsetX / CELL_SIZE);
            const y = Math.floor(e.nativeEvent.offsetY / CELL_SIZE);

            let updatedBoardState = [...boardState];
            if (updatedBoardState[x][y] === 0) {
              updatedBoardState[x][y] = 1;
            } else {
              updatedBoardState[x][y] = 0;
            }
            react.dispatch("boardState", updatedBoardState);
          }}
          ref={canvasRef}
          width={WIDTH}
          height={HEIGHT}
          className="bg-gray-900"
        ></canvas>
      </div>
    </div>
  );
}).getReactComponent()