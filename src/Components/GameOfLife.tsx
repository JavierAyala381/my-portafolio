import { classy, styled } from "@javierayala381/aurora-components";
import React from "react";
import { useEffect, useRef } from "react";
import { useOnce } from "@javierayala381/aurora-components/dist/Api/stateApi"
import { RxQuestionMarkCircled } from "react-icons/rx";
import { CiPlay1, CiStop1 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

const GameContainer = styled.div`game-container ${{
  default: {
    margin: "0 50px 0 50px",
    "& svg": {
      width: "20px",
      height: "20px"
    }
  }
}}`.getReactComponent()

const GameBarContainer = styled.div`about-the-game ${{
  default: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "15px",
    width: "280px", // Set a fixed width for consistency
    margin: "0 auto",
    height: "10px",
    justifyContent: "space-around"
  }
}}`.getReactComponent()

const IconContainer = styled.div`icon-container ${{
  default: {
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90px",
    gap: "7px",
    "& svg": {
      backgroundColor: "#e4e4e4",
      borderRadius: "5px",
      padding: "5px",
      cursor: "pointer"
    }
  }
}}`.getReactComponent()

const WIDTH = 300;
const HEIGHT = 300;
const CELL_SIZE = 10;
const NUM_ROWS = Math.floor(WIDTH / CELL_SIZE);
const NUM_COLS = Math.floor(HEIGHT / CELL_SIZE);

const colors = ["black", "white"];

const spaceInvader = [
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
]

type Board = number[][];
function createBoard(useSpaceInvader): Board {
    return useSpaceInvader ? spaceInvader : Array.from({ length: NUM_ROWS }, () => new Array(NUM_ROWS).fill(0));
}

interface IGame {
  boardState: Board,
  isPlaying: boolean
}

export const GameOfLife =  classy.state.component`conway's-game-of-life`
  .setStates<IGame>({
    boardState: createBoard(true),
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
          const board = createBoard(false);
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
    <GameContainer id={id}>
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
        >

        </canvas>
        <GameBarContainer>
          <RxQuestionMarkCircled />
          <h1 className="text-3xl text-center font-mono mt-4">Game of Life</h1>
          <div className="flex justify-center flex-col items-center">
            <IconContainer className="flex space-x-3">
              <MdOutlineNavigateNext
                className="py-4"
                onClick={ logic.computeNextBoardSeeds }
              />
              <GrPowerReset
                className="py-4"
                onClick={ logic.resetBoard }
              />
              { isPlaying ? 
                <CiStop1 
                  className="py-4"
                  onClick={() => react.dispatch("isPlaying",!isPlaying)}
                /> : 
                <CiPlay1 
                  className="py-4"
                  onClick={() => react.dispatch("isPlaying",!isPlaying)}
                /> }
            </IconContainer>
          </div>
        </GameBarContainer>
    </GameContainer>
  );
}).getReactComponent()