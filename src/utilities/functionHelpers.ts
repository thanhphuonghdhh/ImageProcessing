import { readdirSync } from "fs";
import sharp from "sharp";

export const isFileExistinFolder = (
  file: string,
  folderPath: string,
): boolean => {
  const fileNames = readdirSync(folderPath);
  for (const filename of fileNames) {
    if (file === filename) return true;
  }

  return false;
};

export const imageResizing = async (
  inputPath: string,
  outputPath: string,
  width: number,
  height: number,
): Promise<void> => {
  console.log("Image is resizing!");
  const res = await sharp(inputPath).resize(width, height).toFile(outputPath);
  console.log(res);
};

export const validate = (
  filename: string | undefined,
  width: string | undefined,
  height: string | undefined,
) => {
  if (filename === undefined || height === undefined || width === undefined) {
    throw new Error("Please fill file name, height and width!!");
  }

  if (isNaN(Number(height)) || isNaN(Number(width))) {
    throw new Error("Height and width must be a number!!");
  }

  if (+height <= 0 || +width <= 0) {
    throw new Error("Height and width must be greater than 0!!");
  }
};
