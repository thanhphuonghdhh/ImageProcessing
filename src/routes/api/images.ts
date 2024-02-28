import { Router, Request, Response } from "express";
import { accessSync } from "fs";
import {
  imageResizing,
  isFileExistinFolder,
  validate,
} from "../../utilities/functionHelpers";
import { resolve } from "path";

const inputPath = "./images/full/";
const outputPath = "./images/thumb/";
const imageRoutes = Router();

imageRoutes.get(
  "/images",
  async (req: Request, res: Response): Promise<void> => {
    const fileName = req.query.filename as string | undefined;
    const width = req.query.width as string | undefined;
    const height = req.query.height as string | undefined;
    const fileNamePath = inputPath + fileName + ".jpg";

    try {
      validate(fileName, width, height);
    } catch (e) {
      if (e instanceof Error) res.status(400).send(e.message);
      else res.status(400).send("Unknown error");
      return;
    }

    try {
      accessSync(fileNamePath);
    } catch (e) {
      res
        .status(400)
        .send(
          `Cannot access to this file ${fileName}.jpg, please fill it again!!`,
        );
      return;
    }

    const thumbName = fileName + "-" + width + "-" + height + ".jpg";
    const thumbPath = outputPath + thumbName;

    if (!isFileExistinFolder(thumbName, outputPath)) {
      await imageResizing(fileNamePath, thumbPath, +width!, +height!);
    }
    res.status(200).sendFile(resolve(thumbPath));
  },
);

export default imageRoutes;
