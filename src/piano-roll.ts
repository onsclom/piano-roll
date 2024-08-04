import type { State } from "./state";

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
// 4 bars of 4 quarter notes of 4 sixteenth notes
const sixteenthNotes = 4 * 4 * 4;

export function update(state: State) {}

export function draw(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  dt: number,
) {
  const drawArea = canvas.getBoundingClientRect();
  const noteHeight = 20;
  const sixteenthNoteWidth = 20;
  const octaves = 3;
  for (let i = 0; i < octaves; i++) {
    notes.forEach((note, j) => {
      for (let x = 0; x <= sixteenthNotes; x++) {
        ctx.fillStyle = note.endsWith("#") ? "gray" : "white";
        ctx.fillRect(
          sixteenthNoteWidth * x,
          drawArea.height -
            noteHeight * (j + 1) -
            noteHeight * i * notes.length,
          sixteenthNoteWidth,
          noteHeight,
        );
        ctx.strokeStyle = "black";
        ctx.strokeRect(
          sixteenthNoteWidth * x,
          drawArea.height -
            noteHeight * (j + 1) -
            noteHeight * i * notes.length,
          sixteenthNoteWidth,
          noteHeight,
        );
      }
    });
  }
}
